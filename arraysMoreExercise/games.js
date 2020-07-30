/* function games(arr) {
    let current = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i ++) {
        let [command, game] = arr[i].split(' ');
        
        if (command == 'Install') {

            if (current.includes(game) == false) {
                current.push(game);
                
            }
        }
        else if (command == 'Uninstall') {

            if (current.includes(game)) {
                let index = current.indexOf(game);
                current.splice(index, 1);
                
            }
        }
        else if (command == 'Update') {

            if (current.includes(game)) {
                let index = current.indexOf(game);
                current.splice(index, 1);
                current.push(game)
            }
        }
        else if (command == 'Expansion') {
            let [gameName, expansion] = game.split('-');
            
            if (current.includes(gameName)) {
                
                current.splice(current.indexOf(gameName) + 1, 0, `${gameName}:${expansion}`);
            }
        }
    }

    console.log(current.join(' '));
    
}
games(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']); */