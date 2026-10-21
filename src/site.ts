// Everything about Cedar that isn't a project lives here.
// Project write-ups live in src/content/work/*.md.

// The address the site is served from. Used for canonical URLs, the sitemap,
// llms.txt and social previews. Change it here if the domain changes
// (astro.config.mjs reads this value too).
export const SITE_URL = 'https://cedarroseleach.com';

export const person = {
  name: 'Cedar Rose Leach',
  headline: 'Electrical and Computer Engineering at USC, Class of 2027',
  school: 'University of Southern California',
  degree: 'B.S. in Electrical and Computer Engineering',
  classOf: '2027',
  email: 'cdleach@usc.edu',
  linkedin: 'https://www.linkedin.com/in/cedar-rose-leach',
  resume: '/files/cedar-rose-leach-resume.pdf',
  // Two short paragraphs shown under the name, and used as the site description.
  bio: [
    'Passionate about building high-performance hardware for AI, robotics and neural systems. Focusing on neural interfaces, wearable sensors and intelligent robotic systems through fabrication and chip design.',
    'Co-founder of Memoir Photos, the only accessible photo library for the visually impaired.',
  ],
  description:
    'Cedar Rose Leach is an Electrical and Computer Engineering student at USC (Class of 2027) building hardware for AI, robotics and neural systems: neural interfaces, wearable sensors, microfabrication and PCB design. Co-founder of Memoir Photos.',
  knowsAbout: [
    'Neural interfaces',
    'Wearable sensors',
    'Semiconductor nanofabrication',
    'Electron beam lithography',
    'PCB design',
    'FPGA',
    'Embedded systems',
    'Accessibility',
  ],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Fabrication and hardware',
    items: [
      'Cleanroom fabrication (photolithography, deposition, etching, metrology)',
      'Electron beam lithography',
      'Parylene deposition and etching',
      'Femtosecond laser ablation',
      'PCB design',
      'Device packaging',
      'Microelectronics and digital logic',
      'VLSI design',
    ],
  },
  {
    group: 'Design and simulation tools',
    items: ['COMSOL Multiphysics', 'Altium Designer', 'Fusion 360', 'KLayout', 'Vivado and Vitis', 'Figma'],
  },
  {
    group: 'Programming',
    items: ['Python', 'C++', 'Java', 'Verilog', 'React Native', 'SQL', 'MATLAB', 'Git', 'Supabase'],
  },
  {
    group: 'Machine learning',
    items: ['NLP', 'Data preprocessing', 'Model training', 'LLM API integration', 'Prompt engineering'],
  },
  {
    group: 'Making',
    items: ['Graphic and product design', 'Woodworking', 'Resin', 'Sewing', 'Ceramics', 'Painting'],
  },
];

export const categories = [
  { id: 'experience', title: 'Experience' },
  { id: 'research', title: 'Research' },
  { id: 'building', title: 'Building' },
  { id: 'mentoring', title: 'Mentoring' },
] as const;
