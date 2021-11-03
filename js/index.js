let dataset = fetch(
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
)
  .then((result) => result.json())
  .then((data) => {
    data.drinks.forEach((obj) => {
      const drinkName = obj["strDrink"];
      const drinkImgUrl = obj["strDrinkThumb"];
      const drinkLabel = obj["strAlcoholic"];

      const removeTitleCaps = makeLowerCase(drinkName);
      const addTitleCaps = capitalize(removeTitleCaps);
      const removeTitleSpace = noSpace(addTitleCaps);
      const addTitleSpace = addSpace(removeTitleSpace);

      const removeLabelCaps = makeLowerCase(drinkLabel);
      const labelResult = translateLabel(removeLabelCaps);

      displayArticles(addTitleSpace, drinkImgUrl, labelResult);
    });
  });

// Schoonmaak functies, voor het schoonmaken van de data

const capitalize = (str) => {
  const firstLetter = str.charAt(0);
  const cap = firstLetter.toUpperCase();

  const full = str;
  const slice = full.slice(1);

  const together = cap + slice;

  return together;
};

const makeLowerCase = (str) => {
  return str.toLowerCase();
};

const noSpace = (str) => {
  return str.replace(". ", ".");
};

const addSpace = (str) => {
  return str.replace("&", " & ");
};

const translateLabel = (str) => {
  return str.replace("alcoholic", "alcohol").replace("non", "geen");
};

// Functies voor het displayen van de data

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
