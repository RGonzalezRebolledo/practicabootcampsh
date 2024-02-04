let disco1 = {
    artist: 'david Bisbal',
    album: 'buleria',
    year: 2020
}

console.log(disco1);

let disco2 = {
    artist: 'charlie zaa',
    album: 'anoranzas',
    year: 2000
}

console.log(disco2);

// funcion constructor

function Disco(artist,album,year){
    this.artist = artist;
    this.album = album;
    this.year = year; 
}

let disco3 = new Disco('jorge guerrero', 'sabana', 2010);

console.log (disco3);
