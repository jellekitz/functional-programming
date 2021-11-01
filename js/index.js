let dataset = fetch("../data.json")
  .then((result) => result.json())
  .then((data) => {
    // voor elk object laten we alleen de value zien van de onderstaande key
    console.log(data);
    data.forEach((obj) => {
      const favPet = obj["Wat is je favoriete soort huisdier?"];
      const removeCaps = makeLowerCase(favPet);
      const splitString = takeFirstWord(removeCaps);
      const replaceRaceResult = replaceRace(splitString);
      const replaceLatinResult = replaceLatin(replaceRaceResult);

      replaceResult = replaceLatinResult;

      getId(replaceResult);

      // filterByAnimal(replaceResult, getId());

      // console.log(filterByAnimal(replaceResult, getId()));

      // displayDataset(replaceLatinResult);
    });
  });

// Functies voor het opschonen van de input van de dataset

function makeLowerCase(str) {
  return str.toLowerCase();
}

function takeFirstWord(str) {
  return str.split(" ").pop();
}

function replaceRace(str) {
  return str.replaceAll("dachshund", "hond");
}

function replaceLatin(str) {
  return str.replaceAll("sumatraensis", "geit");
}

// get id

function getId(data) {
  const results = data;
  const container = document.querySelector(".print_section");
  const buttons = document.querySelectorAll("button");
  const all = document.querySelectorAll(".all");
  const dogs = document.querySelectorAll(".dogs");
  const cats = document.querySelectorAll(".cats");
  const different = document.querySelectorAll(".different");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      button.classList.add("active");

      const buttonVal = button.getAttribute("data-buttons");

      if (buttonVal == "dog") {
        dogs.forEach((dog) => {
          dog.style.display = "inline-block";
        });
      } else if (buttonVal == "cat") {
        cats.forEach((cat) => {
          cat.style.display = "inline-block";
        });
      } else if (buttonVal == "different") {
        different.forEach((different) => {
          different.style.display = "inline-block";
        });
      } else {
        all.forEach((all) => {
          all.style.display = "inline-block";
        });
      }

      // const paragraph = document.createElement("p");
      // paragraph.innerHTML = results;
      // container.appendChild(paragraph);

      // console.log(results);
    });
  });
}

// Functie voor het laten displayen van de data naar een aparte section in de html

function displayDataset(data) {
  const question = data;

  const questionContainer = document.querySelector(".print_section");

  const paragraph = document.createElement("p");
  paragraph.innerHTML = question;
  questionContainer.appendChild(paragraph);
}

// filter functie

function filterByAnimal(data, attr) {
  const results = data;
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const newArray = [];
      newArray.push(results);

      const test = newArray.filter((array) => array === `#${attr}`);

      const questionContainer = document.querySelector(".print_section");
      const paragraph = document.createElement("p");
      paragraph.innerHTML = test;
      questionContainer.appendChild(paragraph);
    });
  });
}
