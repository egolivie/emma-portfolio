import uniqid from 'uniqid';

export const header = {

}

export const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Wildfire Admin Panel',
    description: 'Built a responsive admin panel for Bayes Studio’s wildfire detection system, delivering real-time data and alerts to support quick decisions in high-risk areas.',
    stack: ['Python',
      'TypeScript',
      'JavaScript',
      'CSS',
      'SCSS',
      'React',
      'Cloud Run (GCP)',
      'Storage (GCP)',
      'Firestore (GCP)',],
  }
  ,
  {
    name: 'Hotel Website Development',
    description:
      'Developed a custom WordPress website for a hotel with tailored CSS and UI enhancements. Focused on optimizing SEO, and UX through hands-on layout customization.',
    stack: ['WordPress',
      'CSS',
      'HTML',
      'JavaScript',
      'SEO Optimization',
      'Responsive Design',
      'UI/UX Design'],

  },

]

export const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Python',
  'Java',
  'Github',
  'Adobe',
  'Wordpress',
  'Junit Testing',
  'Agile Scrum',
]

export const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'emmaolivier7877@gmail.com',
}


export const projectMedia = [
  {
    id: uniqid(),
    title: 'Wildfire Admin Panel Poster',
    media: `${process.env.PUBLIC_URL}/images/poster.jpg`,
    type: 'image'
  },
  {
    id: uniqid(),
    title: 'Wildfire Admin Panel Login',
    media: `${process.env.PUBLIC_URL}/images/login.png`,
    type: 'image'
  },
  {
    id: uniqid(),
    title: 'Wildfire Admin Panel Sensor Page',
    media: `${process.env.PUBLIC_URL}/images/sensor.png`,
    type: 'image'
  },
  {
    id: uniqid(),
    title: 'Wildfire Admin Panel Map',
    media: `${process.env.PUBLIC_URL}/images/map.png`,
    type: 'image'
  },
  {
    id: uniqid(),
    title: 'Majestic Hotel Homepage',
    media: `${process.env.PUBLIC_URL}/images/Majestic_Home.png`,
    type: 'image'
  },
  {
    id: uniqid(),
    title: 'Majestic Hotel Homepage - room to roam',
    media: `${process.env.PUBLIC_URL}/images/roam.png`,
    type: 'image'
  },
    {
    id: uniqid(),
    title: 'Main home image',
    media: `${process.env.PUBLIC_URL}/images/frontend_lola.png`,
    type: 'image'
  },
      {
    id: uniqid(),
    title: 'About Me',
    media: `${process.env.PUBLIC_URL}/images/pointing_to_poster.jpg`,
    type: 'image'
  },
];
