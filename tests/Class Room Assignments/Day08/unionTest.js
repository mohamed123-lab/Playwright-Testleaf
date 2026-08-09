"use strict";
// =================================================
//                     CLASSROOM ACTIVITY: UNION TYPE
// ==================================================
Object.defineProperty(exports, "__esModule", { value: true });
function makePayment(PaymentMethod) {
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
console.log("Payment method chosen:" + "UPI");
makePayment("UPI");
console.log("Payment method chosen:" + "CreditCard");
makePayment("CreditCard");
console.log("Payment method chosen:" + "PayPal");
makePayment("PayPal");
console.log("Payment method chosen:" + "Mastercard");
makePayment("Mastercard");
