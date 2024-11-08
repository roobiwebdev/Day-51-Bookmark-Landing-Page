let simpleBook = document.querySelector(".simpleBook");
let speedySearching = document.querySelector(".speedySearching");
let easySharing = document.querySelector(".easySharing");

let simpleBookFile = document.querySelector(".simple-bookmark");
let speedySearchFile = document.querySelector(".speedy-searching");
let easyShareFile = document.querySelector(".easy-sharing");
let Questions = document.querySelectorAll(".quest");
let Answer = document.querySelectorAll(".answ");
let dropIcon = document.querySelectorAll(".icon");

let contactInput = document.querySelector(".contact-input");
let submitBtn = document.querySelector(".submitBtn");

window.onload = () => {
    simpleBook.classList.add("active");
    simpleBookFile.style.display = "flex";
};

const seeActiveFilter = (activeFilter) => {
    document.querySelectorAll(".link").forEach(li => {
        li.classList.remove("active");
    });
    activeFilter.classList.add("active");
};

const setActiveFileshow = (activeFile) => {
    document.querySelectorAll(".file").forEach(file => {
        file.style.display = "none";
    });
    activeFile.style.display = "flex";
};

simpleBook.addEventListener("click", () => {
    seeActiveFilter(simpleBook);
    setActiveFileshow(simpleBookFile);
});

speedySearching.addEventListener("click", () => {
    seeActiveFilter(speedySearching);
    setActiveFileshow(speedySearchFile);
});

easySharing.addEventListener("click", () => {
    seeActiveFilter(easySharing);
    setActiveFileshow(easyShareFile);
});

Questions.forEach((quest, index) => {
    quest.addEventListener("click", () => {
        Answer[index].classList.toggle("show");
        dropIcon[index].classList.toggle("rotate");
    });
});

const isValidEmail = (email) => {
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return check.test(String(email).toLowerCase());
};

submitBtn.addEventListener("click", () => {
    let email = contactInput.value;
    if (!isValidEmail(email)) {
        document.querySelector(".icon-error").style.display = "flex";
        document.querySelector(".right-icon").style.display = "none";
    } else {
        document.querySelector(".right-icon").style.display = "flex";
        document.querySelector(".icon-error").style.display = "none";
    }
});
