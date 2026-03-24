// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle report form submission
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const reportType = document.getElementById('reportType').value;
    const title = document.getElementById('reportTitle').value;
    const description = document.getElementById('reportDescription').value;
    
    if (title.trim() === '') {
        alert('Please enter a report title.');
        return;
    }
    
    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `<strong>${reportType.charAt(0).toUpperCase() + reportType.slice(1)}:</strong> ${title} - ${description}`;
    
    // Add to report list
    document.querySelector('#reportList ul').appendChild(li);
    
    // Clear form
    document.getElementById('reportForm').reset();
    
    alert('Report item added successfully!');
});

// Simple metric update simulation (for demo purposes)
function updateMetrics() {
    const carsSold = document.querySelector('#overview .metric:nth-child(1) p');
    const customers = document.querySelector('#overview .metric:nth-child(2) p');
    const carsInventory = document.querySelector('#overview .metric:nth-child(3) p');

    // Simulate random updates
    carsSold.textContent = Math.floor(Math.random() * 50) + 100;
    customers.textContent = Math.floor(Math.random() * 500) + 1000;
    carsInventory.textContent = Math.floor(Math.random() * 50) + 50;
}

// Update metrics every 5 seconds
setInterval(updateMetrics, 5000);