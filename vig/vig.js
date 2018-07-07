
var readline = require('readline-sync');

function myFunction() {
    var msg = readline.question("Enter a message to encrypt  ");
    var key0 = readline.question("Enter  key string  ");
    var encMsg = "";

    if (typeof key0 === 'string'){
        for(var i = 0,j = 0; i < msg.length; i++)
        {

            var len = key0.length;
            if (j == len){
                key0 = key0+key0;
            }
            var code = msg.charCodeAt(i);
            var key = key0.charCodeAt(j);
            if ((code >= 65 && code <= 90) && (key >=97 && key <=122))
            {
                code -= 65;
                key -= 97;
                code = (code + key)% 26;
                code += 65;
                key += 97;
                j++;
            
            }
            else if ((code >= 65 && code <= 90) && (key >=65 && key <=90)){
                code -= 65;
                key -= 65;
                code = (code + key)%26;
                code += 65;
                key += 65;
                j++;
            }
            else if ((code >= 97 && code <= 122) && (key >=97 && key <=122)){
                code -= 97;
                key -= 97;
                code = (code + key)%26;
                code += 97;
                key += 97;
                j++;
            }
            else if ((code >= 97 && code <= 122) && (code >=65 && code <=90)){
                code -= 97;
                key -= 65;
                code = (code + key)%26;
                code += 97;
                key += 65;
                j++;
            }
            encMsg += String.fromCharCode(code);
        
        }
        console.log(encMsg);
    }
    else{
        console.log("Error");
    }
}

myFunction();