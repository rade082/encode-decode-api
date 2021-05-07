const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

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
        if (rem>115){
            resp += String.fromCharCode(rem+128);
        }else if(rem>84){
            resp += String.fromCharCode(rem+129);
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
const urlencodedParser = bodyParser.urlencoded({extended: false});
router.post('/',urlencodedParser,(req,res)=>{
    const {'encstr':s} = req.body;
    let encodedRespo = encodingText(s);
    res.send({encodedRespo});
})

module.exports = router;