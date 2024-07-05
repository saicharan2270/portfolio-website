function openhome() {
    window.location.href = "index.html";
}

window.onload = function() {
    typewriter();
};

let p = document.getElementById("insertbyjs");
var texts = ["C++ Programmer", "Web Developer", "SQL programmer"];
var textIndex = 0;
var charIndex = 0;
var speed = 110;

function typewriter() {
    if (p && textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
            p.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typewriter, speed);
        } else {
            // Move to the next text or loop back to the first text
            textIndex = (textIndex + 1) % texts.length;
            charIndex = 0;
            // Clear the content of the paragraph before typing the next text
            p.innerHTML = "";
            // Add a delay before typing the next text
            setTimeout(typewriter, 500);
        }
    }
}
// function sendemail()
// {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "mmailsending@gmail.com",
//         Password: "@1@1@1@1",
//         To: 'abhisachdeva711@gmail.com',
//         From: "mmailsending@gmail.com",
//         Subject: "Sending Email using javascript",
//         Body: "Well that was easy!!",
//     })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
// }

function openfourthnav()
{
    let a = document.getElementById("fourth-nav");
    if(a.style.display=="none")
    {
        a.style.display="block";
    }
    else
    {
        a.style.display="none";
    }
}