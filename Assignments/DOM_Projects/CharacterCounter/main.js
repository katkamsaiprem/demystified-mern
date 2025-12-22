const textInput = document.querySelector("#textArea")
const charCounter = document.querySelector(".charCounterDisplay")

const maxChars = 100;


const updateCharCounter = () => {
    const currTextLength = textInput.value.length;

    if (currTextLength > maxChars) {//block the input
        textInput.value = textInput.value.slice(0, maxChars);//cuts the text to only the first 100 characters

        const newLength = textInput.value.length;
        charCounter.textContent = newLength + "/" + maxChars;

    }
    else {
        charCounter.textContent = currTextLength + "/" + maxChars;
    }

    charCounter.classList.add("safe", "warning", "danger")

    if (currTextLength < 70) charCounter.classList.add("safe")
    else if (currTextLength < 90) charCounter.classList.add("warning")
    else charCounter.classList.add("danger")
}


textInput.addEventListener("input", updateCharCounter)