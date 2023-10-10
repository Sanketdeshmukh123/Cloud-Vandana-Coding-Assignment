function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = getSelectedGender();
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (validateForm()) {
        document.getElementById('popupFirstName').textContent = firstName;
        document.getElementById('popupLastName').textContent = lastName;
        document.getElementById('popupDob').textContent = dob;
        document.getElementById('popupCountry').textContent = country;
        document.getElementById('popupGender').textContent = gender;
        document.getElementById('popupProfession').textContent = profession;
        document.getElementById('popupEmail').textContent = email;
        document.getElementById('popupMobile').textContent = mobile;

        openPopup();
        resetForm();
    }
}

function getSelectedGender() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedGender = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedGender.push(checkbox.nextSibling.textContent);
        }
    });

    return selectedGender.join(', ');
}

function validateForm() {
    const requiredFields = ['firstName', 'lastName', 'dob', 'country', 'profession', 'email', 'mobile'];
    
    for (const field of requiredFields) {
        const value = document.getElementById(field).value.trim();
        if (value === '') {
            alert(`Please enter ${field.replace(/^\w/, (c) => c.toUpperCase())}.`);
            return false;
        }
    }

    return true;
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
