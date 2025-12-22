const headers = document.querySelectorAll(".accordion-header");

headers.forEach(function (header) {
    header.addEventListener("click", () => {

        const content = header.nextElementSibling;

        const isOpen = content.classList.contains("active")

        headers.forEach(function (h) {//close all sections first ,then only open one at once
            h.classList.remove('active')
            h.nextElementSibling.classList.remove("active")
        })

        if (!isOpen) {
            header.classList.add("active")
            content.classList.add("active")
        }
    })
})