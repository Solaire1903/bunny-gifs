import "./styles.css";

const fetchGifData = async () => {
  const params = new URLSearchParams({
    api_key: "zTdIiXwrSqzIK65PVMoVNRQNmL9PVQQ7",
    q: "bunnies",
    rating: "g",
  });
  const url = `https://api.giphy.com/v1/gifs/search?${params}`;

  const response = await fetch(url);
  const gifData = await response.json();
  
  return gifData;
};

fetchGifData();
