let currentContentId = "hyperlinks";

var authorPage = fasle;

function scrollToSection(event, sectionId, authorPage) {
  event.preventDefault(); // prevents event bubbling
  const targetSection = document.querySelector(sectionId);
  targetSection.scrollIntoView({ behavior: "smooth" }); // provides a smoother scrolling effect
  const clickedItem = event.target;

  if (!authorPage) {
    // Remove 'active' class from all header items
    const headerItems = document.querySelectorAll(".header-item");
    headerItems.forEach((item) => item.classList.remove("active"));

    // Add 'active' class to the clicked header item
    clickedItem.classList.add("active");
  }
}

function redirectToAuthorPage() {
  window.location.href = "author.html"; //redirects to author page
}

function redirectToHyperlinksPage() {
  window.location.href = "index.html"; //redirects to main page
}

/* AJAX */

function toggleContent(event) {
  event.preventDefault(); // prevents event bubbling
  // Get references to the content container div and the load content link
  var contentContainer = document.getElementById("content-container");
  var loadContentLink = document.getElementById("load-content");
  // Checks if the container div is empty
  if (contentContainer.innerHTML === "") {
    var xhr = new XMLHttpRequest();
    /*   The XMLHttpRequest object is a built-in JavaScript object that creates a way to transfer data between the web browser and a server asynchronously, 
    without refreshing the page. This is the core functionality behind AJAX. */
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        /* The xhr.readyState === 4 and xhr.status === 200 conditions are used to check if the AJAX request has completed successfully before updating the content on the page.
        xhr.readyState === 4 means the request has completed, and the response is ready and xhr.status === 200 means "Success" in the HTTP protocol. */
        contentContainer.innerHTML = xhr.responseText;
        loadContentLink.textContent = "Click to read less"; // setting the link text
      }
    };
    xhr.open("GET", "content.html", true); // GET request to the "content.html" file
    xhr.send(); // request send
  } else {
    contentContainer.innerHTML = "";
    loadContentLink.textContent = "Click to read more"; // resetting the link text
  }
}

// Close the hamburger menu when clicking on navbar items
function scrollToSection(event, sectionId, authorPage) {
  event.preventDefault();
  const targetSection = document.querySelector(sectionId);
  targetSection.scrollIntoView({ behavior: "smooth" });

  if (authorPage) {
    toggleSidebar();
  }
}

// Toggle sidebar
function toggleSidebar() {
  const sideNavBar = document.getElementById("side-nav-bar");
  sideNavBar.classList.toggle("active");
}
