export const randomNumber = (num) => {
    return (Math.floor(Math.random() * num) + 1);
};

export const getChuckJoke = async function(cat) {
    const objectReturn = await fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`);
    const result = await objectReturn.json();
    return result.value;
};


export const getChuckCategory = async function(i) {
    const objectReturn = await fetch('https://api.chucknorris.io/jokes/categories');
    const result = await objectReturn.json();
    getChuckJoke(result[i]);  
};