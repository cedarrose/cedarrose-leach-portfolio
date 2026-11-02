// Everything about Cedar that isn't a project lives here.
// Project write-ups live in src/content/work/*.md.

// The address the site is served from. Used for canonical URLs, the sitemap,
// llms.txt and social previews (astro.config.ts reads this value too).
// On Vercel it comes from the project's production domain automatically, so it
// stays correct if the domain changes. To force a specific address, set a
// SITE_URL environment variable in Vercel. The last value is the local fallback.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.SITE_URL ??
  (vercelDomain ? `https://${vercelDomain}` : 'https://cedarrose-leach-portfolio.vercel.app')
).replace(/\/$/, '');

export const person = {
  name: 'Cedar Rose Leach',
  headline: 'Electrical and Computer Engineering at USC, Class of 2027',
  school: 'University of Southern California',
  degree: 'B.S. and M.S. in Electrical and Computer Engineering',
  classOf: '2027',
  email: 'cdleach@usc.edu',
  linkedin: 'https://www.linkedin.com/in/cedar-rose-leach',
  resume: '/files/cedar-rose-leach-resume.pdf',
  // One short line shown under the name on the home page.
  bio: 'Building hardware for AI, robotics and neural systems, from the cleanroom to the circuit board.',
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

export const categories = [
  { id: 'experience', title: 'Experience' },
  { id: 'research', title: 'Research' },
  { id: 'building', title: 'Building' },
  { id: 'mentoring', title: 'Mentoring' },
] as const;
