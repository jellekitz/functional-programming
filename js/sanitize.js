// Schoonmaak functies, voor het schoonmaken van de data

const capitalize = (str) => {
  const firstLetter = str.charAt(0); // hier pak ik de eerste letter van de meegegeven string, deze stop ik in firstLetter
  const cap = firstLetter.toUpperCase(); // die eerste letter maak ik vervolgens toUpperCase zodat deze nu als hoofdletter getoond word

  const full = str; // hier pak ik weer de hele string
  const slice = full.slice(1); // vervolgens slice ik de eerste letter van de zin

  const together = cap + slice; // hier plak ik de hoofdletter bij de afgesneden zin, zodat deze weer compleet is

  return together; // vervolgens return de volledige zin met hoofdletter
};

const makeLowerCase = (str) => {
  return str.toLowerCase(); // hier pak ik de meegegeven zin en die zet ik om naar lowerCase
};

const noSpace = (str) => {
  return str.replace(". ", "."); // hier pak ik wederom de meegegeven string en verwijder ik alle spaties na de punt.
};

const addSpace = (str) => {
  return str.replace("&", " & "); // hier pak ik wederom de meegegeven string en zet ik spaties voor en na de &.
};

const translateLabel = (str) => {
  return str.replace("alcoholic", "alcohol").replace("non", "geen"); // hier pak ik wederom de meegegeven string en vertaal ik deze twee woorden.
};

export { capitalize, makeLowerCase, noSpace, addSpace, translateLabel }; // hier export ik alle functies
