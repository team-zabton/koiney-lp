document.addEventListener('DOMContentLoaded', function () {
    const languageButtons = document.querySelectorAll('.language-button');
    const languageElements = document.querySelectorAll('[class*=ja], [class*=en]');
  
    function switchLanguage(lang) {
      languageElements.forEach(element => {
        if (element.classList.contains(lang)) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    }
  
    languageButtons.forEach(button => {
      button.addEventListener('click', function () {
        const lang = button.getAttribute('data-language');
        switchLanguage(lang);
      });
    });
  
    switchLanguage('ja');
  });