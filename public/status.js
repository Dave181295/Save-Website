// Arrays for platform statuses
const allGood = ['Facebook', 'Instagram', 'TikTok', 'YouTube', 'Snapchat', 'Reddit', 'Pinterest'];
const outage = ['Telegram', 'Twitter/X'];
const comingSoon = ['Threads', 'LinkedIn', 'WeChat'];

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
    'Snapchat': 'fab fa-snapchat',
    'Telegram': 'fab fa-telegram',
    'WeChat': 'fab fa-weixin'
};

// Function to create a status box
function createStatusBox(platform, status) {
    const box = document.createElement('div');
    box.className = 'status-box';
    box.onclick = function () {
        selectPlatform(box, platform);
    };

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
