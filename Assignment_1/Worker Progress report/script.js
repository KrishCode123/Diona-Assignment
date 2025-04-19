document.addEventListener('DOMContentLoaded', () => {
    const treatmentRadios = document.getElementsByName('treatment');
    treatmentRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const providerInput = document.querySelector('input[placeholder="Medical Provider Type"]');
        if (radio.checked && radio.nextElementSibling.textContent.includes('Receiving')) {
          providerInput.style.display = 'inline-block';
        } else {
          providerInput.style.display = 'none';
        }
      });
    });

    const medicationRadios = document.getElementsByName('medication');
    medicationRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const medInput = document.querySelector('input[placeholder="Name of medication"]');
        if (radio.checked && radio.nextElementSibling.textContent.includes('Taking')) {
          medInput.style.display = 'inline-block';
        } else {
          medInput.style.display = 'none';
        }
      });
    });
  
    const exerciseRadios = document.getElementsByName('home-exercise');
    exerciseRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const textarea = document.querySelector('textarea[rows="2"]');
        if (radio.checked && radio.nextElementSibling.textContent.includes('Doing')) {
          textarea.style.display = 'block';
        } else {
          textarea.style.display = 'none';
        }
      });
    });

    document.querySelector('input[placeholder="Medical Provider Type"]').style.display = 'none';
    document.querySelector('input[placeholder="Name of medication"]').style.display = 'none';
    document.querySelector('textarea[rows="2"]').style.display = 'none';
});
  