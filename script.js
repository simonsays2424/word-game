"use strict";

//fetch(`https://random-word-api.herokuapp.com/word?length=8`)

const randomWord = document.querySelector(".rawWord");
//this function shuffles elements in an array
const shuffleArray = (arr) => arr.sort((a, b) => Math.random() - 0.5);

//this funtion returns a shuffled word
const getWord = async function (length) {
	const word = await fetch(
		`https://random-word-api.herokuapp.com/word?length=${length}`
	);
	const [rawWord] = await word.json();
	console.log(rawWord);
	const shuffled = shuffleArray(rawWord.split("")).join("");
	randomWord.innerHTML = shuffled;
};

getWord(8);

//todo 1 -
