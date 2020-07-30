function solve(text) {

    let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = text[0].match(patern);

    console.log(result.join(' '));
}

solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Dario Tsvetanov, Martin Tsvetanov, Ivan ddd, Ivan\tIvanov'
  ])