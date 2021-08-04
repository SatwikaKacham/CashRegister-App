const billAmount = document.querySelector(".bill-amount");
console.log(billAmount);
const cashGiven = document.querySelector(".cash-given");
console.log(cashGiven);
const returnChange = document.querySelector(".return-change");
console.log(returnChange);
const submitBtn = document.querySelector(".submit-btn");
var noteArr = []

function minNotesFinder(changeValue)
{
    console.log("yes");
}


function compareValue(cash,bill)
{ 
    var change ="";
     var changeValue = cash-bill; 
    console.log(typeof bill,typeof cash,typeof changeValue);
    if(bill&&cash)
    {
       if(cash>bill)
       {
            change = "Return Cash : "+changeValue;
            minNotesFinder(changeValue);

       }
       else if(cash===bill)
       {
           change = "paid exact amount nothing to return😀";
       }
       else{
        
           change = "more cash required "+(-changeValue);
       }
    }
    else
    {
       
 change = "please enter some valid bill Amount and cash amount!"
    }
    returnChange.innerText = change;
}


function eventHandler()
{
   var bill=billAmount.value;
   var cash=cashGiven.value;
   compareValue(cash,bill);
}


submitBtn.addEventListener('click',eventHandler);