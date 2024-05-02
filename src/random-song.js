export default async function randomSong() {
    const albums = await import('../data/albums.js');
    const songs = albums.default.reduce((acc, cur) => {
        return [...acc, ...cur.songs];
    }, []);

    return songs[Math.floor(Math.random() * songs.length)];
}
export async function randomNebyoolaeSong() {
  const response = await fetch(
    "https://music.nebyoolae.com/jsonapi/views/random_song/guess_neb"
  );
  const song = await response.json();

  return song.data[0].title;
}
