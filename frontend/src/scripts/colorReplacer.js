// This script directly replaces blue elements with maroon at runtime
// It will run after the page loads and continuously monitor for new blue elements

(function() {
  // Maroon color values
  const maroonColors = {
    primary: '#800020',
    dark: '#600018',
    light: '#a04048',
    lighter: '#d0a0a8',
    lightest: '#f0e0e4'
  };

  // Common blue color values to replace
  const blueColors = [
    '#007bff', '#0d6efd', '#0275d8', '#1e90ff', '#4169e1', '#0000ff', 
    '#0000cd', '#00008b', '#191970', '#4682b4', '#5bc0de', '#17a2b8',
    'rgb(0, 123, 255)', 'rgb(13, 110, 253)', 'rgb(23, 162, 184)',
    'rgba(0, 123, 255', 'rgba(13, 110, 253', 'rgba(23, 162, 184'
  ];

  // Function to replace blue with maroon in inline styles
  function replaceBlueWithMaroon() {
    // Replace all elements with blue background
    document.querySelectorAll('*').forEach(el => {
      const style = window.getComputedStyle(el);
      const bgColor = style.backgroundColor;
      
      // Check if the element has a blue background
      if (blueColors.some(color => bgColor.includes(color) || bgColor === color)) {
        el.style.backgroundColor = maroonColors.primary;
        el.style.borderColor = maroonColors.primary;
      }
      
      // Check for blue text color
      const textColor = style.color;
      if (blueColors.some(color => textColor.includes(color) || textColor === color)) {
        el.style.color = maroonColors.primary;
      }
      
      // Check for blue borders
      const borderColor = style.borderColor;
      if (blueColors.some(color => borderColor.includes(color) || borderColor === color)) {
        el.style.borderColor = maroonColors.primary;
      }
    });
    
    // Specifically target the Eventra Dashboard header
    const dashboardElements = document.querySelectorAll('.eventra-dashboard, .dashboard-header, [class*="dashboard"]');
    dashboardElements.forEach(el => {
      el.style.backgroundColor = maroonColors.primary;
      el.style.borderColor = maroonColors.primary;
      el.style.color = 'white';
    });
    
    // Target progress bars
    const progressBars = document.querySelectorAll('.progress-bar, .progress-bar-fill, [class*="progress"]');
    progressBars.forEach(el => {
      el.style.backgroundColor = maroonColors.primary;
    });
    
    // Target buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-info, .btn-blue, [class*="btn-"]');
    buttons.forEach(el => {
      if (el.classList.contains('btn-outline-primary') || 
          el.classList.contains('btn-outline-info') || 
          el.classList.contains('btn-outline-blue')) {
        el.style.color = maroonColors.primary;
        el.style.borderColor = maroonColors.primary;
        el.style.backgroundColor = 'transparent';
      } else if (el.classList.contains('btn-primary') || 
                el.classList.contains('btn-info') || 
                el.classList.contains('btn-blue')) {
        el.style.backgroundColor = maroonColors.primary;
        el.style.borderColor = maroonColors.primary;
        el.style.color = 'white';
      }
    });
  }

  // Run once when the page loads
  window.addEventListener('load', replaceBlueWithMaroon);
  
  // Run again after a short delay to catch dynamically loaded content
  window.addEventListener('load', () => {
    setTimeout(replaceBlueWithMaroon, 500);
    setTimeout(replaceBlueWithMaroon, 1500);
  });
  
  // Create a MutationObserver to watch for DOM changes
  const observer = new MutationObserver((mutations) => {
    replaceBlueWithMaroon();
  });
  
  // Start observing the document with the configured parameters
  window.addEventListener('load', () => {
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
  });
})();
