# encode-decode-api
Usage of the API:
It can help a user encode &amp; decode string and shorten the length as well after a certain threshold string length.

Service endpoint:
https://dencode-api.herokuapp.com/<process>

About the request :
Process:
The process can be either of the two 
1.encode 
2.decode

Method : POST

Body :
It will be  x-www-form-urlencoded
For encode :
'key':'encstr'
'value':'string to be encoded'
For decode :
'key':'decstr'
'value':'string to be decoded'


About the response :
Type: JSON
Encode sample output :
{
    "encodedRespo": {
        "resp": "9Ïâé[j",
        "len": 6
    }
}

Decode sample output :
{
    "decodedRespo": {
        "res": "pandey",
        "len": 6
    }
}
