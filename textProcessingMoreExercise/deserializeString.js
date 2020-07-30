function solve(input) {

    let text = [];

    while (true) {

        let line = input.shift();

        if (line == 'end') break;
        
        line = line.split(':');
        let ch = line[0];
        let indexes = line[1].split('/');

        for (let index of indexes) {
            
            text[index] = ch;
        }
    }

    console.log(text.join(''));
}

solve([
    'a:0/3/5/11', 'v:1/4',
    'j:2',        'm:6/9/15',
    's:7/13',     'd:8/14',
    'c:10',       'l:12',
    'end'
  ])