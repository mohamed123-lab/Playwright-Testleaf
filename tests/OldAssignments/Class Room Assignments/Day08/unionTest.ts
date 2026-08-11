// =================================================
//                     CLASSROOM ACTIVITY: UNION TYPE
// ==================================================

import { log } from "node:console";

// ACTIVITY DESCRIPTION:
// --------------------------------------------------------------------------------
// - Create a function that accepts only specific payment methods.
// - Create a type alias called PaymentMethod that allows only "UPI", "CreditCard",
//   or "PayPal".
// - Write a function makePayment that takes a parameter of type PaymentMethod and
//   prints which payment method is chosen.
// - Call the function with "UPI" and "CreditCard" as arguments.


// OUTPUT:
// --------------------------------------------------------------------------------
// Payment method chosen: UPI
// Payment method chosen: CreditCard
// ================================================

type unionType ="UPI"|"CreditCard"|"PayPal"
function makePayment(PaymentMethod:unionType){
    switch (PaymentMethod) {
        case "UPI":
            console.log("UPI Payment is accepted");
            break;
         case "CreditCard":
            console.log("CreditCard Payment is accepted");
            break;
          case "PayPal":
            console.log("PayPal Payment is accepted");
            break;
          
        default:
            console.log("The Given Payment method is not acceped");
            break;
    }
}

console.log('Payment method chosen: UPI');
makePayment("UPI")

console.log("Payment method chosen: " + "CreditCard");
makePayment("CreditCard")

console.log("Payment method chosen: " + "PayPal");
makePayment("PayPal")

console.log("Payment method chosen: " + "Mastercard");
makePayment("Mastercard")