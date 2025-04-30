const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !burger.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
        
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    }
});

function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    
    const imgElement = element.querySelector('img');
    
    if (imgElement) {
        modal.style.display = "block";
        modalImg.src = imgElement.src;
        captionText.innerHTML = imgElement.alt;
    } else {
        modal.style.display = "block";
        modalImg.src = "/api/placeholder/800/600";
        captionText.innerHTML = element.textContent;
    }
    
    document.body.classList.add('modal-open');
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    document.body.classList.remove('modal-open');
}

window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

function updatePSTDate() {
    const logoElement = document.getElementById('date-pst');
    if (!logoElement) return;
    
    const options = {
        timeZone: 'America/Los_Angeles',
        weekday: 'short',
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    };
    
    const pstDate = new Date().toLocaleDateString('en-US', options);
    
    logoElement.textContent = pstDate;
}

document.addEventListener('DOMContentLoaded', function() {
    updatePSTDate();
    setInterval(updatePSTDate, 60000);
});
