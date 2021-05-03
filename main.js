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
    })
    

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
        if (itemBoundingBox.bottom <= window.innerHeight) {
            item.classList.add(item.getAttribute("animateClass"));
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