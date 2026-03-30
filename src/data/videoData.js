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
