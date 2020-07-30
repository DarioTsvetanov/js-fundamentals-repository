/* function validatePassword(text) {

    let lengthCheck = (str) => {

        if (str.length < 6 || str.length > 10) return false;
        else return true;
    }
    
    let digitsLettersOnly = (str) => {

        for (let i = 0; i < str.length; i ++) {

            let element = str[i];
            let elementAscii = element.charCodeAt(0);
            let numCheck = Number(element) >= 0 && Number(element) <= 9;
            let lowCapCheck = elementAscii > 96 && elementAscii < 123;
            let capCaseCheck = elementAscii > 64 && elementAscii < 91;

            if (!numCheck || !lowCapCheck || !capCaseCheck) return false;
        }

        return true;
    }

    let digitNumber = (str) => {

        let counter = 0;

        for (let i = 0; i < str.length; i ++) {

            let element = str[i];
            let numCheck = Number(element) >= 0 && Number(element) <= 9;
            
            if (numCheck) counter ++;
        }

        if (counter < 2) return false;
        else return true;
    }

    if (lengthCheckVal && digitsLettersVal && digitNumberVal) console.log('Password is valid');

    let lengthCheckVal = lengthCheck(text);
    if (!lengthCheckVal) console.log('Password must be between 6 and 10 characters');

    let digitsLettersVal = digitsLettersOnly(text);
    if (!digitsLettersVal) console.log('Password must consist only of letters and digits');

    let digitNumberVal = digitNumber(text);
    if (!digitNumberVal) console.log('Password must have at least 2 digits');
    
    
}
validatePassword('Pa$s$s'); */