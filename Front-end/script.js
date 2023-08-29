const button = document.getElementById("button");
const inputBox = document.getElementById("url-box");
const shortedUrl = document.getElementById("shortedUrl");

button.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const data = await shortUrl(inputBox.value);
    shortedUrl.value = `https://url-shortne.onrender.com/url/${data.resFromDB.shortId}`;
  } catch (error) {
    console.log("Internal server error");
  }
});

const shortUrl = async (urlValue) => {
  const apiUrl = "https://url-shortne.onrender.com/url/add";

  const postData = {
    url: urlValue,
  };

  try {
    const response = await axios.post(apiUrl, postData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};