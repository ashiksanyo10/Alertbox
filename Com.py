// ==UserScript==
// @name         Language Annotation Reminder
// @namespace    http://example.com/
// @version      1.0
// @description  Alerts user to add the Language annotation in notes when a button is clicked
// @author       ashsanyo
// @match        https://moderation-central.prime-video.amazon.dev/tasks/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to load and run the script after a delay
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
    }, 3000);

})();
