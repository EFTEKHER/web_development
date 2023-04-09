const makeError=()=>{
    try{
        // const name="Dave";
        // name="Joe";
        // throw new customError("This is a custom Error");

        throw new Error("This is a custom Error");
    }
    catch(err)
    {
        // console.log(err);
        console.error(err.stack);
        console.error(err.name);
        console.error(err.stack);
        // logTheError(err.stack)
    }
}
makeError();


function customError(message)
{
    this.message=message;
    this.name="customError";
    this.stack=`${this.name}: ${this.message}`;
}