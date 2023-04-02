export function getHashFromURL(windowHash: string) {
  const hash = windowHash
    .substring(1)
    .split('&')
    .reduce((initial: any, item) => {
      if (item) {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }

      return initial;
    }, {});

  return hash;
}

export function getAccessTokenFromURL(windowHash: string) {
  const hash = getHashFromURL(windowHash);
  return hash.access_token;
}

export function getRefreshTokenFromURL(windowHash: string) {
  const hash = getHashFromURL(windowHash);
  return hash.refresh_token;
}

// https://stackoverflow.com/a/21294619
export function millisToMinutesAndSeconds(millis: number) {
  var minutes = Math.floor(millis / 60000);
  var seconds = Number(((millis % 60000) / 1000).toFixed(0));
  return seconds == 60
    ? minutes + 1 + ':00'
    : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
