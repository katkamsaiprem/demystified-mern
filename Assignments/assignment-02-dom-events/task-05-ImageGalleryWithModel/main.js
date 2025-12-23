const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.querySelector(".modal")
const modalImage = document.querySelector(".modal-image")
const overlay = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-content")
const closeBtn = document.querySelector(".close-btn")


//on click thumbnail -> open modal(is a pop-up with content and close btn)
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        const src = this.getAttribute("src");//get src value of that obj and set to modal image
        modalImage.setAttribute("src", src);
        modal.classList.add("active")

    })
})


// on click overlay -> close modal
overlay.addEventListener("click", () => {
    modal.classList.remove("active")
})


//on click close Btn ->close modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove("active")
})

modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
})