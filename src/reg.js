const togglePasswordVisibility = (inputElement, toggleElement) => {
    if (inputElement.type === "password") {
        inputElement.type = "text";
        toggleElement.innerHTML = '<i class="bi bi-eye"></i>'; 
    } else {
        inputElement.type = "password";
        toggleElement.innerHTML = '<i class="bi bi-eye-slash"></i>';
    }
}

const passwordInput1 = document.getElementById("pass");
const togglePassword1 = document.getElementById("togglePassword1");
const passwordInput2 = document.getElementById("passHit");
const togglePassword2 = document.getElementById("togglePassword2");

togglePassword1.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput1, togglePassword1);
});

togglePassword2.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput2, togglePassword2);
});


// email validator


