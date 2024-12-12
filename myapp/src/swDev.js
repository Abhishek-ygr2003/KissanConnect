export default function swDev()
{
let swUrl = "/sw.js"
navigator.serviceWorker.register(swUrl).then((response)=>
{
    console.log("Registration Successful", response)
},
(error)=>
{
    console.log("Registration Failed",error)
}
);
}

