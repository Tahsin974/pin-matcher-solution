function getPin(){
    const generatePin = Math.round(Math.random()*10000);
    const pinString = generatePin + '';
    if(pinString.length == 4){
        return generatePin;
    }
    else{
        return getPin();
    }
}
function getGeneratePin(){
    const pin = getPin();
    const pinDisplay = document.getElementById('display-pin');
    pinDisplay.style.textAlign = 'center';
    pinDisplay.value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){

    const number = event.target.innerText;
    const typedKey = document.getElementById('typed-key');
    if(isNaN(number)){
        if(number == 'C'){
            typedKey.value = '';
        }
    }
    else{
        const currentKey = typedKey.value;
        typedKey.value = currentKey  + number;
        typedKey.style.textAlign = 'center';
    }
    
})
function verifyPin(){
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-key').value;
    const failError = document.getElementById('notify-fail');
    const successMessage = document.getElementById('notify-success');
    if (generatedPin == typedPin){
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
    
}