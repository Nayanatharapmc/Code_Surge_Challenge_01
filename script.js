// Function to validate form fields
function validateForm() {
    const errorMessages = document.querySelectorAll(".error-message");
  
    // Clear previous error messages
    errorMessages.forEach((msg) => (msg.textContent = ""));
  
    let isValid = true;
  
    // Validate Name
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      showError(name, "Please fill out this field.");
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name.value)) {
      showError(name, "Name should only contain alphabetic characters.");
      isValid = false;
    }
  
    // Validate Telephone Number
    const tp = document.getElementById("tp");
    if (!/^\d{3}-\d{3}-\d{4}$/.test(tp.value)) {
      showError(tp, "Please enter a valid telephone number (XXX-XXX-XXXX).");
      isValid = false;
    }
  
    // Validate Email Address
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
      showError(email, "Please fill out this field.");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError(email, "Please enter a valid email address. Eg: johndoe@abc.com");
      isValid = false;
    }
  
    // Validate Date of Birth
    const dob = document.getElementById("dob");
    if (dob.value === "") {
      showError(dob, "Please fill out this field.");
      isValid = false;
    } else if (new Date(dob.value) > new Date()) {
      showError(dob, "Date of birth cannot be in the future.");
      isValid = false;
    }
  
    // Validate Position
    const position = document.getElementById("position");
    if (position.value === "") {
      showError(position, "Please select a position.");
      isValid = false;
    } else if (position.value === "Other") {
      const otherPosition = document.getElementById("other-position");
      if (otherPosition.value.trim() === "") {
        showError(otherPosition, "Please specify your position.");
        isValid = false;
      }
    }
  
    // Validate Department
    const department = document.getElementById("department");
    if (department.value === "") {
      showError(department, "Please select a department.");
      isValid = false;
    } else if (department.value === "Other") {
      const otherDepartment = document.getElementById("other-department");
      if (otherDepartment.value.trim() === "") {
        showError(otherDepartment, "Please specify your department.");
        isValid = false;
      }
    }
  
    // Validate Start Date
    const startDate = document.getElementById("start-date");
    if (startDate.value === "") {
      showError(startDate, "Please fill out this field.");
      isValid = false;
    } else if (new Date(startDate.value) > new Date()) {
      showError(startDate, "Start date cannot be in the future.");
      isValid = false;
    }
  
    // Show success message if valid
    if (isValid) {
      showSuccessMessage();
    }
  
    return isValid;
  }
  
  // Function to show error message
  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
  
  // Function to show success message
  function showSuccessMessage() {
    const form = document.getElementById("registration-form");
    form.innerHTML = `
          <h2>Thank You!</h2>
          <p>Your form has been submitted successfully. <span style="color: green;">✓</span></p>
      `;
  }
  
  // Validate the form on pressing submit button
  document
    .getElementById("registration-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      const isValid = validateForm();
      if (isValid) {
        showSuccessMessage();
      }
    });
  
  // Toggle other position input visibility
  function toggleOtherPositionInput() {
    const position = document.getElementById("position");
    const wrapper = document.getElementById("other-position-wrapper");
    const otherInput = document.getElementById("other-position");
  
    if (position.value === "Other") {
      wrapper.style.display = "block";
      wrapper.classList.remove("hidden");
      wrapper.classList.add("visible");
      otherInput.disabled = false;
    } else {
      wrapper.classList.remove("visible");
      wrapper.classList.add("hidden");
      setTimeout(() => {
        wrapper.style.display = "none";
        otherInput.disabled = true;
        otherInput.value = "";
      }, 400);
    }
  }
  
  // Toggle other department input visibility
  function toggleOtherDepartmentInput() {
    const department = document.getElementById("department");
    const wrapper = document.getElementById("other-department-wrapper");
    const otherInput = document.getElementById("other-department");
  
    if (department.value === "Other") {
      wrapper.style.display = "block";
      wrapper.classList.remove("hidden");
      wrapper.classList.add("visible");
      otherInput.disabled = false;
    } else {
      wrapper.classList.remove("visible");
      wrapper.classList.add("hidden");
      setTimeout(() => {
        wrapper.style.display = "none";
        otherInput.disabled = true;
        otherInput.value = "";
      }, 400);
    }
  }
  
  // Add event listeners for real-time validation
  document
    .getElementById("registration-form")
    .addEventListener("input", function (event) {
      if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
        validateField(event.target);
      }
    });
  
  // Function to validate individual fields in real-time
  function validateField(field) {
    switch (field.id) {
      case "name":
        if (field.value.trim() === "") {
          showError(field, "Please fill out this field.");
        } else if (!/^[a-zA-Z\s]+$/.test(field.value)) {
          showError(field, "Name should only contain alphabetic characters.");
        } else {
          showError(field, "");
        }
        break;
      case "tp":
        if (!/^\d{3}-\d{3}-\d{4}$/.test(field.value)) {
          showError(
            field,
            "Please enter a valid telephone number (XXX-XXX-XXXX)."
          );
        } else {
          showError(field, "");
        }
        break;
      case "email":
        if (field.value.trim() === "") {
          showError(field, "Please fill out this field.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          showError(
            field,
            "Please enter a valid email address Eg: johndoe@abc.com"
          );
        } else {
          showError(field, "");
        }
        break;
      case "dob":
        if (field.value === "") {
          showError(field, "Please fill out this field.");
        } else if (new Date(field.value) > new Date()) {
          showError(field, "Date of birth cannot be in the future.");
        } else {
          showError(field, "");
        }
        break;
      case "start-date":
        if (field.value === "") {
          showError(field, "Please fill out this field.");
        } else if (new Date(field.value) > new Date()) {
          showError(field, "Start date cannot be a future date.");
        } else {
          showError(field, "");
        }
        break;
    }
  }
  
  // Function to reset form fields and clear error messages when clear button is pressed
  function resetForm() {
    // Reset form fields
    const form = document.getElementById("registration-form");
    form.reset();
  
    // Hide and clear error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => {
      msg.textContent = "";
      msg.style.display = "none";
    });
  
    // Hide other input fields if they were visible
    document.getElementById("other-position-wrapper").style.display = "none";
    document.getElementById("other-department-wrapper").style.display = "none";
  
    // Disable the other position and department input fields
    document.getElementById("other-position").disabled = true;
    document.getElementById("other-department").disabled = true;
  }
  
  // Add event listener for the clear button
  document
    .getElementById("clear-button")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form from submitting
      resetForm(); // Call the function to reset the form
    });
  