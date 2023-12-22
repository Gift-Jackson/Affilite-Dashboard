const nextBtn_1 = document.querySelector(".next-btn-1");
const nextBtn_2 = document.querySelector(".next-btn-2");
const prevBtn_1 = document.querySelector(".prev-btn-1");
const prevBtn_2 = document.querySelector(".prev-btn-2");
const form_1 = document.querySelector(".form-1");
const form_2 = document.querySelector(".form-2");
const form_3 = document.querySelector(".form-3");
const tag_1 = document.querySelector(".tag-1");
const tag_2 = document.querySelector(".tag-2");
const tag_3 = document.querySelector(".tag-3");

nextBtn_1.addEventListener('click', () => {
    form_2.style.transform = "translateX(0)";
    form_1.style.transform = "translateX(-200%)";
    tag_1.classList.remove("current");
    tag_2.classList.add("current");
    tag_3.classList.remove("current");
})
prevBtn_1.addEventListener('click', () => {
    form_2.style.transform = "translateX(200%)";
    form_1.style.transform = "translateX(0)";
    tag_1.classList.add("current");
    tag_2.classList.remove("current");
    tag_3.classList.remove("current");
})
nextBtn_2.addEventListener('click', () => {
    form_3.style.transform = "translateX(0)";
    form_2.style.transform = "translateX(-200%)";
    tag_1.classList.remove("current");
    tag_2.classList.remove("current");
    tag_3.classList.add("current");
})
prevBtn_2.addEventListener('click', () => {
    form_3.style.transform = "translateX(200%)";
    form_2.style.transform = "translateX(0)";
    tag_1.classList.remove("current");
    tag_2.classList.add("current");
    tag_3.classList.remove("current");
})

// dynamic email field
const addBtn = document.querySelector(".add-more-btn");
const inputField = document.querySelector(".field");

function addField() {
    const email = document.createElement("input");
    email.type = "email";
    email.placeholder = "E-mail Address";
    email.name = "email";

    inputField.appendChild(email)
}

addBtn.addEventListener("click", addField);