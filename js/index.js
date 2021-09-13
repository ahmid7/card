const cvv = document.querySelector('.cvv-container');
const cvvInput = document.querySelector('.cvv')
const frontCard = document.querySelector('.front');
const backCard = document.querySelector('.back');
const cardNO = document.querySelector('.cardno');
const frontCardNo = document.querySelector('.frontCardNO');
const userCvv = document.querySelector('.user-cvv');
const cardName = document.querySelector('.card-name');
const userName = document.querySelector('.user-card-name')
const expiryMonth = document.querySelector('.expiry-month');
const expiryYear = document.querySelector('.expiry-year');
const userExpiryMonth = document.querySelector('.user-expiry-month');
const userExpiryYear = document.querySelector('.user-expiry-year');
const submit = document.querySelector('.submit-container');

function Values(input,output,num){
    if(input.value.length < num){
        output.innerText = input.value;
    }else{
        alert(`number cannot be more than ${num}`);
        return;
    }
}

expiryYear.addEventListener('keyup',function(){
    // Values(expiryYear,userExpiryYear,3);
    if(expiryYear.value.length < 3){
        userExpiryYear.innerText = expiryYear.value;
    }else{
        let answer = expiryYear.value.substr(0,3);
        expiryYear.value = answer; 
        return;
    }
});


expiryMonth.addEventListener('keyup',function(){
    Values(expiryMonth,userExpiryMonth,3);
});


cardNO.addEventListener('keyup', function(){
    Values(cardNO,frontCardNo,25);
});

cardName.addEventListener('keyup',function(){
    Values(cardName,userName,50)
})

cvvInput.addEventListener('keyup',function(){
    Values(cvvInput,userCvv,4)
});



cvvInput.addEventListener('focus',function(){
    frontCard.style.animation = "front 0.4s linear forwards";
    backCard.style.animation = 'back 0.4s linear 0.4s forwards';
});
cvvInput.addEventListener('blur',function(){
    backCard.style.animation = 'reverseBack 0.4s linear forwards';
    frontCard.style.visibility = 'hidden';
    frontCard.style.animation = 'reverseFront 0.4s linear 0.4s forwards'
});

