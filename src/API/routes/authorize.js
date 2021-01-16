function getHashFromURL() {
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

  return hash;
}

export function getAccessToken() {
  const hash = getHashFromURL();
  return hash.access_token;
}
