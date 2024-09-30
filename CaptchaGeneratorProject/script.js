var code;

function create() {
    
    document.getElementById("captcha").innerHTML = "";

    let key = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+|}{";
    let length = 6;
    let captcha = [];

    
    for (let i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * key.length);
        if (captcha.indexOf(key[index]) === -1) {
            captcha.push(key[index]);
        } else {
            i--; 
        }
    }

    
    let canvas = document.createElement("canvas");
    canvas.id = 'captcha';
    canvas.width = 150;
    canvas.height = 50;
    let ctx = canvas.getContext("2d");
    
   
    ctx.font = "25px Arial"; 
    ctx.strokeText(captcha.join(""), 30, 30); 

    code = captcha.join(""); 
    document.getElementById("captcha").appendChild(canvas);
}

function validate(event) {
    event.preventDefault(); 
    let input = document.getElementById("captchaTextBox").value;

    if (input === code) {
        alert("Valid");
    } else {
        alert("Invalid");
        create(); 
    }
}
