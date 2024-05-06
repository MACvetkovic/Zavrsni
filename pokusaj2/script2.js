const buttons = document.querySelectorAll('.gumb')
const textarea = document.querySelector('textarea')
const gumb3 = document.getElementById('gore3')
var a='';
let abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let rabc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let r1a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let r2a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let r3a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let rotor1="EKMFLGDQVZNTOWYHXUSPAIBRCJ";
let rotor2="AJDKSIRUXBLHWTMCQGZNPYFVOE";
let rotor3="BDFHJLCPRTXVZNYEIWGAKMUSQO";
let reflector="YRUHQSLDPXNGOKMIEBFZCWVJAT";
function gore3(gore3){
    for(i=0;i<1;i++){
    r3a=r3a.slice(1)+r3a[0];
    rotor3=rotor3.slice(1)+rotor3[0];
    }
}
buttons.forEach(gumb => {
    gumb.addEventListener('click', () => {
        gore3();
        for(let i=0; i<1;i++){
            r3a=r3a.slice(1)+r3a[0];
            rotor3=rotor3.slice(1)+rotor3[0];
            if(r3a[0]=="W"|| (r3a[0]=="X" && r2a[0]=="E"))
            {
                r2a=r2a.slice(1)+r2a[0];
                rotor2=rotor2.slice(1)+rotor2[0];

                if(r2a[0]=="F")
                {
                    r1a=r1a.slice(1)+r1a[0];
                    rotor1=rotor1.slice(1)+rotor1[0];
                }
            }
        }
        let b=abc.indexOf(gumb.innerText)
        var c=rotor3.charAt(b)
        b=r3a.indexOf(c)
        c=rotor2.charAt(b)
        b=r2a.indexOf(c)
        c=rotor1.charAt(b)
        b=r1a.indexOf(c)
        c=reflector.charAt(b)
        b=rabc.indexOf(c)
        c=r1a.charAt(b)
        b=rotor1.indexOf(c)
        c=r2a.charAt(b)
        b=rotor2.indexOf(c)
        c=r3a.charAt(b)
        b=rotor3.indexOf(c)
        c=abc.charAt(b)
        textarea.value += (c)
        var r3 = document.getElementById("rotor3");
        r3.innerHTML = r3a[0];
        var r2 = document.getElementById("rotor2");
        r2.innerHTML = r2a[0];
        var r1 = document.getElementById("rotor1");
        r1.innerHTML = r1a[0];
    })
})