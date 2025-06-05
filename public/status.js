// Arrays for platform statuses
const allGood = ['Facebook', 'Instagram', 'TikTok', 'YouTube', 'Snapchat', 'Pinterest'];
const outage = ['Facebook'];
const comingSoon = ['Threads', 'LinkedIn', 'Reddit', 'Twitter/X',];

// Mapping platform names to icon classes
const iconMap = {
    'Instagram': 'fab fa-instagram',
    'Facebook': 'fab fa-facebook',
    'Reddit': 'fab fa-reddit',
    'TikTok': 'fab fa-tiktok',
    'Threads': 'fab fa-threads',
    'LinkedIn': 'fab fa-linkedin',
    'Twitter/X': 'fab fa-twitter',
    'YouTube': 'fab fa-youtube',
    'Pinterest': 'fab fa-pinterest',
    'Snapchat': 'fab fa-snapchat'
};

// Function to create a status box
function createStatusBox(platform, status) {
    const box = document.createElement('div');
    box.className = 'status-box';

    const indicator = document.createElement('div');
    indicator.className = `indicator ${status}`;
    box.appendChild(indicator);

    const text = document.createElement('div');
    text.className = 'status-text';

    const icon = document.createElement('i');
    icon.className = iconMap[platform];
    text.appendChild(icon);

    const span = document.createElement('span');
    span.textContent = platform;
    text.appendChild(span);

    box.appendChild(text);
    return box;
}

// Render all status boxes
function renderStatus() {
    const container = document.getElementById('status-container');

    allGood.forEach(platform => {
        container.appendChild(createStatusBox(platform, 'green'));
    });

    outage.forEach(platform => {
        container.appendChild(createStatusBox(platform, 'red'));
    });

    comingSoon.forEach(platform => {
        container.appendChild(createStatusBox(platform, 'purple'));
    });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', renderStatus);
