For this assignment, my goal was to create an interactive webpage that allows users to browse different types of hats from the Kith website. I began by using the hamburger-menu demo as my starting point, and then incorporated different elements to build a clean navigation experience that directly connects to the content on the page. When a user selected a category, such as Beanies, Bucket Hats, or Caps, I wanted the page to filter the displayed hats to match that selection. To make this work, I needed to incorporate hat images directly from the Kith website into my JavaScript. 

One of the biggest challenges I encountered was implementing a functional “Shop All” button. I wanted users to be able to return to the full collection without refreshing the page, but every tutorial I found offered a different solution, and none of them worked in my setup—I was only receiving a blank page. Eventually, I had to turn to ChatGPT for help, and with its guidance I was finally able to get the feature working correctly.

Another challenge was getting my header text perfectly centered. Since the Kith logo sits in the left corner, it kept pulling the title off-center, which made the layout look uneven. I had to experiment with my CSS—specially the .kith-header and .kith-logo classes—adjusting the flex layout, spacing, and absolute positioning to balance the logo and text. A solution I found on Stack Overflow pointed me in the right direction, and after applying those techniques, I was able to create a clean, visually balanced header where the title remains centered no matter where the logo sits.

I began dealing with an issue that caused the hamburger menu to created a strange, broken layout when switching between mobile and desktop screen sizes. The category list shifted out of place and disrupted the overall design. To resolve this, I researched potential solutions and implemented a JavaScript function that ensures the categories stay aligned in a clean, straight list. This was the new script I needed to learn and incorporate:

const tieResize = () => {
    const cb = document.getElementById('menu-toggle');
    if (!cb) return;
    if (window.innerWidth >= 768 && cb.checked) cb.checked = false;
  };
  window.addEventListener('resize', tieResize);
  tieResize();
