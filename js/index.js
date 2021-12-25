let firstName = prompt("Salom ismingizni kiriting")
let userNumber = prompt("Siz 5 dan katta son kiriting men shuni random qilamn")
let counter = 0;
let maxTries = 5;

if (userNumber >= 5) {
    let randomNumber = Math.floor(Math.random() * userNumber + 1);


    while (attempts != randomNumber) {

        var attempts = prompt(`${firstName} siz 1 dan ${userNumber} bo'lgan sonlarni kiriting`);

        counter += 1;

        if (counter > maxTries) {
            alert(`${firstName} siz yutqazdingiz F5  bosib qayta urinib ko'ring`);
            break
        }

        if (attempts > randomNumber) {
            alert(`${firstName} Siz kirtgan soningiz katta`)
        }

        if (attempts < randomNumber) {
            alert(`${firstName} Siz kiritgan soningiz kichik`)
        }

        if (attempts == randomNumber) {
            alert(`${firstName} men o'ylagan sonni ${counter} ta urinishda topdingiz`)
        }
    }
}

else {
    alert(`${firstName} siz 5 katta son kirtmadingiz`)
}






