// Toggle the dropdown visibility with slide-down effect
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var allDropdowns = document.querySelectorAll('.dropdown-content');
  
    // Hide all other dropdowns before showing the clicked one
    allDropdowns.forEach(function(content) {
      if (content !== dropdown) {
        content.classList.remove('show'); // Hide any other open dropdowns
      }
    });
  
    // Toggle the clicked dropdown with a slide-down effect
    dropdown.classList.toggle('show');
  }
  
  // Event listener to detect clicks outside the dropdown
  document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
  
    // Check if the click is outside of any dropdown and the corresponding brand card
    dropdowns.forEach(function(dropdown) {
      var dropdownCard = dropdown.previousElementSibling; // The brand card element
      if (!dropdown.contains(event.target) && !dropdownCard.contains(event.target)) {
        dropdown.classList.remove('show'); // Hide the dropdown
      }
    });
  });
  