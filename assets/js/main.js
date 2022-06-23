const switcherElement = document.querySelector('[data-js-layout-switch]');
const switcherViewElements = document.querySelectorAll('[data-js-layout-view]')
switcherElement.addEventListener('click', function(e) {
  switcherViewElements.forEach((element) => {
    switcherElement.classList.toggle('is-active');
    if (element.hasAttribute('data-state')) {

      element.removeAttribute('data-state');
      return false;
    }

    element.setAttribute('data-state', 'rows');
    return true;
  });
})