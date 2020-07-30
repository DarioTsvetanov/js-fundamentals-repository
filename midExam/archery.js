function archery(arr) {
 
    let target = arr.shift().split('|').map(Number);
    let points = 0;
 
    while (true) {
 
        let curr = arr.shift();
       
        if (!curr) break;
 
        if (curr == 'Game over') {
 
            console.log(target.join(' - '));
            console.log(`Iskren finished the archery tournament with ${points} points!`);
            return;
        }
 
        let [command, way] = curr.split(' ');
 
        if (command == 'Reverse') {
 
            target.reverse();
            continue;
        }
 
        let [direction, start, length] = way.split('@');
        start = Number(start);
        length = Number(length);
 
        if (start >= target.length || start < 0) continue;
 
        if (direction == 'Left') {
 
            let pointer = start;
 
            if ((start - length) < 0) {
               
                for (let i = 0; i < length; i ++) {
                   
                    pointer --;
 
                    if (pointer < 0) pointer = target.length - 1;
                }
 
                if (target[pointer] < 5) {
                   
                    points += target[pointer];
                    target[pointer] = 0;
                    continue;
                }
               
                target.splice(pointer, 1, target[pointer] - 5);
                points += 5;
            }
            else {
 
                if (target[start - length] < 5) {
                   
                    points += target[start - length];
                    target[start - length] = 0;
                    continue;
                }
 
                target.splice((start - length), 1, target[(start - length)] - 5);
                points += 5;
            }
           
        }
        else if (direction == 'Right'){
           
            if (start + length >= target.length) {
 
                let pointer = start;
 
                for (let i = 0; i < length; i ++) {
 
                    pointer ++;
 
                    if (pointer > target.length - 1) pointer = 0;
                }
               
                if (target[pointer] < 5) {
                   
                    points += target[pointer];
                    target[pointer] = 0;
                    continue;
                }
 
                target.splice(pointer, 1, target[pointer] - 5);
                points += 5;
            }
            else {
 
                if (target[start + length] < 5) {
 
                    points += target[start + length];
                    target[start + length] = 0;
                    continue;
                }
 
                target.splice((start + length), 1, target[start + length] - 5);
                points += 5;
            }
        }
    }
}
archery(['10|10|10|10|10', 'Shoot Left@0@2', 'Shoot Right@4@5', 'Shoot Right@6@5', 'Reverse', 'Game over'])