let dataset = fetch("../data.json")
  .then((result) => result.json())
  .then((data) => {
    // console.log(data);
    // voor elk object laten we alleen de value zien van de onderstaande key
    data.forEach((obj) => {
      const favPet = obj["Wat is je favoriete soort huisdier?"];
      const removeCaps = makeLowerCase(favPet);
      const splitString = takeFirstWord(removeCaps);

      displayDataset(splitString);
    });
  });

// Functies voor het opschonen van de input van de dataset

function makeLowerCase(str) {
  return str.toLowerCase();
}

function takeFirstWord(str) {
  return str.split(" ").pop();
}

// Functie voor het laten displayen van de data naar een aparte section in de html

function displayDataset(data) {
  const question = data;

  const questionContainer = document.querySelector(".print_section");

  const paragraph = document.createElement("p");
  paragraph.innerHTML = question;
  questionContainer.appendChild(paragraph);
}
