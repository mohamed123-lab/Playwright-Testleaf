export interface payment
{
    UPI(amount: number):void
    CreditCard(amount: number):void
    NetBanking(amount: number):void
}