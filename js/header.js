function a(title) {
  // Tab to edit

  fetch("header.html")
  .then(response=>response.text())
  .then(data => {document.getElementById("header").innerHTML = data;
  
    const h1 = document.getElementById("header-title");
    if (h1) h1.textContent=title;
    
    loadBurger()
  });
    
  }
  
  document.addEventListener("DOMContentLoaded",
    
    () => {const title = document.body.getAttribute("data-title") || "fizeste merda"; a(title)}
  );