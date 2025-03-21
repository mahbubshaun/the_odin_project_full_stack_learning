document.addEventListener('DOMContentLoaded', function() {
    // Initialize notifications
    const notifications = [
        "New grammar lesson available!",
        "Complete today's vocabulary challenge",
        "Speaking practice reminder"
    ];

    // Animate progress ring
    const progressRing = document.querySelector('.progress-ring');
    const percentage = 80; // This should come from your actual progress data
    progressRing.style.background = `conic-gradient(var(--primary-color) ${percentage}%, #ecf0f1 ${percentage}%)`;

    // Add hover effects
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click handlers for start buttons
    const startButtons = document.querySelectorAll('.start-btn');
    startButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your lesson start logic here
            console.log('Starting lesson...');
        });
    });

    // Notification click handler
    const notificationBell = document.querySelector('.notifications');
    notificationBell.addEventListener('click', function() {
        // Show notifications dropdown
        alert('Notifications: \n' + notifications.join('\n'));
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function(e) {
        // Add your search logic here
        console.log('Searching for:', e.target.value);
    });

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Function to update progress
function updateProgress(newPercentage) {
    const progressRing = document.querySelector('.progress-ring');
    const percentageDisplay = document.querySelector('.percentage');
    progressRing.style.background = `conic-gradient(var(--primary-color) ${newPercentage}%, #ecf0f1 ${newPercentage}%)`;
    percentageDisplay.textContent = `${newPercentage}%`;
}

// Function to add new activity
function addActivity(activity) {
    const activityList = document.querySelector('.activity-list');
    const newActivity = document.createElement('div');
    newActivity.classList.add('activity-item');
    newActivity.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <div class="activity-details">
            <p>${activity}</p>
            <span>Just now</span>
        </div>
    `;
    activityList.prepend(newActivity);
}