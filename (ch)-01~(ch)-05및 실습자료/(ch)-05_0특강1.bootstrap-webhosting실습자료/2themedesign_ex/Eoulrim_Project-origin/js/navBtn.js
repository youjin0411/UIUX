// show/hide menu: toggle menu
const toggleMenu = (toggleId, navListId) => {
  // html -> js
  const toggle = document.querySelector('.nav_toggle');
  const navList = document.querySelector('.nav_list');
  const toggleIcon = toggle.getElementsByTagName("i")[0];

  if(toggle && navList){
      // toggle click        
      toggle.addEventListener('click', () => {
          // show/hide menu: .show-menu
          navList.classList.toggle('show-menu');
          //change toggle icon: bx-menu <-> bx-x
          toggleIcon.classList.toggle("bx-menu");
          toggleIcon.classList.toggle("bxs-x-square");
      });
  }
}

toggleMenu("nav-toggle", "nav-list")