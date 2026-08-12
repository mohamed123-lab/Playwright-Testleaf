// =================================================
//              UNION TYPE - PAYMENT METHOD
// =================================================
//
// Union type (|) allows a variable or parameter
// to accept ONLY the specified types/values.
//
// Here, PaymentMethod can be:
// "UPI" | "CreditCard" | "PayPal"
//
// Therefore, any other payment method such as
// "Mastercard" will cause a TypeScript error.
// =================================================


// Create a type alias using a union type.
// The variable can contain ONLY one of these values.
type PaymentMethod = "UPI" | "CreditCard" | "PayPal";


// Function accepts only the PaymentMethod type.
// Therefore, only UPI, CreditCard, or PayPal
// can be passed as an argument.
function makePayment(paymentMethod: PaymentMethod) {

    // Check which payment method was provided.
    switch (paymentMethod) {

        case "UPI":
            console.log("UPI Payment is accepted");
            break;

        case "CreditCard":
            console.log("CreditCard Payment is accepted");
            break;

        case "PayPal":
            console.log("PayPal Payment is accepted");
            break;

        // TypeScript knows that the allowed values
        // are already limited by the union type.
        default:
            console.log("The given payment method is not accepted");
            break;
    }
}


// Pass an allowed value from the union type
console.log("Payment method chosen: UPI");
makePayment("UPI");


// Pass another allowed value
console.log("Payment method chosen: CreditCard");
makePayment("CreditCard");


// Pass another allowed value
console.log("Payment method chosen: PayPal");
makePayment("PayPal");


// ❌ TypeScript error:
// "Mastercard" is NOT part of PaymentMethod.
//
// makePayment("Mastercard");
//
// To allow Mastercard, it must first be added to the union:
//
// type PaymentMethod = "UPI" | "CreditCard" | "PayPal" | "Mastercard";