/* function ladybugs(arr) {
    let fieldSize = arr.shift();
    let indexes = arr.shift().split(' ');
    let ladybugArray = [];

    for (let i = 0; i < fieldSize; i ++) {
        ladybugArray.push(indexes.includes(`${i}`) ? 1 : 0);
    }

    for (let j = 0; j < arr.length; j ++) {
        let [ladybugIndex, direction, flyLength] = arr[j].split(' ');
        ladybugIndex = Number(ladybugIndex);
        flyLength = Number(flyLength);
        let newIndex = ladybugIndex;

        if (ladybugIndex < 0 || ladybugIndex >= ladybugArray.length || ladybugArray[newIndex] == 0) continue;

        ladybugArray[ladybugIndex] = 0;

        do {

            if (direction == 'right') {
                newIndex += flyLength;
            }
            else {
                newIndex -= flyLength;
            }

            if (newIndex < 0 || newIndex >= fieldSize) break;

            if (ladybugIndex[newIndex] == 0) {
                ladybugIndex[newIndex] == 1;
            }
        }
        while (true)

    }

    console.log(ladybugArray);
    
    

}
ladybugs([ 3, '0 1','0 right 1','2 right 1' ]); */