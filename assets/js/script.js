'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Modal functionality
function openModal(project) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("projectTitle");
    const description = document.getElementById("projectDescription");
    const technologies = document.getElementById("projectTechnologies");
    const features = document.getElementById("projectFeatures");

    // Clear previous content
    technologies.innerHTML = '';
    features.innerHTML = '';

    // Set project details based on which project was clicked
    if (project === 'spccManagement') {
        title.textContent = "Management System Of SPCC";
        description.textContent = "A web-based management system to streamline operations at SPCC. The system helps manage records and processes efficiently.";
        
        const techList = ["HTML", "CSS", "JavaScript", "PHP", "MySQL"];
        techList.forEach(tech => {
            let li = document.createElement('li');
            li.textContent = tech;
            technologies.appendChild(li);
        });

        const featureList = ["Record management", "User authentication", "Dashboard overview", "Real-time data updates", "Reports & Statistics", "User Role Management", "Responsive Design"];
        featureList.forEach(feature => {
            let li = document.createElement('li');
            li.textContent = feature;
            features.appendChild(li);
        });
    } 
    else if (project === 'spccWebsite') {
        title.textContent = "SPCC Website";
        description.textContent = "A website for SPCC that provides information about the institution and its programs.";
        
        const techList = ["HTML", "CSS", "JavaScript", "Codeigniter 3"];
        techList.forEach(tech => {
            let li = document.createElement('li');
            li.textContent = tech;
            technologies.appendChild(li);
        });

        const featureList = ["Responsive design", "Customizable sections", "Information display"];
        featureList.forEach(feature => {
            let li = document.createElement('li');
            li.textContent = feature;
            features.appendChild(li);
        });
    }
    else if (project === 'accountingSystem') {
        title.textContent = "Accounting System Of SPCC";
        description.textContent = "A web-based accounting system to manage finances at SPCC.";
        
        const techList = ["HTML", "CSS", "JavaScript", "Codeigniter 3", "MySQL", "PHP"];
        techList.forEach(tech => {
            let li = document.createElement('li');
            li.textContent = tech;
            technologies.appendChild(li);
        });

        const featureList = ["Income and Expense tracking", "Automatic reports", "User role management", "Secure transactions"];
        featureList.forEach(feature => {
            let li = document.createElement('li');
            li.textContent = feature;
            features.appendChild(li);
        });
    } 
    else if (project === 'tlmcWebsite') {
        title.textContent = "TLMC Website";
        description.textContent = "A modern website for small clinic offering product information and online services.";
        
        const techList = ["HTML", "CSS", "JavaScript", "Codeigniter 3", "PHP", "MySQL"];
        techList.forEach(tech => {
            let li = document.createElement('li');
            li.textContent = tech;
            technologies.appendChild(li);
        });

        const featureList = ["Product showcase", "Client portal", "Product search", "CMS", "User role management"];
        featureList.forEach(feature => {
            let li = document.createElement('li');
            li.textContent = feature;
            features.appendChild(li);
        });
    }

    // Show the modal
    modal.style.display = "block";
}

// Close modal
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
