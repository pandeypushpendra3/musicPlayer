const mongoose = require('mongoose');

const albumArtist = new mongoose.Schema({
    MusicAlbumName:{type: 'string',required: true}, 
    ArtistName:{type: 'string',required: true}, 
    Year:{type: 'number',required: true},
    genre:{type: 'string',required: true},
    songs:[{
        songsname:{type: 'string',required: true},
        duration:{type: 'number',required: true}
    }]
})

module.exports = mongoose.model('Album',albumArtist);