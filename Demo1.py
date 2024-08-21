setTimeout(function() {
    const summarizeButton = document.querySelector('button.css-bni06b');
    if (summarizeButton) {
        summarizeButton.addEventListener('click', function() {
            alert('Please add the Language annotation in notes');
        });
    } else {
        console.log('Button not found.');
    }
}, 3000);  // Adjust the delay as needed
