function bookshelf(arr) {
 
    let library = arr.shift().split('&');
 
    while(true) {
 
        let curr = arr.shift();
 
        if (!curr || curr == 'Done') break;
 
        let [command, book1, book2] = curr.split(' | ');
       
        if (command == 'Add Book') {
 
            if (library.includes(book1)) continue;
 
            library.unshift(book1);
        }
        else if (command == 'Take Book') {
 
            if (!library.includes(book1)) continue;
 
            let index = library.indexOf(book1);
            library.splice(index, 1);
        }
        else if (command == 'Swap Books') {
 
            if (library.includes(book1) && library.includes(book2)) {
 
                let index1 = library.indexOf(book1);
                let index2 = library.indexOf(book2);
 
                library.splice(index1, 1, book2);
                library.splice(index2, 1, book1);
            }
        }
        else if (command == 'Insert Book') {
 
           
 
            library.push(book1);
        }
        else if (command == 'Check Book') {
 
            index = Number(book1);
 
            if (index < 0 || index >= library.length) continue;
 
            console.log(library[index]);
           
        }
    }
 
    console.log(library.join(', '));
}
bookshelf(['ivan&ivo', 'Swap Books | ivan | ivo'])