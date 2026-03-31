// YouTube Video Data for Mahu Darbar
// Channel: https://www.youtube.com/@shivrajmehra-k8x

export const videos = [
  {
    id: 'vid1',
    youtubeId: 'yroylFp-IpA',
    type: 'video',
    title: 'Modern Villa Completion',
    category: 'Residential',
    description: 'Final walkthrough of a recently completed modern villa project, showcasing premium finishes.',
  },
  {
    id: 'vid2',
    youtubeId: '5HXRzdx5X2w',
    type: 'video',
    title: 'Site Progress & Structure',
    category: 'Construction',
    description: 'A look at the ongoing structural work and quality control on our latest construction site.',
  },
  {
    id: 'vid3',
    youtubeId: '-qLQSJCOVuA',
    type: 'video',
    title: 'Premium Interior Work',
    category: 'Interior',
    description: 'Detailed showcase of custom wardrobe installations and luxury interior craftsmanship.',
  },
  {
    id: 'vid4',
    youtubeId: 'AmC3k7Y_N0c',
    type: 'video',
    title: 'Building Excellence',
    category: 'Branding',
    description: 'The Mahu Darbar philosophy of building dreams with precision and trust.',
  },
  {
    id: 'vid5',
    youtubeId: 'HKv220yc7Hg',
    type: 'video',
    title: 'Daily Site Vlog',
    category: 'Updates',
    description: 'A behind-the-scenes look at the daily operations and teamwork on a Mahu Darbar project.',
  },
  {
    id: 'vid6',
    youtubeId: 'UCoBPIMEL-U',
    type: 'video',
    title: 'Structural Foundations',
    category: 'Construction',
    description: 'Focusing on the strength and integrity of our foundations for long-lasting structures.',
  },
  {
    id: 'vid7',
    youtubeId: '6o50xEs2zOo',
    type: 'video',
    title: 'Finishing & Detailing',
    category: 'Interior',
    description: 'The final touches that make a house a home — attention to detail in every corner.',
  },
]

export const getEmbedUrl = (video) => {
  if (video.type === 'playlist') {
    return `https://www.youtube.com/embed/videoseries?list=${video.youtubeId}&rel=0&modestbranding=1`
  }
  return `https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`
}

export const getSrcDoc = (video) => {
  const isPlaylist = video.type === 'playlist';
  const url = isPlaylist 
    ? `https://www.youtube.com/embed/videoseries?list=${video.youtubeId}&autoplay=1&rel=0&modestbranding=1`
    : `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  const bgImg = isPlaylist 
    ? '' 
    : `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  
  return `
    <style>
      * { padding: 0; margin: 0; overflow: hidden; box-sizing: border-box; }
      html, body { height: 100%; width: 100%; background: #000; }
      a { display: block; width: 100%; height: 100%; cursor: pointer; text-decoration: none; position: relative; }
      img { position: absolute; width: 100%; top: 0; bottom: 0; left: 0; margin: auto; object-fit: cover; opacity: 0.7; transition: opacity 0.3s, transform 0.5s; }
      a:hover img { opacity: 0.9; transform: scale(1.05); }
      .play-btn {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 60px; height: 60px; background-color: #ff6600; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 0 0 rgba(255,102,0,0); transition: transform 0.3s, box-shadow 0.3s;
      }
      a:hover .play-btn { transform: translate(-50%, -50%) scale(1.1); box-shadow: 0 0 20px rgba(255,102,0,0.6); }
      svg { width: 30px; height: 30px; fill: #fff; margin-left: 4px; }
    </style>
    <a href="${url}">
      ${bgImg ? `<img src="${bgImg}" alt="Play video">` : ''}
      <div class="play-btn">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </a>
  `;
}
