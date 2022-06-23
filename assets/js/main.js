const switcherElement = document.querySelector('[data-js-layout-switch]');
const switcherViewElements = document.querySelectorAll('[data-js-layout-view]')
switcherElement.addEventListener('click', () => {
  switcherElement.classList.toggle('is-active');
  switcherViewElements.forEach((element) => {
    if (element.hasAttribute('data-state')) {

      element.removeAttribute('data-state');
      return false;
    }

    element.setAttribute('data-state', 'rows');
    return true;
  });
});

const themeSwitcherElement = document.querySelector('[data-js-theme-switch]');
themeSwitcherElement.addEventListener('click', (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});