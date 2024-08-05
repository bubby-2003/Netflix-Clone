// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'tab-item' and store them in the 'tabItems' variable
    const tabItems = document.querySelectorAll('.tab-item');
    
    // Select all elements with the class 'tab-content-item' and store them in the 'tabContentItems' variable
    const tabContentItems = document.querySelectorAll('.tab-content-item');

    // Function to handle the selection of a tab item
    function selectItem(e) {
        // Get the ID of the clicked tab item
        const tabId = this.id;

        // Call functions to remove border and hide tab content items
        removeBorder();
        removeShow();

        // Add 'tab-border' class to the clicked tab item to highlight it
        this.classList.add('tab-border');

        // Get the corresponding tab content item based on the clicked tab item's ID
        const tabContentItem = document.querySelector(`#${tabId}-content`);
        
        // Add 'show' class to the corresponding tab content item to display it
        tabContentItem.classList.add('show');
    }

    // Function to remove border from all tab items
    function removeBorder() {
        tabItems.forEach(item => {
            item.classList.remove('tab-border');
        });
    }

    // Function to hide all tab content items
    function removeShow() {
        tabContentItems.forEach(item => {
            item.classList.remove('show');
        });
    }

    // Add click event listeners to all tab items to handle tab selection
    tabItems.forEach(item => {
        item.addEventListener('click', selectItem);
    });
});
