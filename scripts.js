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
  
  document.getElementById('open-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
  