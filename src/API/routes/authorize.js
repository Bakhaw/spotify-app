export function authorize() {
  // ! Change this into a real token check and remove the token only when expired
  localStorage.removeItem('SPOTIFY_HASH');

  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  window.location.hash = '';

  if (hash.access_token) {
    localStorage.setItem('SPOTIFY_HASH', hash.access_token);
  }

  return hash;
}
