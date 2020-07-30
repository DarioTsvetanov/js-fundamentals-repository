/* function pyramid(base, increment) {
    let layerPieces = 0;
    let counter = 0;

    let currentMarble = 0;
    let marble = 0;

    let stone = 0;
    
    let lapis = 0;
    let currentLapis = 0;

    let gold = 0;

    for (let i = base; i > 0; i -= 2) {
        counter ++;

        layerPieces = i * i * increment;

        if (base % 2 == 0) {
            if (i == 2) {
                gold += layerPieces;
                break;
            }
        }
        else {
            if (i == 1) {
                gold += i;
                break;
            }
        }

        if (counter % 5 == 0) {
            currentLapis = ((i * 4) - 4) * increment
            stone = stone + (layerPieces - currentLapis);
            lapis += currentLapis;
        }
        else {
            currentMarble = ((i * 4) - 4) * increment;
            stone = stone + (layerPieces - currentMarble);  
            marble += currentMarble;
        }

    }
    
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
    
}   
pyramid(12, 1);*/ 