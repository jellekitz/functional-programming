// Functie voor het displayen van de data

const displayArticles = (title, img, label) => {
  const container = document.querySelector(".container");
  const createArticle = document.createElement("article");
  createArticle.setAttribute("class", "cocktail");
  container.appendChild(createArticle);

  const cocktailTitle = title;
  const cocktailImg = img;
  const cocktailLabel = label;

  if (!cocktailLabel.includes("geen")) {
    return (createArticle.innerHTML = `
    <img src='${cocktailImg}' />
    <div class="cocktail__information">
      <h2>${cocktailTitle}</h2>
    </div>
    <div class="alcoholic">bevat ${cocktailLabel}</div>
  `);
  } else {
    return (createArticle.innerHTML = `
    <img src='${cocktailImg}' />
    <div class="cocktail__information">
      <h2>${cocktailTitle}</h2>
    </div>
    <div class="non-alcoholic">bevat ${cocktailLabel}</div>
  `);
  }
};

export { displayArticles };
