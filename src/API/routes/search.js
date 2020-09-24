import axios from 'axios';

export async function search(token, query, type) {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=${type}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const { data } = await axios.get(url, config);

  const result = data.artists.items.map((item) => {
    const {
      external_urls,
      followers,
      genres,
      href,
      id,
      images,
      name,
      popularity,
      type,
      uri,
    } = item;

    return {
      externalUrl: external_urls.spotify,
      followers: followers.total,
      genres,
      href,
      id,
      image: images.length ? images[0].url : null,
      name,
      popularity,
      type,
      uri,
    };
  });

  console.log('hihihi', result);
}
