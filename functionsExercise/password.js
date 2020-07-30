/* function password(str) {

    let lengthFlag = false;
    let digitsLettersFlag = false;
    let twoDigitCheck = false;
    let counter = 0;
    for (let i = 0; i < str.length; i ++) {
        
        let element = str[i];
        let elementAscii = element.charCodeAt(0);
        let numCheck = Number(element) >= 0 && Number(element) <= 9;
        let lowCapCheck = elementAscii > 96 && elementAscii < 123;
        let capCaseCheck = elementAscii > 64 && elementAscii < 91;
        

        if (str.length < 6 || str.length > 10) lengthFlag = true;

        if (!numCheck && !lowCapCheck && !capCaseCheck) {
            digitsLettersFlag = true;
        }
    
        if (numCheck) counter ++;
    }

    if (lengthFlag) console.log('Password must be between 6 and 10 characters');

    if (digitsLettersFlag) console.log('Password must consist only of letters and digits');

    if (counter < 2) {
        console.log('Password must have at least 2 digits');
        twoDigitCheck = true;
    }

    if (!lengthFlag && !digitsLettersFlag && !twoDigitCheck) console.log('Password is valid');
    
}
password('Pa$s$s'); */