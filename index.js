document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
  });
  
  
  
  const loggedOutLinks = document.querySelectorAll('.logged-out');
  const loggedInLinks = document.querySelectorAll('.logged-in');
  const accountDetails = document.querySelector('.account-details');
  
  
  
  const setupUI = (user) => {
    if(user){
       // Account Information
     const html = `
     <div>Profile Name : ${user.displayName}</div>
     <div>Email : ${user.email}</div>
     `;
     accountDetails.innerHTML= html;
      // toggle Buttons
      loggedInLinks.forEach(item => item.style.display='block');
      loggedOutLinks.forEach(item => item.style.display='none');
    }else{
      // hide account info if not logged in
       accountDetails.innerHTML= '';
      // toggle Buttons
      loggedInLinks.forEach(item => item.style.display='none');
      loggedOutLinks.forEach(item => item.style.display='block');
    }
  }
  
  
  
  
  // Event listener for the header-close-btn
  document.querySelector('.header-close-btn').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
  //   const overlay = document.querySelector("modal-overlay");
  //  overlay?.style.setProperty('display','none');
    
  }); 
  
  // Event listener for the close button in the signup modal
  document.querySelector('#modal-signup .login-header .header-close-btn').addEventListener('click', () => {
   document.querySelector('#modal-signup').style.display = 'none';
   const overlay = document.querySelector('.modal-overlay');
  // //  console.log(overlay);
   overlay.style.display = 'none';
  });
  
  
  
  // Event listener for the close button in the signup modal
  document.querySelector('#modal-login .login-header .header-close-btn').addEventListener('click', () => {
    document.querySelector('#modal-login').style.display = 'none';
    const overlay = document.querySelector('.modal-overlay');
   // //  console.log(overlay);
    overlay.style.display = 'none';
  });
   
  document.addEventListener('DOMContentLoaded', function() {
    const popupBox = document.getElementById('popup-box');
    const questionButton = document.querySelector('.faq');
    const popupCloseBtn = document.querySelector('.popup-close-btn');
  
    // Show popup box when ? button is clicked
    questionButton.addEventListener('click', function() {
      popupBox.style.display = 'block';
    });
  
    // Close popup box when close button is clicked
    popupCloseBtn.addEventListener('click', function() {
      popupBox.style.display = 'none';
    });
  });
  
  
  
  
  
  
  
  
  
  //contact us
  document.addEventListener("DOMContentLoaded", function() {
    const contactUsBtn = document.querySelector(".contact-us-btn");
    const contactPopup = document.getElementById("contact-us-popup");
    const closeBtn = document.querySelector(".close-btn");
  
    // Open the contact popup when the contact us button is clicked
    contactUsBtn.addEventListener("click", function() {
      contactPopup.style.display = "block";
    });
  
    // Close the contact popup when the close button is clicked
    closeBtn.addEventListener("click", function() {
      contactPopup.style.display = "none";
    });
  
    // Close the contact popup when the user clicks outside the popup
    window.addEventListener("click", function(event) {
      if (event.target === contactPopup) {
        contactPopup.style.display = "none";
      }
    });
  });
  
  
  
  //hamburger and togglebtn
  
  // Select The Elements
  var toggle_btn;
  var big_wrapper;
  var hamburger_menu;
  
  function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
  }
  
  const main = document.querySelector("main");
  
  declare();
  
  let dark = false;
  
  function toggleAnimation() {
    // Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
      clone.classList.remove("light");
      clone.classList.add("dark");
    } else {
      clone.classList.remove("dark");
      clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);
  
    document.body.classList.add("stop-scrolling");
  
    clone.addEventListener("animationend", () => {
      document.body.classList.remove("stop-scrolling");
      big_wrapper.remove();
      clone.classList.remove("copy");
      // Reset Variables
      declare();
      events();
    });
  }
  
  function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
    hamburger_menu.addEventListener("click", () => {
      big_wrapper.classList.toggle("active");
    });
  }
  
  events();