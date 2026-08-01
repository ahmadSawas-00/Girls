    // ============================================
    // StudyBloom - Interactive JavaScript
    // Simple, clean, and fun for learning
    // ============================================

    // ---- Wait for DOM to load ----
    document.addEventListener('DOMContentLoaded', function() {

    // 1. Smooth scroll for all anchor links (optional but nice)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // skip empty
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            });
        }
        });
    });

    // 2. Greeting message in console (fun easter egg)
    console.log('%c🌸 Welcome to StudyBloom! 🌸', 'font-size: 20px; font-weight: bold; color: #b77b6d;');
    console.log('%cYou are awesome! Keep studying and glowing ✨', 'font-size: 14px; color: #5f453f;');

    // 3. Simple interactive: "Join" button alert (demo purpose)
    const joinBtn = document.querySelector('.btn-soft-pink.btn-sm.px-4');
    if (joinBtn) {
        joinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('🎉 Welcome to StudyBloom! Join our community and start learning with friends. 💕');
        });
    }

    // 4. Hover effect on cards – additional playful touch (already in CSS, but we add log)
    const cards = document.querySelectorAll('.card-study');
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
        console.log(`📖 You're hovering over topic card #${index + 1}`);
        });
    });

    // 5. "Get free pack" button interaction
    const freePackBtn = document.querySelector('.btn-soft-pink.px-5.mt-2');
    if (freePackBtn) {
        freePackBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const userConfirmed = confirm('📥 Download the free study pack? It includes templates, planner & more!');
        if (userConfirmed) {
            alert('✅ Awesome! Your pack is downloading... (simulated) 📚');
            // You could actually trigger a download here
        } else {
            alert('No worries! You can always get it later. 🌸');
        }
        });
    }

    // 6. "Watch tour" button - playful response
    const tourBtn = document.querySelector('.btn-outline-secondary.px-5.py-3');
    if (tourBtn) {
        tourBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('🎥 Tour coming soon! For now, explore the topics below. 👇');
        });
    }

    // 7. "View all" link feedback
    const viewAllLink = document.querySelector('.d-flex.justify-content-between .text-decoration-none');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('🌟 More topics are on the way! Stay tuned. ✨');
        });
    }

    // 8. Card "start / explore / discover" buttons feedback
    const cardBtns = document.querySelectorAll('.card-study .btn-outline-dark');
    cardBtns.forEach((btn, idx) => {
        btn.addEventListener('click', function(e) {
        e.preventDefault();
        const topicNames = ['Algebra & functions', 'Poetry & prose', 'Biology & chemistry'];
        alert(`📘 You clicked on "${topicNames[idx]}" — let's dive in! 🚀`);
        });
    });

    // 9. Footer social icons - simple alert (just for demo)
    const socialIcons = document.querySelectorAll('.footer-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.querySelector('i')?.className || 'social';
        alert(`💖 Follow us on ${platform.replace('bi bi-', '').toUpperCase()} for daily study inspo!`);
        });
    });
    console.log('✅ StudyBloom JS is ready! Happy studying! 📖');
    });