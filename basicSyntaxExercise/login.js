/* function login(input) {

    let username = input.shift();
    let password = input.shift();

    let reversedUsername = '';
    let counter = 0;

    for (let i = username.length - 1; i >= 0; i --) {

        reversedUsername += `${username[i]}`;
        
    }

    while (true) {
        counter ++;

        if (counter == 4) {
            console.log(`User ${username} blocked!`);
            
            break;
        }

        
        if (reversedUsername == password) {
            console.log(`User ${username} logged in.`);
            break;
            
        }
        else {
            console.log(`Incorrect password. Try again.`);
        }
        password = input.shift();

    }
    
}
login(['sunny','rainy','cloudy','sunny','not sunny']); */