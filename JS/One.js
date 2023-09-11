// Get references to the radio buttons and the submit button
const radioYes = document.getElementById("radioYes");
const radioNo = document.getElementById("radioNo");
const submitButton = document.getElementById("btn"); // Assuming your submit button has the id "btn"

// Add event listeners to the radio buttons
radioYes.addEventListener("change", () => {
    // console.log("Yes Radio")
    submitButton.disabled = false; // Enable the submit button when "Yes" is selected
});

radioNo.addEventListener("change", () => {
    // console.log("No Radio")
    submitButton.disabled = true; // Disable the submit button when "No" is selected
});
