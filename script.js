document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

 
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const aptNo = document.getElementById("aptNo").value.trim();
        const streetName = document.getElementById("streetName").value.trim();
        const city = document.getElementById("city").value.trim();
        const pincode = document.getElementById("pincode").value.trim();
        const state = document.getElementById("state").value.trim();
        const country = document.getElementById("country").value.trim();

  
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const phoneRegex = /^[0-9]{10}$/;
        const pincodeRegex = /^[0-9]{6}$/;

 
        let isValid = true;

        if (!firstName) {
            isValid = false;
            alert("Please enter your First Name.");
        }

        if (!lastName) {
            isValid = false;
            alert("Please enter your Last Name.");
        }

        if (!emailRegex.test(email)) {
            isValid = false;
            alert("Please enter a valid Email address.");
        }

        if (!phoneRegex.test(phone)) {
            isValid = false;
            alert("Please enter a valid Phone number (10 digits).");
        }

        if (!aptNo) {
            isValid = false;
            alert("Please enter your Apartment Number.");
        }

        if (!streetName) {
            isValid = false;
            alert("Please enter your Street Name.");
        }

        if (!city) {
            isValid = false;
            alert("Please enter your City.");
        }

        if (!pincodeRegex.test(pincode)) {
            isValid = false;
            alert("Please enter a valid Pincode (5 digits).");
        }

        if (!state) {
            isValid = false;
            alert("Please enter your State.");
        }

        if (!country) {
            isValid = false;
            alert("Please enter your Country.");
        }

       
        if (isValid) {
            confirmationMessage.style.display = "block";
            orderForm.reset(); 
            setTimeout(function () {
                window.location.href = "confirmation.html"; 
            }, 2000); 
        }
    });
});



