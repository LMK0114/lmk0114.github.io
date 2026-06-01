const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.btn');
        const originalText = submitBtn.innerHTML;
        
        // 显示发送中
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                alert('✓ Message sent successfully! I will reply soon.');
                contactForm.reset();
            } else {
                alert('✗ Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('✗ Network error. Please check your connection.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}