  document.addEventListener("DOMContentLoaded", function() {
    const languageButtons = document.querySelectorAll(".language-button");
    const languageElements = document.querySelectorAll(".ja, .en");
  
    function switchLanguage(language) {
      languageElements.forEach(function(element) {
        if (element.classList.contains(language)) {
          element.classList.remove("hidden");
        } else {
          element.classList.add("hidden");
        }
      });
    }
  
    languageButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        switchLanguage(button.dataset.language);
      });
    });
  });
  