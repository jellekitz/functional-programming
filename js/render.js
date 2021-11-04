// Functie voor het displayen van de data

const displayArticles = (title, img, label) => {
  const container = document.querySelector(".container"); // ik haal hier de eerste section met de class .container op, deze stop ik in container.
  const createArticle = document.createElement("article"); // maakt een article aan en stopt deze in een variabele.
  createArticle.setAttribute("class", "cocktail"); // hier geef ik een class mee aan het article element.
  container.appendChild(createArticle); // hier voeg ik het article element toe aan de container.

  const cocktailTitle = title; // ik haal de meegegeven data title op en stop deze in cocktailTitle, dit doe ik ook voor de onderstaande data
  const cocktailImg = img;
  const cocktailLabel = label;

  if (!cocktailLabel.includes("geen")) {
    // in deze if statement check ik of de data die ik in cocktaiLabel heb gegooid "geen" bevat. als dat niet zo is dan voer ik onderstaande uit.
    return (createArticle.innerHTML = `
    <img src='${cocktailImg}' />
    <div class="cocktail__information">
      <h2>${cocktailTitle}</h2>
    </div>
    <div class="alcoholic">bevat ${cocktailLabel}</div>
  `); // ik return bovenstaande code en stop dit in het article
  } else {
    return (createArticle.innerHTML = `
    <img src='${cocktailImg}' />
    <div class="cocktail__information">
      <h2>${cocktailTitle}</h2>
    </div>
    <div class="non-alcoholic">bevat ${cocktailLabel}</div>
  `); // als er wel "geen" in de data zit dan geef ik een andere class mee die de label aanpast naar een andere kleur.
  }
};

export { displayArticles }; // ik export de functie vervolgens.
