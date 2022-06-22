// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

function singleCard(element){
    
    let ulFirstLi = document.body.querySelector('.cards');


    let liElement = document.createElement("li");
    liElement.className = "card"
    liElement.id = "card";


    let mainEl = document.createElement("h2");
    mainEl.className = "card--title"
    mainEl.textContent = element.name.toUpperCase()

    let imageElement = document.createElement("img")
    imageElement.className = "card--img"
    imageElement.src = element.sprites.other["official-artwork"].front_default
    imageElement.alt = ""
    imageElement.width = 300



    let ulContent = document.createElement("ul")
    ulContent.className = "card--text"

    for(let stat of element.stats){

    let fixedList = document.createElement("li");

    fixedList.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`

    ulContent.append(fixedList)
    }
    
    
    liElement.append(mainEl, imageElement, ulContent)
    ulFirstLi.append(liElement)
}





// - The cards should be nested inside <ul class="cards"></ul>

for (let element of data){
    singleCard(element)
}

function cards(cards) {
    throw new Error("Function not implemented.");
}