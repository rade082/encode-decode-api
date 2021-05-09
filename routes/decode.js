const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const BigNumber = require('big-number');

const urlencodedParser = bodyParser.urlencoded({extended: false});

const decodeingText = (str) =>{
    let asciiArray = [];
    let strLen = str.length;
    while(strLen--) {
        let stringNumArray = ['1','2','3','4','5','6','7','8','9','0'];
        let eachChar = str.charAt(strLen);
        if(stringNumArray.includes(eachChar)){
             asciiArray.push(parseInt(str.charAt(strLen)));
        }else{
             asciiArray.push(str.charCodeAt(strLen));
        }
    }
    let numArray = [];
    for(var j =0;j<asciiArray.length;j++){
        if (248<=asciiArray[j]){
            numArray.push((asciiArray[j]-248)+119);
        }else if(216<=asciiArray[j]){
           numArray.push((asciiArray[j]-216)+86);
        }else if(192<=asciiArray[j]){
           numArray.push((asciiArray[j]-192)+62);
        }else if(97<=asciiArray[j]){
            numArray.push((asciiArray[j]-97)+10);
        }else if(65<=asciiArray[j]){
          numArray.push((asciiArray[j]-66)+36);
        }else{
            numArray.push(asciiArray[j]);
        }
    }
    let numString = '';
    let rem = 0;
    numLength = numArray.length;
    while(numLength--){
        rem = ((BigNumber(rem).multiply(121)).add(numArray[numLength]));
    }
    let newRem = rem.number.reverse();
    let remLen = newRem.length;
    let newRem2 = [];
    for (var i =0 ;i<remLen-1; i=i+2){
        let k = ((newRem[i]*10)+newRem[i+1])
        newRem2.push(k);
        
    }
    let flag = false;
    let a = 'a';
    let res = '';
    newRem2.forEach((ele)=>{
        if(!flag){
            res += String.fromCharCode((ele-10)+a.charCodeAt(0));
            flag = true ;
        }else{
            res+=String.fromCharCode((ele-1)+a.charCodeAt(0));
        }
    })
    let len = (res.length)
    let resp = {res,len};
    return resp;
}

router.post('/',urlencodedParser,(req,res)=>{
    const {'decstr':str} = req.body;
    let decodedRespo = decodeingText(str);
    res.send({decodedRespo});
})

module.exports = router;