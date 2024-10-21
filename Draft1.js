// ==UserScript==
// @name         Language Annotation Reminder
// @namespace    http://example.com/
// @version      1.4
// @description  Alerts user to add the Language annotation in notes when a button is clicked, unless the manager keyword is present in a specific <p> element.
// @author       ashsanyo
// @match        https://demo/tasks/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to load and run the script after a delay
    setTimeout(function() {
        const summarizeButton = document.querySelector('button.css-bni06b'); // Adjust button selector if needed
        const managerParagraph = document.querySelector('p.css-189kjnx'); // Select the <p> element by its class

        if (summarizeButton && managerParagraph) {
            const showAlert = function() {
                const paragraphText = managerParagraph.textContent.toLowerCase(); // Get the text inside the <p> and convert to lowercase

                // Check if the keyword "manager" is present
                if (!paragraphText.includes('manager')) {
                    alert('Please add the Language annotation in notes');
                }
            };
            summarizeButton.addEventListener('click', showAlert);
        } else {
            console.log('Button or paragraph not found.');
        }
    }, 3000);

})();
