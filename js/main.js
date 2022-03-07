// Todo /* =============== active button work filters =============== */

const btnWork = document.querySelectorAll('.item_filters');

function activeBtn() {
  btnWork.forEach((el) => el.classList.remove('active'));
  this.classList.add('active');
}

btnWork.forEach((el) => {
  el.addEventListener('click', activeBtn);
});

// Todo /* =============== Scroll active link =============== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionID = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.navbar_menu a[href*=' + sectionID + ']').classList.add('scroll-active');
    } else {
      document.querySelector('.navbar_menu a[href*=' + sectionID + ']').classList.remove('scroll-active');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// Todo /* =============== Button dark/light theme =============== */
const btnTheme = document.getElementById('btn-theme'),
  lightTheme = 'light-theme',
  iconTheme = 'bxs-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? 'light-theme' : 'dark-theme');
const getCurrentIcon = () => (btnTheme.classList.contains(iconTheme) ? 'bx bxs-sun' : 'bx bxs-moon');

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove'](lightTheme);
  btnTheme.classList[selectedIcon === 'bx bxs-moon' ? 'add' : 'remove'](iconTheme);
}

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme);
  btnTheme.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
