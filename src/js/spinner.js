

export function createSpinner() {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    `;
    return spinner;
  }

  export function showSpinner(container) {
    const spinner = createSpinner();
    container.appendChild(spinner);
  }

  export function hideSpinner(container, spinner) {
    container.removeChild(spinner);
  }