document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Form reload off kora

    // Input elements collect kora
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    let isValid = true;

    // Helper function error show korar jonno
    const showError = (elementId, message) => {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        isValid = false;
    };

    // Helper function error hide korar jonno
    const clearError = (elementId) => {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = '';
        errorElement.classList.add('hidden');
    };

    // Reset all errors initially
    clearError('nameError');
    clearError('emailError');
    clearError('passwordError');
    clearError('confirmPasswordError');

    // 1. Name Validation (Cannot be empty, min 3 chars)
    if (nameInput.value.trim() === '') {
        showError('nameError', 'Name is required.');
    } else if (nameInput.value.trim().length < 3) {
        showError('nameError', 'Name must be at least 3 characters.');
    }

    // 2. Email Validation (Regex checking)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        showError('emailError', 'Email is required.');
    } else if (!emailPattern.test(emailInput.value.trim())) {
        showError('emailError', 'Please enter a valid email address.');
    }

    // 3. Password Validation (Min 6 chars)
    if (passwordInput.value === '') {
        showError('passwordError', 'Password is required.');
    } else if (passwordInput.value.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters.');
    }

    // 4. Confirm Password Validation (Must match Password)
    if (confirmPasswordInput.value === '') {
        showError('confirmPasswordError', 'Please confirm your password.');
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError('confirmPasswordError', 'Passwords do not match.');
    }

    // Jodi sob kisu thik thake tahole Success Notification (Toast) dekhabe
    if (isValid) {
        showToast();
        // Form field gulo clear kore deya
        this.reset();
    }
});

// Toast Notification dekhabar function
function showToast() {
    const toast = document.getElementById('toast');
    
    // Slide in animation er jonno class change kora
    toast.classList.remove('translate-x-[150%]');
    toast.classList.add('translate-x-0');

    // 3 second por abar hide kore deya
    setTimeout(() => {
        toast.classList.remove('translate-x-0');
        toast.classList.add('translate-x-[150%]');
    }, 3000);
}