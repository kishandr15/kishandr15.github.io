import { useEffect, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  opacity: ${({ $isDark }) => ($isDark ? 0.6 : 0.4)};
  z-index: 0;
`;

const vertexShader = `
  void main() {
    gl_Position = vec4( position, 1.0 );
  }
`;

const fragmentShader = `
  precision highp float;
  uniform vec2 resolution;
  uniform float time;
  uniform vec2 center;
  uniform float isDark;

  void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    vec2 offset = (center * 2.0 - 1.0) * vec2(resolution.x / min(resolution.x, resolution.y), resolution.y / min(resolution.x, resolution.y));
    uv -= offset;

    float t = time*0.05;
    float lineWidth = 0.002;

    vec3 color = vec3(0.0);
    for(int j = 0; j < 3; j++){
      for(int i=0; i < 5; i++){
        color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
      }
    }

    // Light theme: remap vivid RGB to muted indigo/violet/slate
    if (isDark < 0.5) {
      float intensity = (color.r + color.g + color.b) / 3.0;
      vec3 indigo = vec3(0.388, 0.4, 0.945);
      vec3 slate = vec3(0.455, 0.42, 0.64);
      color = mix(slate, indigo, clamp(intensity * 2.0, 0.0, 1.0)) * intensity;
    }

    float alpha = max(color[0], max(color[1], color[2]));
    gl_FragColor = vec4(color[0], color[1], color[2], alpha);
  }
`;

const getCenterFromImage = (container) => {
  const heroImg = container.parentElement?.querySelector('img');
  if (heroImg) {
    const containerRect = container.getBoundingClientRect();
    const imgRect = heroImg.getBoundingClientRect();
    const cx = (imgRect.left + imgRect.width / 2 - containerRect.left) / containerRect.width;
    // WebGL y is flipped (0 = bottom, 1 = top), so invert
    const cy = 1.0 - (imgRect.top + imgRect.height / 2 - containerRect.top) / containerRect.height;
    return [Math.max(0, Math.min(1, cx)), Math.max(0, Math.min(1, cy))];
  }
  // Fallback
  if (window.innerWidth <= 960) {
    return [0.5, 0.65];
  }
  return [0.7, 0.5];
};

export const ShaderAnimation = ({ isDark = true }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const initialCenter = getCenterFromImage(container);

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      center: { type: "v2", value: new THREE.Vector2(initialCenter[0], initialCenter[1]) },
      isDark: { type: "f", value: isDark ? 1.0 : 0.0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    const updateCenter = () => {
      const c = getCenterFromImage(container);
      uniforms.center.value.x = c[0];
      uniforms.center.value.y = c[1];
    };

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.resolution.value.x = renderer.domElement.width;
      uniforms.resolution.value.y = renderer.domElement.height;
      updateCenter();
    };

    onResize();
    // Re-calculate center once image has loaded and layout is settled
    const timer = setTimeout(updateCenter, 500);
    window.addEventListener("resize", onResize, false);

    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      uniforms.time.value += 0.05;
      renderer.render(scene, camera);

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    };

    animate();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement);
        }

        sceneRef.current.renderer.dispose();
        geometry.dispose();
        material.dispose();
      }
    };
  }, [isDark]);

  return <Container ref={containerRef} $isDark={isDark} />;
};

export default ShaderAnimation;
