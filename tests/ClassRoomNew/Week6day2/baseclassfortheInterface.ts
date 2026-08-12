import { payment } from "./interface";

class paymentmethod implements payment{
    UPI(amount: number)

    {
        console.log(`Payment ${amount} accpeted via UPI`);
        
    }

    CreditCard(amount: number)

    {
        console.log(`Payment ${amount} accpeted via CreditCard`);
        
    }

    NetBanking(amount: number)

    {
        console.log(`Payment ${amount} accpeted via NetBanking`);
        
    }

}


let br = new paymentmethod()
br.UPI(100)
br.CreditCard(100)
br.NetBanking(100)
