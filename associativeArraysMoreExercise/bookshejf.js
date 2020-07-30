function solve(input) {

    let shelves = [];

    for (let line of input) {
        
        line = line.split(' ');

        if (line.includes('->')) {

            let id = Number(line.shift());

            let genre = line.pop();

            let searchedId = shelves.find(obj => obj.id == id);

            if (searchedId) continue;
            
            shelves.push({
                genre: genre,
                id: id,
                booksNumber: 0,
                books: []
            })
        }
        else {

            line = line.join(' ').split(': ');

            let title = line.shift();

            let [author, genre] = line[0].split(', ');

            let searchedBookGenre = shelves.find(obj => obj.genre == genre);

            if (!searchedBookGenre) continue;

            searchedBookGenre.books.push({
                title: title,
                author: author
            })

            searchedBookGenre.booksNumber ++;
        }
    }

    shelves.sort((a, b) => b.booksNumber - a.booksNumber);

    for (let shelf of shelves) {
        
        console.log(`${shelf.id} ${shelf.genre}: ${shelf.booksNumber}`);

        shelf.books.sort((a, b) => a.title.localeCompare(b.title));

        for (let book of shelf.books) {
            
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}

solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi', 
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);

let example = [
    {
        genre: 'sci-fi',
        id: 3,
        booksNumber: 3,
        books: [
            {
                title: 'zemq',
                author: 'Dario'
            }
        ]
    }
]