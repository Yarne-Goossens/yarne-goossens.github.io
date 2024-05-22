// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Yarne-Goossens', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [
            'Yarne-Goossens/yarne-goossens.github.io'
            'Yarne-Goossens/Bomen_en_grafen_oefeningen', 
            'Yarne-Goossens/ip-major-2223', 
            'Yarne-Goossens/BS2_Back-End', 
            'Yarne-Goossens/course-material', 
            'Yarne-Goossens/BS2_Front-End', 
            'Yarne-Goossens/csharp-intro'
          ], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Maakbaar Leuven',
          description:
            'A static site showcasing the prototype site we made for Maakbaar Leuven where users can make a self-diagnoses of their broken vacuum cleaner (does not have database connection)',
          imageUrl:
            '/maakbaarleuven_logo.png',
          link: 'https://werkplek-project.vercel.app/main/resources/templates/index.html',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Yarne Goossens',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'yarne-goossens',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'yarne.goossens@outlook.be',
  },
  resume: {
    fileUrl:
      '/Resume.docx', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Bootstrap',
    'Java',
    'C#',
    'Python',
    'HTML',
    'SQL',
    'PostgreSQL',
    'TypeScript',
  ],
  experiences: [
    {
      company: 'ICTS KU Leuven',
      position: 'Student Job',
      from: 'July 2021',
      to: 'Present',
    },
  ],
  certifications: [
    {
      name: 'BusIT Hasselt',
      body: 'Work with team to make a small car drive in a simulation using ROS',
      year: 'March 2024',
      link: '/pxlcert.jpg',
    },
    {
      name: 'BusIT Brugge',
      body: 'Work in a team to configure a Raspberry Pi drive a car around a track',
      year: 'March 2024',
      link: '/howestcert.jpg',
    },
  ],
  educations: [
    {
      institution: 'UCLL',
      degree: 'Bachelor in Applied Computer Science',
      from: '2021',
      to: '2024',
    },
  ],
  publications: [

  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      /*'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',*/
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
