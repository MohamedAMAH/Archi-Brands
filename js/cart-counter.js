// cart-counter.js

// Initialize cart count from localStorage or set to 0 if not exists
function initializeCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    updateCartCounterDisplay(parseInt(cartCount));
}

// Update cart counter display across all elements
function updateCartCounterDisplay(count) {
    const cartCounters = document.querySelectorAll('.cart-counter');
    cartCounters.forEach(counter => {
        counter.textContent = count;
        // Hide counter if count is 0
        counter.style.display = count === 0 ? 'none' : 'flex';
    });
}

// Add item to cart
function addToCart() {
    const currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem('cartCount', newCount);
    updateCartCounterDisplay(newCount);
}

// Remove item from cart
function removeFromCart() {
    const currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
    if (currentCount > 0) {
        const newCount = currentCount - 1;
        localStorage.setItem('cartCount', newCount);
        updateCartCounterDisplay(newCount);
    }
}

// Clear cart
function clearCart() {
    localStorage.setItem('cartCount', 0);
    updateCartCounterDisplay(0);
}

// Initialize cart count when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCartCount);

// Example event listener for "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});