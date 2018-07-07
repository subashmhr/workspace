function myFunction() {
    var readline = require('readline-sync');

    var msg = readline.question("Enter message  ");
    var key0 =readline.question("Enter a key for ciphering  ");
    key = parseInt(key0);
    var encMsg = "";

    for(var i = 0; i < msg.length; i++)
    {
        var code = msg.charCodeAt(i);

        if (code >= 65 && code <= 90)
        {
            code -= 65;
            code = (code + key)% 26;
            code += 65;
        }
        else if (code >=97 && code <=122){
            code -=97;
            code = (code +key)%26;
            code +=97;
        }

        encMsg += String.fromCharCode(code);
    }

    console.log("The encrypted form is :  ");
    console.log(encMsg);
  
}

myFunction();