// ==UserScript==
// @name         Language Annotation Reminder
// @namespace    http://example.com/
// @version      1.1
// @description  Alerts user to add the Language annotation in notes when a button is clicked, unless the textarea contains "manager"
// @author       ashsanyo
// @match        https://demo/tasks/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to load and run the script after a delay
    setTimeout(function() {
        const summarizeButton = document.querySelector('button.css-bni06b');
        const textArea = document.getElementById('textarea17'); // Select the textarea by its ID

        if (summarizeButton && textArea) {
            const showAlert = function() {
                const userText = textArea.value.toLowerCase(); // Get the textarea input and convert to lowercase

                // Check if the keyword "manager" is not present in the textarea
                if (!userText.includes('manager')) {
                    alert('Please add the Language annotation in notes');
                }

                // Remove the event listener after the first click
                summarizeButton.removeEventListener('click', showAlert);
            };
            summarizeButton.addEventListener('click', showAlert);
        } else {
            console.log('Button or textarea not found.');
        }
    }, 3000);

})();
