window.onload = function () {
    window.addEventListener("resize", function () {
        switchMenu();
    })
    switchMenu();
    addAboutAnimate();
    addProgressAnimate()
    window.addEventListener("scroll", function () {
        switchMenu();
        addAboutAnimate();
        addProgressAnimate();
        activeMenuLinkRecent();
    })
    activeMenuLink();
    activeMenuLinkRecent();
}

function switchMenu() {
    var header = document.querySelector("#header");
    var width = window.innerWidth;
    var position = window.pageYOffset;
    if (width < 992 || (width >= 992 && position !== 0)) {
        header.classList.add("bg-white");
    } else {
        header.classList.remove("bg-white");
    }
}

function addAboutAnimate() {
    var animateElements = document.querySelectorAll(".animate__animated");
    animateElements.forEach(function (item, index) {
        var itemBoundingBox = item.getBoundingClientRect();
        if (itemBoundingBox.top <= window.innerHeight/1.5) {
            item.classList.add(item.getAttribute("animateClass"));
            item.style.opacity = 1;
        }
    })
}

function addProgressAnimate() {
    var progressBarList = document.querySelectorAll(".progress-bar");
    progressBarList.forEach(function (item, index) {
        var itemBoundingBox = item.getBoundingClientRect();
        if (itemBoundingBox.bottom <= window.innerHeight) {
            item.style.width = item.getAttribute("aria-valuenow") + "%";
        }
    })
}

function deactiveMenuLink() {
    var listLink = document.querySelectorAll("#navbarSupportedContent .nav-link");
    listLink.forEach(function (item, key) {
        item.classList.remove("active");
    })
}

function activeMenuLink() {
    var listLink = document.querySelectorAll("#navbarSupportedContent .nav-link");
    listLink.forEach(function (item, key) {
        item.addEventListener("click", function () {
            deactiveMenuLink();
            item.classList.add("active");
        })
    })
}

function activeMenuLinkRecent() {
    var linkRecent;
    var listSection = document.querySelectorAll("section");
    listSection.forEach(function (item, key) {
        var bounding = item.getBoundingClientRect();
        if (bounding.top < window.innerHeight/2 && bounding.top >= 0) {
            linkRecent = item.getAttribute("id");
            deactiveMenuLink();
            document.querySelector("a[href='#"+linkRecent+"']").classList.add("active");
        }
    })
}

//backToTop
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and 
}