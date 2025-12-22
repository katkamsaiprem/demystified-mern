const noteInput = document.querySelector("#noteInput")
const addButton = document.querySelector("#addButton");
const notesList = document.querySelector("#notesList");

const addNote = () => {

    const noteText = noteInput.value.trim();

    if (noteText == "") {
        alert("please enter the text")
        return;
    }

    const noteItem = document.createElement("li");
    noteItem.classList.add("noteItem")

    //span for note text
    const noteTextSpan = document.createElement("span");
    noteTextSpan.classList.add("noteText");
    noteTextSpan.textContent = noteText;



    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {

        noteItem.remove();//removes the item from dom


    })

    noteItem.appendChild(noteTextSpan);
    noteItem.appendChild(deleteBtn);

    notesList.appendChild(noteItem)

    //cleare the input field after added
    noteInput.value = "";
    noteInput.focus();

}
addButton.addEventListener("click", addNote)

