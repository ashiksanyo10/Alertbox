setTimeout(function() {
    const summarizeButton = document.querySelector('button.css-bni06b');
    if (summarizeButton) {
        const showAlert = function() {
            alert('Please add the Language annotation in notes');
            // Remove the event listener after the first click
            summarizeButton.removeEventListener('click', showAlert);
        };
        summarizeButton.addEventListener('click', showAlert);
    } else {
        console.log('Button not found.');
    }
}, 3000);  // Adjust the delay as needed
