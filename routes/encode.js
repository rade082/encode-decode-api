const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

const encodingText = (str)=> {
    let a = 'a';
    let zero = '0';
    let st = '';
    let flag = false;
    let temp = 0;
    for(let i=0;i<str.length;i++){
        if (flag==false){
            temp = str.charCodeAt(i) - a.charCodeAt(0)+10;
            flag = true;
        }else{
            temp = str.charCodeAt(i) - a.charCodeAt(0)+1;
        }
        // console.log(temp);
        if((temp.toString().length)!=2){
            temp = zero.concat(temp.toString());
        }else{
            temp = temp.toString();
        }
        // console.log(temp);
        st+= temp;
    }
    let val = parseInt(st);
    let resp = '';
    let n = 121;
    while(val !=0){
        let rem = (val % n);
        val = Math.floor(val/n);
        if (rem>118){
            resp += String.fromCharCode(rem+129);
        }else if(rem>85){
            resp += String.fromCharCode(rem+130);
        }else if(rem>61){
            resp += String.fromCharCode(rem+130);
        }else if(rem>35){
            resp += String.fromCharCode(rem+30);
        }else if(rem>9){
            resp += String.fromCharCode(rem+87);
        }
        else{
            resp += rem.toString();
        }
    }

    resp = resp.split("").reverse().join("");
    let len = resp.length
    let respo = {resp,len}
    return respo;
}

router.post('/',urlencodedParser,(req,res)=>{
    const {'encstr':s} = req.body;
    if(!s){
        res.status(422).send({error: "Please enter data!!"})
    }
    try {
        let encodedRespo = encodingText(s);
        res.status(200).send({encodedRespo});
    } catch(error){
        console.log(error.message);
    }
})

module.exports = router;