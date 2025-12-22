const inputBox = document.querySelector("#inputBox");

const GamesListItems = document.querySelectorAll(".item");
//games name elements items stored in array

const filterGames = () => {
    const searchGame = inputBox.value.toLowerCase()

    GamesListItems.forEach((game) => {
        const gameText = game.textContent.toLowerCase();

        gameText.includes(searchGame) ? game.classList.remove("hide") : game.classList.add("hide")
    })

}
inputBox.addEventListener("input", filterGames)