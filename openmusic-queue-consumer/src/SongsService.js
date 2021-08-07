const { Pool } = require('pg');

class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongs(playlistId) {
    const query = {
      text: `SELECT songs.* FROM songs JOIN playlistsongs ON songs.id = playlistsongs.song_id JOIN playlists ON playlistsongs.playlist_id = playlists.id WHERE playlists.id = $1`,
      values: [playlistId]
    }

    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = SongsService;