export class TestClass 
{
    //######################### constructor #########################

    constructor()
    {}

    //######################### public methods #########################

    /**
     * Sum of two numbers
     * @param a number one
     * @param b number two
     */
    public sum(a: number, b: number) 
    {
        if (true) 
        {
            a++;
        }
        
        if (a > b) 
        {
            b++;
        }
        return a + b;
    }
}