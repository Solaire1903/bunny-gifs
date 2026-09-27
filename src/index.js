import "./styles.css";

const image = document.getElementById("bunny-gif");
const errorDisplay = document.getElementById("error-display");

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
 * Shows the error message on the page
 */
const showError = () => {
  errorDisplay.textContent = "Can't get a new GIF right now, try again later";
};

/**
 * Clears the error message from the page
 */
const clearError = () => {
  errorDisplay.textContent = "";
}

//console.log(await fetchGifData());
