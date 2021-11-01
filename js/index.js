let dataset = fetch(
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
)
  .then((result) => result.json())
  .then((data) => {
    console.log(data);

    data.drinks.forEach((obj) => {
      const drinkName = obj["strDrink"];
      const drinkImgUrl = obj["strDrinkThumb"];
      const drinkLabel = obj["strAlcoholic"];

      const removeCaps = makeLowerCase(drinkName);
      const addCaps = capitalize(removeCaps);
      const removeSpace = noSpace(addCaps);

      displayArticles(removeSpace, drinkImgUrl, drinkLabel);
    });
  });

// Schoonmaak functies, voor het schoonmaken van de data

function capitalize(str) {
  const firstLetter = str.charAt(0);
  const cap = firstLetter.toUpperCase();

  const full = str;
  const slice = full.slice(1);

  const together = cap + slice;

  return together;
}

function makeLowerCase(str) {
  return str.toLowerCase();
}

function noSpace(str) {
  return str.replace(". ", ".");
}

// Functies voor het displayen van de data

function displayTitle(data) {
  const cocktailTitle = data;

  const heading = document.createElement("h2");

  heading.innerHTML = cocktailTitle;

  return cocktailTitle;
}

function displayImg(data) {
  const cocktailImg = data;

  const image = document.createElement("img");
  image.setAttribute("src", `${data}`);

  image.innerHTML = cocktailImg;
}

function displayLabel(data) {
  const cocktailLabel = data;

  const span = document.createElement("span");

  span.innerHTML = cocktailLabel;
}

function displayArticles(title, img, label) {
  const createArticle = document.createElement("article");
  createArticle.setAttribute("id", "cocktail");
  document.body.appendChild(createArticle);

  const cocktailTitle = title;
  const cocktailImg = img;
  const cocktailLabel = label;

  createArticle.innerHTML = `<h2>${cocktailTitle}</h2><img src='${cocktailImg}' /><span>${cocktailLabel}</span>`;
}
