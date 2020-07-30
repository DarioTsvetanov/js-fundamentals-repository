/* function chess(number) {

    let odd = '<span class="black"></span>';
    let even = '<span class="white"></span>';

    console.log('<div class="chessboard">');
    
    for (let i = 1; i <= number; i ++) {

        console.log('\t<div>');
        
        for (let j = 1; j <= number; j ++) {

            if (i % 2 !== 0) {
                
                if (j % 2 !== 0) {
                    console.log(`\t\t${odd}`);
                    
                }
                else {
                    console.log(`\t\t${even}`);
                    
                }
            }
            else {
                if (j % 2 !== 0) {
                    console.log(`\t\t${even}`);
                    
                }
                else {
                    console.log(`\t\t${odd}`);
                    
                }
            }

        }
        console.log('\t</div>');
    }

    console.log('</div>');
}
chess(3); */