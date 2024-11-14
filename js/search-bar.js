document.addEventListener("DOMContentLoaded", function() {
    const searchToggle = document.querySelector(".search-toggle");
    const searchIconItem = document.querySelector(".search-icon-item");
  
    searchToggle.addEventListener("click", function() {
      searchIconItem.classList.toggle("active");
    });
  
    // Optional: Close search when clicking outside
    document.addEventListener("click", function(event) {
      if (!searchIconItem.contains(event.target) && searchIconItem.classList.contains("active")) {
        searchIconItem.classList.remove("active");
      }
    });
});