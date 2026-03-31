let characters = [];
const characterArray = document.getElementById("character-array");                                                         // an array to store the characters



async function getDragonBallData() {                                             // this function will get the data from the API
    const response = await fetch("https://dragonball-api.com/api/characters?limit=1000");
    const data = await response.json();
    characters = data.items;

    renderList(characters);                                                       // calls the renderList function with the characters array

}
getDragonBallData();


function setBackground() {                                                              // this function will set the background of the page
    const body = document.querySelector("body");
    body.classList.add("background");
    body.style.backgroundImage = "url('bg.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";

}
setBackground();


const inputbox = document.getElementById("search-input");                                // gets the input box element
const inputbtn = document.getElementById("search-button");                               // gets the search button element

inputbtn.addEventListener("click", SearchHandling);                                // calls the SearchHandling function when the button is clicked
inputbox.addEventListener("keydown", (x) => {                                      // calls the SearchHandling function when the enter key is pressed
    if (x.key === "Enter") {
        SearchHandling();
    }
});

function SearchHandling() {                                                         // this function will handle the search
    const val = inputbox.value.trim().toLowerCase();                                // gets the value of the input box and converts it to lowercase



    if (val === "") {                                                               // if the input value is empty
        window.alert("Please enter a character name or race");
        return;
    }


    const filtered = characters.filter(c =>                                     // filters the characters array based on the input value
        c.name.toLowerCase() === val ||
        c.race.toLowerCase() === val
    );
    if (filtered.length === 0) {                                                // if the filtered array is empty of characters
        window.alert("No characters found: Try searching by Character Name or Race");
        return;
    }


    renderList(filtered);                                                          // calls the renderList function with the filtered array

}

function renderList(array) {                                                       // this function will render the character cards
    document.querySelectorAll(".character-card").forEach(card => card.remove());   // clears the screen from previous character cards

    array.forEach(character => {                                                   // a loop for each element of the current array (which will be called)
        const characterCard = document.createElement("div");                       // creates a new div element
        characterCard.classList.add("character-card");                             // adds the class "character-card" to the new div element
        characterCard.innerHTML = `                                               
            <img src="${character.image}" alt="${character.name}">
            <div class="character-info">
                <h1>${character.race} <br> KI: ${character.ki}</h1>
                <h2>${character.name}</h2>
                <h2>${character.gender}</h2>
                <h2>${character.id}</h2>
            </div>
        `;

        characterArray.appendChild(characterCard);                                      // appends the character card to the character array container
    });
}


