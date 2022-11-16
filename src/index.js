import generateJoke from "./generateJoke";
import "./styles/main.scss";
import kiwi from "./assets/kiwi.svg";

const kiwiImg = document.getElementById("kiwiImg");
kiwiImg.src = kiwi;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
