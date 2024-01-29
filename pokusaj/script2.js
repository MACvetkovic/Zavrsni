const buttons = document.querySelectorAll('.gumb')
const textarea = document.querySelector('textarea')
var a='';
let abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let abc2="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let rotor1="EKMFLGDQVZNTOWYHXUSPAIBRCJ";
let rotor2="AJDKSIRUXBLHWTMCQGZNPYFVOE";
let rotor3="BDFHJLCPRTXVZNYEIWGAKMUSQO";
let reflector="YRUHQSLDPXNGOKMIEBFZCWVJAT";
buttons.forEach(gumb => {
    gumb.addEventListener('click', () => {
        for(let i=0; i<1;i++){
            abc2=abc2.slice(1)+abc2[0];
            rotor3=rotor3.slice(1)+rotor3[0];
        }
        let b=abc.indexOf(gumb.innerText)
        var c=rotor3.charAt(b)
        b=abc2.indexOf(c)
        c=rotor2.charAt(b)
        b=abc.indexOf(c)
        c=rotor1.charAt(b)
        b=abc.indexOf(c)
        c=reflector.charAt(b)
        b=abc.indexOf(c)
        c=abc.charAt(b)
        b=rotor1.indexOf(c)
        c=abc.charAt(b)
        b=rotor2.indexOf(c)
        c=abc2.charAt(b)
        b=rotor3.indexOf(c)
        c=abc.charAt(b)
        textarea.value += (c)
    })
})