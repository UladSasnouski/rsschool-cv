const inputs = document.querySelectorAll('.controls input');
const reset = document.getElementById("reset");
  
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

reset.addEventListener('click', resetUpdate);

function resetUpdate() {
  document.documentElement.style.setProperty('--base', '#2e2e2e');
  document.documentElement.style.setProperty('--spacing', '2px');
  document.documentElement.style.setProperty('--blur', '0px');
  document.documentElement.style.setProperty('--width', '40%');
  document.documentElement.style.setProperty('--transform', 'rotate(0deg)');
  document.documentElement.style.setProperty('--grayscale', '0%');
  document.documentElement.style.setProperty('--sepia', '0%');
  document.documentElement.style.setProperty('--opacity', '100%');
  document.documentElement.style.setProperty('--brightness', '100%');
  document.documentElement.style.setProperty('--contrast', '100%');
  document.documentElement.style.setProperty('--saturate', '100%');
  document.documentElement.style.setProperty('--hue-rotate', '0deg');
  document.documentElement.style.setProperty('--invert', '0%');
}
  
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
