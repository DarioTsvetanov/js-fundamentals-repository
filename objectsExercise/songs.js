/* function songs(arr) {

    let songsNumber = arr.shift();

    class Song {

        constructor(typeList, name, time) {

            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];

    for (let i = 0; i < songsNumber; i ++) {

        let [typeList, name, time] = arr[i].split('_');

        let currentSong = new Song(typeList, name, time); 
        songs.push(currentSong);
    }
    
    let wantedList = arr[arr.length - 1];

    for (let song of songs) {
        
        if (song.typeList == wantedList || wantedList == 'all') {

            console.log(song.name);
        }
    }
}
songs([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']) */