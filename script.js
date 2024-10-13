// Function to validate form fields
function validateForm() {
    const form = document.getElementById('registration-form');
    const errorMessages = document.querySelectorAll('.error-message');
    
    // Clear previous error messages
    errorMessages.forEach(msg => msg.style.display = 'none');
  
    let isValid = true;
  
    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
      document.querySelector('#name + .error-message').innerText = 'Please fill out this field.';
      document.querySelector('#name + .error-message').style.display = 'block';
      isValid = false;
    }
  
    // Validate Telephone Number
    const tp = document.getElementById('tp').value;
    if (!/^\d{3}-\d{3}-\d{4}$/.test(tp)) {
      document.querySelector('#tp + .error-message').innerText = 'Please enter a valid telephone number (XXX-XXX-XXXX).';
      document.querySelector('#tp + .error-message').style.display = 'block';
      isValid = false;
    }
  
    // Validate Email Address
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
      document.querySelector('#email + .error-message').innerText = 'Please fill out this field.';
      document.querySelector('#email + .error-message').style.display = 'block';
      isValid = false;
    }
  
    // Validate Date of Birth
    const dob = document.getElementById('dob').value;
    if (dob === '') {
      document.querySelector('#dob + .error-message').innerText = 'Please fill out this field.';
      document.querySelector('#dob + .error-message').style.display = 'block';
      isValid = false;
    }
  
    // Validate Position
    const position = document.getElementById('position').value;
    if (position === '') {
      document.querySelector('#position + .error-message').innerText = 'Please select a position.';
      document.querySelector('#position + .error-message').style.display = 'block';
      isValid = false;
    }
  
    // Validate Department
    const department = document.getElementById('department').value;
    if (department === '') {
      document.querySelector('#department + .error-message').innerText = 'Please select a department.';
      document.querySelector('#department + .error-message').style.display = 'block';
      isValid = false;
    }
  
    // Validate Start Date
    const startDate = document.getElementById('start-date').value;
    if (startDate === '') {
      document.querySelector('#start-date + .error-message').innerText = 'Please fill out this field.';
      document.querySelector('#start-date + .error-message').style.display = 'block';
      isValid = false;
    }
  
    // Show success message if valid
    if (isValid) {
      showSuccessMessage();
    }
  
    return isValid;
  }
  
  // Show success message
  function showSuccessMessage() {
    const form = document.getElementById('registration-form');
    form.innerHTML = `
      <h2>Thank You!</h2>
      <p>Your form has been submitted successfully. <span style="color: green;">✓</span></p>
    `;
  }
  
  // Attach validateForm to the form submission
  document.getElementById('registration-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      // Additional form processing can be done here if needed
    }
  };
  
  function toggleOtherPositionInput() {
    const position = document.getElementById('position').value;
    const wrapper = document.getElementById('other-position-wrapper');
    const otherInput = document.getElementById('other-position');
    
    if (position === 'Other') {
      wrapper.style.display = 'block'; // Show the wrapper
      wrapper.classList.remove('hidden');
      wrapper.classList.add('visible');
      otherInput.disabled = false;
    } else {
      wrapper.classList.remove('visible');
      wrapper.classList.add('hidden');
      setTimeout(() => {
        wrapper.style.display = 'none'; // Hide the wrapper after transition
        otherInput.disabled = true;
        otherInput.value = ''; // Clear the input
      }, 400); // Sync with CSS transition duration
    }
  }
  
  function toggleOtherDepartmentInput() {
    const department = document.getElementById('department').value;
    const wrapper = document.getElementById('other-department-wrapper');
    const otherInput = document.getElementById('other-department');
    
    if (department === 'Other') {
      wrapper.style.display = 'block';
      wrapper.classList.remove('hidden');
      wrapper.classList.add('visible');
      otherInput.disabled = false;
    } else {
      wrapper.classList.remove('visible');
      wrapper.classList.add('hidden');
      setTimeout(() => {
        wrapper.style.display = 'none';
        otherInput.disabled = true;
        otherInput.value = '';
      }, 400);
    }
  }
  