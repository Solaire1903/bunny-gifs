import "./styles.css";

let statusCode;

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
    statusCode = response.status;
    return {};
  };

  statusCode = 200;
  const gifData = await response.json();

  return gifData;
};

//console.log(await fetchGifData());
