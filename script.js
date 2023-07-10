document.getElementById('ageCalculatorForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById('dateError').textContent = '';
    document.getElementById('monthError').textContent = '';
    document.getElementById('yearError').textContent = '';

    // Get user input
    const date = parseInt(document.getElementById('date').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Validate if Field is Empty or Not
    const currentYear = new Date().getFullYear();
    if (!date || !month || !year) {

      if (!date) {
        document.getElementById('dateError').textContent = 'This field is required';
        document.querySelector('.input-field-column-date').classList.add('error');
        document.querySelector('.input-field-column-date label').classList.add('error');
        document.querySelector('.input-field-column-date .input-field').classList.add('error');
    
      }

      if (!month) {
        document.getElementById('monthError').textContent = 'This field is required';
        document.querySelector('.input-field-column-month').classList.add('error');
        document.querySelector('.input-field-column-month label').classList.add('error');
        document.querySelector('.input-field-column-month .input-field').classList.add('error');
      }

      if (!year) {
        document.getElementById('yearError').textContent = 'This field is required';
        document.querySelector('.input-field-column-year').classList.add('error');
        document.querySelector('.input-field-column-year label').classList.add('error');
        document.querySelector('.input-field-column-year .input-field').classList.add('error');
      }

      return;
    }

    // Validate if input data is accurate
    if ((date < 1 || date > 31) || (month < 1 || month > 12) || (year < 1900 || year > currentYear)) {

      if (date < 1 || date > 31) {
        document.getElementById('dateError').textContent = 'Must be a valid date';
        document.querySelector('.input-field-column-date').classList.add('error');
        document.querySelector('.input-field-column-date label').classList.add('error');
        document.querySelector('.input-field-column-date .input-field').classList.add('error');
      }

      if (month < 1 || month > 12) {
        document.getElementById('monthError').textContent = 'Must be a valid month';
        document.querySelector('.input-field-column-month').classList.add('error');
        document.querySelector('.input-field-column-month label').classList.add('error');
        document.querySelector('.input-field-column-month .input-field').classList.add('error');
      }

      if (year < 1900 || year > currentYear) {
        document.getElementById('yearError').textContent = 'Must be a valid year';
        document.querySelector('.input-field-column-year').classList.add('error');
        document.querySelector('.input-field-column-year label').classList.add('error');
        document.querySelector('.input-field-column-year .input-field').classList.add('error');
      }

      return;
    }


    // Calculate age
    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, date);
    const timeDiff = Math.abs(currentDate.getTime() - birthDate.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24)); // Age in days

    const years = Math.floor(age / 365);
    const months = Math.floor((age % 365) / 30);
    const days = age % 30;

    // Display output
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
  });

  // Change button background color on click
  const submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', function () {
    submitButton.classList.add('clicked');
  });