/* function rightPalce(str1, char, str2) {

    let position = str1.split('').indexOf('_');
     
    str1 = str1.replace(str1[position], char);

    if (str1 == str2) {
        console.log('Matched');
        
    }
    else {
        console.log('Not Matched ');
        
    }
}
rightPalce('Str_ng', 'I', 'String');

function rightPalce(str1, char, str2) {

    let position = str1.split('').indexOf('_');

    let letter = str2[position];

    if (letter == char) {
        console.log('Matched');
    }
    else {
        console.log('Not Matched ');
    }
}
rightPalce('Str_ng', 'i', 'String'); */