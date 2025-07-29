function getDati(){
    return new Promise((revolve,reject)=>{
        setTimeout(()=> {
        console.log("ISTRUZIONE 2");
        PROVA="pippo"
        },2000)
    })
}

console.log("ISTRUZIONE 1");
let prova="";


console.log("ISTRUZIONE 3" + prova);