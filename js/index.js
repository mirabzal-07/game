let firstName = prompt("Salom ismingizni yozing");

let compyuterSum = Math.floor(Math.random() * 10 + 1);

var guess = 1;

document.getElementById("submitguess").onclick = function () {

    let peopleSum = document.getElementById("guessField").value;

    if (firstName == '') {
        firstName = 'JEK'
    }

    if (peopleSum == compyuterSum) {
        alert(`${firstName} sizni tabriklayman topdingiz`);
    }
    else if (peopleSum > compyuterSum) {
        guess++;
        alert(`${firstName} siz kiritgan raqamingiz katta edi afsus \n Men o'ylagan son ${compyuterSum} edi`);
    }
    else if (peopleSum < compyuterSum) {
        guess++;
        alert(`${firstName} siz kiritgan raqamingiz kichika edi afsus \n Men o'ylagan son ${compyuterSum} edi`);
    }
    else {
        alert(`${firstName} Xandaydir xatolik bor`)
    }
}

