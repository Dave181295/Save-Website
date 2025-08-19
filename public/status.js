// Arrays for platform statuses
const allGood = ['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Pinterest'];
const outage = ['Snapchat', 'Reddit', 'Telegram'];
const comingSoon = ['Threads', 'Twitter/X', 'Mastodon', 'BlueSky'];

// Mapping platform names to icon classes
const iconMap = {
    'Instagram': 'fab fa-instagram',
    'Facebook': 'fab fa-facebook',
    'Reddit': 'fab fa-reddit',
    'TikTok': 'fab fa-tiktok',
    'Threads': 'fab fa-threads',
    'Twitter/X': 'fab fa-twitter',
    'YouTube': 'fab fa-youtube',
    'Pinterest': 'fab fa-pinterest',
    'Snapchat': 'fab fa-snapchat',
    'Telegram': 'fab fa-telegram',
    'Mastodon': 'fab fa-mastodon',   // ✅
    'BlueSky': 'fa-solid fa-cloud'   // ✅ no official brand icon in FontAwesome, pick a placeholder
};

let selectedPlatform = null;

function selectPlatform(element, platform) {
    document.querySelectorAll('.status-box').forEach(box => {
        box.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedPlatform = platform;
    document.getElementById('notice-text').textContent = "";
}

function reportProblem() {
    if (!selectedPlatform) {
        document.getElementById('notice-text').textContent = "Select a platform first.";
        return;
    }
    const subject = encodeURIComponent("Problem Report");
    const body = encodeURIComponent(`I want to report a problem with the ${selectedPlatform} service.`);
    window.location.href = `mailto:lifelink.ai@gmail.com?subject=${subject}&body=${body}`;
}

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
