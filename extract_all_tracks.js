const fs = require('fs');
const path = require('path');

const data = fs.readFileSync('script_14.js', 'utf8').trim();

function findTracks(obj) {
  if (!obj || typeof obj !== 'object') return null;
  
  // Check if this object is an array of tracks or contains track items
  if (Array.isArray(obj)) {
    // If it's an array, check if elements look like tracks
    if (obj.length > 0 && (obj[0].type === 'track' || obj[0].uri?.startsWith('spotify:track:') || obj[0].track)) {
      return obj;
    }
    for (const item of obj) {
      const found = findTracks(item);
      if (found) return found;
    }
  } else {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // If key is 'tracks' or 'items', check them first
        if (key === 'tracks' || key === 'items' || key === 'content') {
          const found = findTracks(obj[key]);
          if (found) return found;
        }
      }
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (key !== 'tracks' && key !== 'items' && key !== 'content') {
          const found = findTracks(obj[key]);
          if (found) return found;
        }
      }
    }
  }
  return null;
}

try {
  const parsed = JSON.parse(data);
  
  // Traverse and log basic info
  const pageProps = parsed.props?.pageProps;
  const entity = pageProps?.state?.data?.entity;
  console.log('Entity Name:', entity?.name);
  console.log('Cover Art:', entity?.coverArt?.sources?.[0]?.url);
  
  const rawTracks = findTracks(parsed);
  if (!rawTracks) {
    console.error('Could not find tracks array in JSON.');
    // Let's print keys of pageProps to debug
    console.log('Keys:', Object.keys(parsed));
    process.exit(1);
  }
  
  console.log(`Found ${rawTracks.length} raw tracks in JSON.`);
  
  // Process the tracks
  const processedTracks = rawTracks.map((item, index) => {
    // Spotify track structure in embeds varies:
    // It could be { track: { id, name, artists: [...] } } or directly { id, name, artists: [...] }
    const track = item.track || item;
    
    const songName = track.name || track.title || '';
    const trackId = track.id || track.uri?.split(':').pop() || '';
    
    // Parse artists
    let artists = '';
    if (Array.isArray(track.artists)) {
      artists = track.artists.map(a => a.name).join(', ');
    } else if (track.artists) {
      artists = track.artists;
    }
    
    return {
      n: index + 1,
      song: songName,
      artists: artists,
      id: trackId
    };
  });
  
  console.log('Processed sample track:', processedTracks[0]);
  
  // Write to lib/tracks.ts
  const playlistName = entity?.name || 'Vinylvibes';
  const coverArt = entity?.coverArt?.sources?.[0]?.url || 'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da844f7c607cb4448e6ad4e664e5';
  
  const tracksFilePath = path.join(__dirname, 'lib', 'tracks.ts');
  const newContent = `export type Track = {
  n: number;
  song: string;
  artists: string;
  id: string;
};

// Tracks from the playlist "${playlistName}" by Its.lyka.
export const TRACKS: Track[] = ${JSON.stringify(processedTracks, null, 2)};

export const PLAYLIST_TOTAL = ${processedTracks.length};
export const PLAYLIST_URI = "spotify:playlist:05yhFenk9a4Y8NAUOi3gv7";
export const PLAYLIST_URL =
  "https://open.spotify.com/playlist/05yhFenk9a4Y8NAUOi3gv7";
export const CURATOR = "Its.lyka";
export const PLAYLIST_COVER = "${coverArt}";
`;

  fs.writeFileSync(tracksFilePath, newContent, 'utf8');
  console.log('Successfully updated lib/tracks.ts with all tracks from the new playlist!');
  
} catch (e) {
  console.error('Error:', e);
}
