const toggler = document.getElementById("navbar-toggler");
    const collapse = document.getElementById("navbarNav");
  
    collapse.addEventListener("show.bs.collapse", () => {
      toggler.textContent = "×";
    });
  
    collapse.addEventListener("hide.bs.collapse", () => {
      toggler.textContent = "☰";
    });