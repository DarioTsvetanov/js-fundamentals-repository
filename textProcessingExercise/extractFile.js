function solve(path) {

    let backslashpSlitted = path.split("\\");

    let dotSplitted = backslashpSlitted[backslashpSlitted.length - 1].split('.');

    let extention = dotSplitted.pop();

    console.log(`File name: ${dotSplitted.join('.')}`);
    console.log(`File extension: ${extention}`);
}
solve("C:\\Internal\\training-internal\\Template.bak.pptx");