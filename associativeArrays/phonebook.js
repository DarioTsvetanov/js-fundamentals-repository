/* function phonebook(arr) {

    let obj = {};

    for (let person of arr) {
        
        let [name, number] = person.split(' ');

        obj[name] = number;
    }

    for (let key in obj) {
        
        console.log(`${key} -> ${obj[key]}`);
    }
}
phonebook([
'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
) */