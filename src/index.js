import "./styles.css";

const image = document.getElementById("bunny-gif");
const errorDisplay = document.getElementById("error-display");
const bunnyButton = document.getElementById("bunny-button");

/**
 * Fetches bunny gif data from Giphy
 * @returns The gif data, or an empty object when fetch fails
 */
const fetchGifData = async () => {
  const params = new URLSearchParams({
    api_key: "zTdIiXwrSqzIK65PVMoVNRQNmL9PVQQ7",
    q: "bunnies",
    rating: "g",
  });
  const url = `https://api.giphy.com/v1/gifs/search?${params}`;

  const response = await fetch(url);
  if (!response.ok) {
    return {};
  }

  const gifData = await response.json();

  return gifData;
};

/**
 * Gets the url from a random gif of the gif data
 * @param {object} gifData The gif data
 */
const getGifUrlFromData = (gifData) => {
  const randomIndex = Math.floor(Math.random() * gifData.data.length);
  const gifUrl = gifData.data[randomIndex].images.original.url;

  return gifUrl;
};

/**
 * Displays the gif on the page
 * @param {string} gifUrl The gifUrl of the gif to display
 */
const displayGif = (gifUrl) => {
  image.src = gifUrl;
};

/**
 * Shows the error message on the page
 */
const showError = () => {
  errorDisplay.textContent = "Can't get a new GIF right now, try again later";
};

const gifData = await fetchGifData();

bunnyButton.addEventListener("click", () => {
  const gifUrl = getGifUrlFromData(gifData);
  displayGif(gifUrl);
});

/**
 * Loads the app with the given gif data
 * @param {object} gifData The gif data
 */
const loadApp = (gifData) => {
  if (Object.keys(gifData).length === 0) {
    showError();
  } else {
    const gifUrl = getGifUrlFromData(gifData);
    displayGif(gifUrl);
  }
};

loadApp(gifData);
