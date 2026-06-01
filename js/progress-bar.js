// Timeline Progress Bar Animation
function updateTimelineProgress() {
    const timeline = document.querySelector('.timeline_component');
    const progressBar = document.querySelector('.timeline_progress');
    const timelineItems = document.querySelectorAll('.timeline_item');
    
    if (!timeline || !progressBar || timelineItems.length === 0) return;
    
    const timelineRect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how much of the timeline is visible
    const visibleStart = Math.max(0, -timelineRect.top);
    const visibleEnd = Math.min(windowHeight, timelineRect.bottom);
    const visibleHeight = Math.max(0, visibleEnd - visibleStart);
    
    // Calculate progress percentage
    let progress = 0;
    if (timelineRect.height > 0) {
        progress = (visibleStart + visibleHeight / 2) / timelineRect.height;
        progress = Math.min(1, Math.max(0, progress));
    }
    
    // Set the height of the progress container
    progressBar.style.height = (progress * 100) + '%';
}

// Add scroll event listener
window.addEventListener('scroll', updateTimelineProgress);
window.addEventListener('resize', updateTimelineProgress);
window.addEventListener('load', updateTimelineProgress);