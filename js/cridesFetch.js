/**
*  Funcio: carregarFetch - el que fa la funcio es carregar en tipus fetch com a spotify els atributs json.
*
* @param endpoint - la ruta final.
* @param artists - el token del artista
*
**/
const endpoint = "https://api.spotify.com/v1/recommendations";
const artists = '6sFIWsNpZYqfjUpaCgueju';
const danceability = encodeURIComponent('0.9');

function carregarFetch() {
  fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userAccessToken}`
    }
  })
      .then(response => response.json())
      .then(({tracks}) => {
        tracks.forEach(item => {
          console.log(`${item.name} by ${item.artists[0].name}`);
        })
      })
}
