let customerIsBanned=false;
let soup="chicken noodle soup";

let crackers=true;
let reply;

if(customerIsBanned)
{
    reply='No soup for you ';
}
else if(soup && crackers)
{
    reply=`Here's your order of ${soup} & crackers .`;
}
else if(soup)
{
    reply=`Here's your order of ${soup}`;
}
else{
    reply="we don't have soup ";
}
console.log(reply);
