function scoringBonus(arr) {

    arr = arr.map(Number);
    let studentsNumber = arr.shift();
    let lecturesNumber = arr.shift();
    let bonus = arr.shift();

    let bonusArr = [];
    
     for (let i = 0; i < arr.length; i ++) {
        
        let currBonus = (arr[i] / lecturesNumber) * (5 + bonus);
        bonusArr.push(currBonus);
    }
    
    let biggestNumber = bonusArr[0];
    let place = 0;

    for (let i = 1; i < bonusArr.length; i ++) {

        if (bonusArr[i] > biggestNumber) {

            biggestNumber = bonusArr[i];
            place = i;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(biggestNumber)}.`);
    console.log(`The student has attended ${arr[place]} lectures.`);
}
scoringBonus([
'10',
'30',
'14'
])
