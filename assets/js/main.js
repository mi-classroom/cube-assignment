const switcherElement = document.querySelector('[data-js-layout-switch]');
const switcherViewElements = document.querySelectorAll('[data-js-layout-view]')
switcherElement.addEventListener('click', function(e) {
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