document.addEventListener('keydown', function (e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) {
        e.preventDefault();
    }
});