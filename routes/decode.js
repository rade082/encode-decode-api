const express = require('express');
const router = express.Router();

let str = '3Oaæðò7Ôjô[fàÝÇ2ÓÚÎóÍòôìÜÔæIOØÆÐlÈætØõ÷ÈP×àãXÀäpV[95Îsx'
const decodeingText = (str) =>{
    str = str.split("").reverse().join("");
    len = str.length;
    let resp = {str,len};
    return resp;
}

let decodedRespo = decodeingText(str);

router.get('/',(req,res)=>{
    res.send({decodedRespo})
})
 module.exports = router;