let submitLeft = 3;

document.getElementById("pin").disabled = true; //Pin Generate textBox disable

//Generate Pin
function getPin() {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    console.log(randomNumber);
    // const randomNumber = Math.random() * 100000;
    //const pin = (randomNumber + '').split('.')[0];
    // if (pin.length === 5) {
    //     return pin;
    // }
    // else {
    //     console.log('Not valid ' + pin);
    //     return getPin();
    // }
    return randomNumber;
};

document.getElementById('generateBtn').addEventListener('click', function () {
    generatePin();
});

//Display generated pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
    pinInput.style.color = "black";
};

//Handle calculator buttons
const buttonsContainer = document.getElementById('buttons-container');
buttonsContainer.addEventListener('click', function (event) {
    const digits = event.target.innerText;
    if (isNaN(digits)) {

    }
    else {
        const typedInput = document.getElementById('typed-pin');
        //typedInput.value = typedInput.value + digits;
        typedInput.value += digits;
    }
});

//Clear input data
document.getElementById('clear-btn').addEventListener('click', function () {
    const clearData = document.getElementById('typed-pin');
    clearData.value = '';
});

//Remove last digit
document.getElementById('remove-last-digit').addEventListener('click', function () {
    const inputPin = document.getElementById('typed-pin').value;
    const removeLastDigit = inputPin.slice(0, -1);
    console.log(removeLastDigit);
    document.getElementById('typed-pin').value = removeLastDigit;
});

//Verify pin
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === '' || typedPin === '') {
        return;
    }
    else if (pin === typedPin) {
        const matched = document.getElementById('matched');
        matched.style.display = 'block';
        document.getElementById('font-page').style.display = 'none';
    }
    else {
        submitLeft = submitLeft - 1;
        if (submitLeft < 1) {
            const notMatched = document.getElementById('notMatched');
            notMatched.style.display = 'block';
            document.getElementById('font-page').style.display = 'none';
            document.getElementById('notMatched').innerText = "❌ No More Chance. You Are Blocked ❌"
        }
        else {
            const notMatched = document.getElementById('notMatched');
            notMatched.style.display = 'block';
            document.getElementById('font-page').style.display = 'none';

            // By using Alert 
            // alert("Didn't match. Try again");
            // const pin = document.getElementById('pin');
            // pin.value = '';
            // const typedPin= document.getElementById ('typed-pin');
            // typedPin.value = '';
        }
    }
};
document.getElementById('submitBtn').addEventListener('click', function () {
    verifyPin();
});

//Retry event
document.getElementById('retry-btn').addEventListener('click', function () {
    retry();
});


function retry() {
    const secondTry = document.getElementById('font-page');
    secondTry.style.display = 'flex';
    document.getElementById('notMatched').style.display = 'none';
    const pin = document.getElementById('pin');
    pin.value = '';
    const typedPin = document.getElementById('typed-pin');
    typedPin.value = '';

    document.querySelector('.action-left').innerText = `${submitLeft} try left`; 
};