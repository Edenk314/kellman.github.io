document.querySelectorAll('.menu a').forEach(a => {
    a.addEventListener('click', () => {
      const cb = document.getElementById('menu-toggle');
      if (cb) cb.checked = false;
    });
  });
  
  const tieResize = () => {
    const cb = document.getElementById('menu-toggle');
    if (!cb) return;
    if (window.innerWidth >= 768 && cb.checked) cb.checked = false;
  };
  window.addEventListener('resize', tieResize);
  tieResize();
  
  
  const hats = [
    {
      name: "Kith & New Era for the New York Knicks All Over Patches Knit Beanie",
      category: "Beanies",
      image: "https://kith.com/cdn/shop/files/KHM051297-451-Front.jpg?v=1762458646&width=1920"
    },
    {
      name: "Kith Twill Dawson Bucket",
      category: "Bucket Hats",
      image: "https://kith.com/cdn/shop/files/KHM051092-302-Front.jpg?v=1755738762&width=1920"
    },
    {
      name: "Marvel | Kith for New Era Captain America Fitted Cap",
      category: "Caps",
      image: "https://kith.com/cdn/shop/files/KHM051344-413-Front.jpg?v=1762977773&width=1920"
    },
    {
        name: "The Outlaw II Cowboy Hat",
        category: "Cowboy Hats",
        image: "https://kith.com/cdn/shop/files/LCOUTLAW-BLKII-FRONT.jpg?v=1704841958&width=1280"
      },
    {
        name: "Kith Women Jacquard Rib Headband",
        category: "Headbands",
        image: "https://kith.com/cdn/shop/files/KHW050264-001-Front.jpg?v=1761848745&width=1280"
      },
    {
        name: "Kith Women Faux Fur Shaggy Ear Muff",
        category: "Earmuffs",
        image: "https://kith.com/cdn/shop/files/KHW050260-218-Front.jpg?v=1761848602&width=1280"
      },
    {
      name: "Kith Polyfoam Nolan Trucker Hat",
      category: "Trucker Hats",
      image: "https://kith.com/cdn/shop/files/KHM051131-001-Front.jpg?v=1755737719&width=1024"
    }
  ];
  
  
  function displayHats(category) {
    const grid = document.getElementById("hat-grid");
    grid.innerHTML = "";
  
    const filtered = category
      ? hats.filter(h => h.category === category)
      : hats;
  
    filtered.forEach(hat => {
      const div = document.createElement("div");
      div.classList.add("hat-item");
  
      div.innerHTML = `
        <img src="${hat.image}" alt="${hat.name}">
        <p>${hat.name}</p>
      `;
  
      grid.appendChild(div);
    });
  }
  
  displayHats();
  
  
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
  
      const category = e.target.innerText.trim();
  
      if (category === "Shop All") {
        displayHats(); 
      } else {
        displayHats(category); 
      }
    });
  });
  
