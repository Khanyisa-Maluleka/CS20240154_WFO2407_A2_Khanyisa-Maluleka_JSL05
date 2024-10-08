// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "High On Life", artist: "Martin Garrix feat. Bonn", genre: "House" },
    { title: "I Forgive You", artist: "Sia", genre: "Pop" },
    { title: "No Sleep", artist: "Martin Garrix feat. Bonn", genre: "House" }
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "House",
    "Rocket": "R&B",
    "Groot": "House"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const galaxyPlaylist = document.getElementById('playlists');

    for (let guardian in guardians) {
        const preferredGenre = guardians[guardian];
        const filteredSongs = songs.filter(song => song.genre === preferredGenre);
        
        const playlistHTML = `
            <div class="playlist">
                <h3>${guardian}'s Playlist</h3>
                ${filteredSongs.map(song => `
                    <div class="song">
                        <span class="song-title">${song.title}</span> by ${song.artist}
                    </div>
                `).join('')}
            </div>
        `;
        
        galaxyPlaylist.innerHTML += playlistHTML;
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);




