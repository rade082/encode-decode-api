const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

const decodeingText = (str) =>{
    str = str.split("").reverse().join("");
    len = str.length;
    let resp = {str,len};
    return resp;
}


router.post('/',urlencodedParser,(req,res)=>{
    const {'decstr':str} = req.body;
    let decodedRespo = decodeingText(str);
    res.send({decodedRespo});
})


module.exports = router;