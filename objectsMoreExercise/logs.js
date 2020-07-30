function logs(object, array) {

    for (let command of array) {
        
        let [action, tab] = command.split(' ');

        if (action == 'Close') {

            if (!object['Open Tabs'].includes(tab)) continue;

            let index = object['Open Tabs'].indexOf(tab);
            object['Open Tabs'].splice(index, 1);
            object['Recently Closed'].push(tab);
            object['Browser Logs'].push(`${action} ${tab}`)
        }
        else if (action == 'Open') {

            if (object['Open Tabs'].includes(tab)) continue;

            object['Open Tabs'].push(tab);
            object['Browser Logs'].push(`${action} ${tab}`);
        }
        else if (action == 'Clear') {

            object['Open Tabs'] = [];
            object['Recently Closed'] = [];
            object['Browser Logs'] = [];
        }
    }
    
    for (let key in object) {
        
        if (key == 'Browser Name') {
            
            console.log(object[key])
            continue;
        };
        
        console.log(`${key}: ${object[key].join(', ')}`);
    }
}
logs(
    {"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)