// Price tracking application JavaScript

class PriceTracker {
    constructor() {
        this.msrp = 229.99;
        this.currentPrice = 229.99;
        this.thresholds = {
            green: 200,
            yellow: 221,
            red: 221
        };

        this.initializeElements();
        this.attachEventListeners();
        this.updateDisplay();
    }

    initializeElements() {
        this.priceInput = document.getElementById('price-input');
        this.updateButton = document.getElementById('update-price-btn');
        this.priceCard = document.getElementById('price-card');
        this.currentPriceDisplay = document.getElementById('current-price');
        this.differenceValue = document.getElementById('difference-value');
    }

    attachEventListeners() {
        // Update price button click
        this.updateButton.addEventListener('click', () => {
            this.handlePriceUpdate();
        });

        // Enter key press in input field
        this.priceInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handlePriceUpdate();
            }
        });

        // Real-time validation as user types
        this.priceInput.addEventListener('input', () => {
            this.validateInput();
        });
    }

    handlePriceUpdate() {
        const inputValue = this.priceInput.value.trim();
        
        if (!this.isValidPrice(inputValue)) {
            this.showError('Please enter a valid price between $0.01 and $999.99');
            return;
        }

        const newPrice = parseFloat(inputValue);
        this.currentPrice = newPrice;
        this.updateDisplay();
        this.clearError();
        
        // Clear input field after successful update
        this.priceInput.value = '';
        
        // Show success feedback
        this.showSuccessFeedback();
    }

    isValidPrice(value) {
        if (!value || value === '') return false;
        
        const price = parseFloat(value);
        return !isNaN(price) && price >= 0.01 && price <= 999.99;
    }

    validateInput() {
        const inputValue = this.priceInput.value.trim();
        
        if (inputValue === '') {
            this.clearError();
            return;
        }

        if (!this.isValidPrice(inputValue)) {
            this.priceInput.style.borderColor = 'var(--color-error)';
        } else {
            this.priceInput.style.borderColor = 'var(--color-success)';
        }
    }

    updateDisplay() {
        this.updatePriceDisplay();
        this.updateColorCoding();
        this.updateDifference();
    }

    updatePriceDisplay() {
        this.currentPriceDisplay.textContent = `$${this.currentPrice.toFixed(2)}`;
    }

    updateColorCoding() {
        // Remove existing color classes
        this.priceCard.classList.remove('price-green', 'price-yellow', 'price-red');

        // Apply new color class based on price thresholds
        // GREEN: price < $200
        // YELLOW: price >= $200 AND price < $221  
        // RED: price >= $221
        if (this.currentPrice < 200) {
            this.priceCard.classList.add('price-green');
        } else if (this.currentPrice >= 200 && this.currentPrice < 221) {
            this.priceCard.classList.add('price-yellow');
        } else {
            this.priceCard.classList.add('price-red');
        }
    }

    updateDifference() {
        const difference = this.msrp - this.currentPrice;
        const differenceAbs = Math.abs(difference);
        
        // Remove existing classes
        this.differenceValue.classList.remove('savings', 'markup');
        
        if (difference > 0) {
            // Current price is lower than MSRP (savings)
            this.differenceValue.textContent = `-$${differenceAbs.toFixed(2)}`;
            this.differenceValue.classList.add('savings');
        } else if (difference < 0) {
            // Current price is higher than MSRP (markup)
            this.differenceValue.textContent = `+$${differenceAbs.toFixed(2)}`;
            this.differenceValue.classList.add('markup');
        } else {
            // Prices are equal
            this.differenceValue.textContent = '$0.00';
        }
    }

    showError(message) {
        // Remove any existing error message
        this.clearError();
        
        // Create error element
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: var(--color-error);
            font-size: var(--font-size-sm);
            margin-top: var(--space-4);
            padding: var(--space-4) var(--space-8);
            background: rgba(var(--color-error-rgb), 0.1);
            border-radius: var(--radius-sm);
            border: 1px solid rgba(var(--color-error-rgb), 0.2);
        `;
        
        // Insert after the price input wrapper
        const priceInputWrapper = document.querySelector('.price-input-wrapper');
        priceInputWrapper.parentNode.insertBefore(errorElement, priceInputWrapper.nextSibling);
        
        // Add error styling to input
        this.priceInput.style.borderColor = 'var(--color-error)';
    }

    clearError() {
        const errorMessage = document.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        
        // Reset input border
        this.priceInput.style.borderColor = '';
    }

    showSuccessFeedback() {
        // Temporarily change button text to show success
        const originalText = this.updateButton.textContent;
        this.updateButton.textContent = '✓ Updated!';
        this.updateButton.style.background = 'var(--color-success)';
        
        setTimeout(() => {
            this.updateButton.textContent = originalText;
            this.updateButton.style.background = '';
        }, 1500);
    }

    // Utility method to get price status text
    getPriceStatus() {
        if (this.currentPrice < 200) {
            return 'Excellent Deal';
        } else if (this.currentPrice >= 200 && this.currentPrice < 221) {
            return 'Good Price';
        } else {
            return 'High Price';
        }
    }
}

// Utility functions for formatting and display
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function addPageEnhancements() {
    // Ensure Amazon link works properly
    const amazonLink = document.querySelector('.amazon-link');
    if (amazonLink) {
        // Remove any existing click handlers that might interfere
        amazonLink.addEventListener('click', function(e) {
            // Allow the default behavior (opening in new tab)
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add loading state helper
    window.showLoading = function(element) {
        element.disabled = true;
        element.textContent = 'Loading...';
    };

    window.hideLoading = function(element, originalText) {
        element.disabled = false;
        element.textContent = originalText;
    };
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create the price tracker instance
    window.priceTracker = new PriceTracker();
    
    // Add additional page enhancements
    addPageEnhancements();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Alt + U to focus on price input
        if (e.altKey && e.key === 'u') {
            e.preventDefault();
            document.getElementById('price-input').focus();
        }
        
        // Alt + A to open Amazon link
        if (e.altKey && e.key === 'a') {
            e.preventDefault();
            const amazonLink = document.querySelector('.amazon-link');
            if (amazonLink) {
                window.open(amazonLink.href, '_blank');
            }
        }
    });

    // Add accessibility announcements for screen readers
    const announceUpdate = function(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    };

    // Make the announce function available globally
    window.announceUpdate = announceUpdate;
    
    console.log('Fluval 407 Price Tracker initialized successfully');
});