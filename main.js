// fetch('https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF').then(response => {
//   console.log(response);
// })

fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });