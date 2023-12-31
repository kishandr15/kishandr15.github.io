var typeData = new Typed(".role", {
    strings: [
      "Student",
      "Web Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });


  const openPopupButton = document.getElementById('openPopupButton');
  const closePopupButton = document.getElementById('closePopupButton');
  const popupContainer = document.getElementById('popupContainer');

  openPopupButton.addEventListener('click', () => {
    popupContainer.classList.add('show');
  });

  closePopupButton.addEventListener('click', () => {
    popupContainer.classList.remove('show');
  });
