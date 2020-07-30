function solve(input) {

    let mailPatt = /(^|(?<=\s))[\w\d]+([\.\-\_]?[\w\d]+)*@[\w]+([-.][\w]+)*/g;
    
    let mails = input[0].match(mailPatt)
    
    if (!mails) return;

    for (let mail of mails) {
        
        console.log(mail);
    }
}

solve(['steve.parker@softuni.de.daa-aa-daaa'])