console.log('hello world');


// function processResponse(response) {
//     return response.json


// Show the joke on the page:
// 1. Make the request using fetch()
fetch('https://icanhazdadjoke.com', {
    headers: {
        Accept: 'application/json'
    }
})
.then(response => {
    console.log(response)
    const theData = response.json();
     return theData;  // returns to the next .then()
}) // convert to JSON

.then(data => { // data is plain Javascript Object
    console.log(data);
    return data.json;
})

.then(theJoke => {
    console.log(theJoke);
})

.catch(err => console.log(err))

// 2. Grab the .joke
// 3. Render it to the page

