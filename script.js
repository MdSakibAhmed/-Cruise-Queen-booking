
// Display ticket quantity
function displayQuantity(id, isIncrease) {
    let newCount;
    const inputElement = document.getElementById(id);
    const inputNumber = parseInt(inputElement.value);
    if (isIncrease) {
        newCount = inputNumber + 1;
    } else {
        newCount = inputNumber - 1;
    }
    inputElement.value = newCount;
}

// get subtotal and display
function getSubtotal() {

    const subTotalElement = document.getElementById("subtotal");
    const firstClassQuantity = parseInt(document.getElementById("first-class-quantity").value);
    const economyClassQuantity = parseInt(document.getElementById("economy-quantity").value);
    const subtotal = firstClassQuantity * 150 + economyClassQuantity * 100;
    subTotalElement.innerText = subtotal;

    return subtotal;
}

// Get tax amount and display
function getTax(subtotal) {
    const taxElement = document.getElementById("tax");
    const tax = subtotal * 0.1;
    taxElement.innerText = tax;
    return tax;
}

// Display grand total 
function displayGrandTotal(subtotal, tax) {
    const grandTotalElement = document.getElementById("grand-total");
    const grandTotal = subtotal + tax;
    grandTotalElement.innerText = grandTotal;
}

// Display ticket quantity subtotal tax and grand total
function displayQuantityTotal(id,isIncrease){
    const inputQuantity = document.getElementById((id))
    if ( isIncrease == true || inputQuantity.value > 0) {

         displayQuantity(id, isIncrease);
        const subTotal = getSubtotal();
        const tax = getTax(subTotal)
        displayGrandTotal(subTotal, tax);
    }
}

// Get all click Event listener 
function getAllEvent(clickid,quantityid,isIncreas){
    document.getElementById(clickid).addEventListener("click", function () {

        displayQuantityTotal(quantityid,isIncreas) 
   }) 
}


// Display first-class-ticket and total  on click 

// Increase ticket quantity with subtotal,tax and grand total
getAllEvent("increase-first-class","first-class-quantity",true)

// Disincrease ticket quantity with subtotal, tax and grand total 
getAllEvent("disincrease-first-class","first-class-quantity",false)


//  Display economy class ticket and total onl click

// Increase ticket quantity with subtotal,tax and grand total
getAllEvent("increase-economy","economy-quantity",true)

// Disincrease ticket quantity with subtotal, tax and grand total 
getAllEvent("disincrease-economy","economy-quantity",false)


// Display booking summury
function displayBookingSummury(summuryid,mainid){
    if(mainid == "grand-total"){
        document.getElementById(summuryid).innerText = document.getElementById(mainid).innerText;
    }
    else{
        document.getElementById(summuryid).innerText = document.getElementById(mainid).value;
    }   
}


// Display successful massage on click book now button
document.getElementById("book-now").addEventListener("click",function(){
    // Display booking successful massage block
    document.querySelector(".booking-compleate-massage").style.display ="block";

    // display From location
    displayBookingSummury("from-location","flaying-from")

    // display To location
    displayBookingSummury("to-location","flaying-to")

    // Display departure date
    displayBookingSummury("departure-summury","departure-date")

    // Display return date
    displayBookingSummury("return-summury","return-date")

    // Display first class ticket quantity 
    displayBookingSummury("first-class-summury","first-class-quantity")

    // Display economy class ticket quantity  
    displayBookingSummury("economy-class-summury","economy-quantity")

    // Display grand total amount 
    displayBookingSummury("total-summury","grand-total")  
})