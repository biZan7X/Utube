import axios from "axios";

const KEY = "AIzaSyA7HO3rh8i-t4z7Wcnx8nx2RUKsuhzJQdg";

export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
      part: "snippet", //^ we want the snippet part of the data , contains the relevenat info
      maxResults: 5,
      key: KEY,
   },
});
