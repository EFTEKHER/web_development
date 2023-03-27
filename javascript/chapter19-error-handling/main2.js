const makeERROR=()=>{
    let i=1;
    while(i<=5)
    {
        try{
            if(i%2!==0)
            {
                throw new Error("odd number!");
            }

        }
        catch(err)
        {
            console.error(err.stack);
        }

        finally{
            console.log("...Finally..");
            i++;
        }
    }
};
makeERROR();