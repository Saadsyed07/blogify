document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelectorAll('.btn-primary').forEach(button => button.classList.toggle('dark-mode'));
});

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm');

    // Initialize all range inputs
    const rangeInputs = form.querySelectorAll('.form-control-range');
    rangeInputs.forEach((input) => {
        const valueSpan = input.nextElementSibling;
        if (valueSpan && valueSpan.classList.contains('rangeValue')) {
            valueSpan.textContent = `${input.value}%`;
        }
    });

    // Event delegation for handling input changes
    form.addEventListener('input', (event) => {
        if (event.target.classList.contains('form-control-range')) {
            const input = event.target;
            const valueSpan = input.nextElementSibling;
            if (valueSpan && valueSpan.classList.contains('rangeValue')) {
                valueSpan.textContent = `${input.value}%`;
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const rangeInputs = document.querySelectorAll('.form-control-range');
    rangeInputs.forEach(input => {
      const blogId = input.id.replace('formControlRange', '');
      const savedValue = localStorage.getItem(`rating-${blogId}`);
      if (savedValue) {
        input.value = savedValue;
        document.getElementById(`rangeValue${blogId}`).textContent = `${savedValue}%`;
      }
    });
  });
  
  function saveRating(blogId) {
    const rangeInput = document.getElementById(`formControlRange${blogId}`);
    const value = rangeInput.value;
    localStorage.setItem(`rating-${blogId}`, value);
    document.getElementById(`rangeValue${blogId}`).textContent = `${value}%`;
  }
  
  function myFunction(element) {
    element.classList.toggle("fa-thumbs-down");
  }
  