/* function charactersRange(str1, str2) {

    let firstNumConvert = () => {
        return str1.charCodeAt(0);
    };

    let secondNumConvert = () => {
        return str2.charCodeAt(0);;
    };
    
    let firstNum = firstNumConvert();
    let secondNum = secondNumConvert();
    
    let result = '';


    if (firstNum > secondNum) {

        for (let i = secondNum + 1; i < firstNum; i ++) {
            result += `${String.fromCharCode(i)} `
        }
    }
    else {
        for (let i = firstNum + 1; i < secondNum; i ++) {
            result += `${String.fromCharCode(i)} `
        }
    }
    

    console.log(result);
    
}
charactersRange('#', ':' ); */