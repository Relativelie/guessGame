const textInput = document.querySelector(".container input");
const tryButton = document.querySelector(".container button");
const computerAnswer = Math.floor(Math.random()*20) + 1;
console.log(computerAnswer)

tryButton.addEventListener("click", tryGuess);

textInput.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        tryGuess()
    }
})


function tryGuess() {
    let inputValue = textInput.value;

    if (inputValue < 1 || inputValue > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Wrong',
            text: 'Computer had choosed the number from 1 to 20'
          })
    }

    else if (isNaN(inputValue)) {
        Swal.fire({
            icon: 'error',
            title: 'Wrong',
            text: 'It is not a namber'
          })
    }

    else {
        if (computerAnswer == inputValue) {
            Swal.fire({
                icon: 'success',
                title: 'Great',
                text: 'You guessed'
              });
        }

        else if (inputValue > computerAnswer) {
            Swal.fire({
                icon: 'error',
                title: 'Wrong',
                text: 'Enter the lower number'
              })
        }

        else if (inputValue < computerAnswer) {
            Swal.fire({
                icon: 'error',
                title: 'Wrong',
                text: 'Enter the greater number'
              })
        }
    }
}