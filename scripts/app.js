/*
How do you get an "as-you-type" feature in your front-end app?
example: as you type a username into a signup form, it tells you if that username is taken
1. addEventListener
2. fetch()
3. render
*/

async function main () {
    const button = document.getElementById('new-joke');
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        const joke = await getJoke();
        renderJoke(joke);
    });
}
main();

    // Show the joke on the page:
    // 1. make the Request using fetch()
async function getJoke() {
    const jokePromise = fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    });

    const response = await jokePromise; // 2. grab the .joke
    const jokeData = await response.json();
    // console.log(jokeData);
    // console.log(jokeData.joke);
    return jokeData.joke;
    // 3. render it to the page
}

async function renderJoke(joke) {
    // async b/c we will await getJoke
    // const joke = await getJoke();

    // create the DOM element    
    const p = document.createElement('p');

    // put the joke text into it
    p.textContent = joke;

    // attach it to an existing DOM element
    document.getElementById('root').appendChild(p);
}