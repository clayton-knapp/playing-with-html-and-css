console.log('hello console....');

// 1. create variable for each element we need to interact with
const greetingInput = document.getElementById('greeting-input');
//console.log(greetingInput);
const changeButton = document.getElementById('change-button');
const greetingDisplay = document.getElementById('greeting-display');
//console.log(greetingDisplay);

// 2. add listeners for events we care about
changeButton.addEventListener('click', () => {
    // 3. do the action
    console.log('event listener running...');
    greetingDisplay.textContent = greetingInput.Value;
});

//greetingInput.addEventListener('input', () => {
//    greetingDisplay.textContent = greetingInput.value;
//});
