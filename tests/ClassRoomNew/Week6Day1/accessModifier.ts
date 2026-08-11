//accessModifiers.ts

class Calculation{
    
    public add(a:number,b:number){

         console.log("this is add public method");
         console.log("Addition:", a + b);
         return a + b;
        
    }

    private sub(c:number,d:number){

        console.log("this is sub private method");
        console.log("Subtraction:", c-d);
        return c - d;
    }

    protected mul(e:number,f:number)
    {

        console.log("this is mul Protected method");
         console.log("Multiplication:", e * f );
        return e * f;
    }

    //method-By default it is public AccessModifier
   printDetails(){

       console.log(`Calculated values are: ${this.add(2,4)}, ${this.sub(2,4)}, ${this.mul(5,6)}`)
        
    }
    public readdata ()
    {
    this.sub(2,4)
    this.mul(2,5)
    }
}

 
const calc = new Calculation();
calc.add(2,4);
calc.readdata()
calc.printDetails();


