let iife = () => {  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve (456);
    }, 4000)
})} ;
 (async () =>{
    let b = await iife();
    console.log(b);
    
    let c= await iife();
    console.log(c);
}) ();

