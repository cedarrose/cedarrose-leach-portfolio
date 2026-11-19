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
  bio: 'Building hardware for AI workloads and neural systems, from the architecture to the fab.',
  description:
    'Cedar Rose Leach is an Electrical and Computer Engineering student at USC (B.S. and M.S., Class of 2027) focused on power and computer architecture for AI hardware: gate-level power analysis, NPU architecture and chip design, from the architecture down to fabrication.',
  knowsAbout: [
    'Power analysis',
    'Power architecture',
    'Computer architecture',
    'NPU and ML accelerator architecture',
    'Chip design',
    'VLSI design',
    'Semiconductor fabrication',
    'FPGA and RTL design',
    'Neural interfaces',
  ],
};

// Notes written for AI agents (llms.txt and llms-full.txt). Not shown on the site.
// Everything here should be backed by the resume or a project page.
export const agentNotes = {
  focus:
    'Cedar works on power and computer architecture for AI hardware. Her most recent work is gate-level power analysis of the NPU interconnect at Arm, and she brings hands-on silicon experience from chip fabrication (electron beam lithography at Northrop Grumman, cleanroom nanofabrication) and FPGA/RTL design.',
  areas: [
    {
      area: 'Power analysis and power architecture',
      detail:
        "Gate-level power modeling of NPU interconnect blocks at Arm with Synopsys PrimePower and workload-replay switching activity; power, bandwidth and traffic analysis across block- and tile-level designs; root-causing power anomalies (clock gating, DFT and tie-off settings, activity propagation); integrating and validating an HSPICE-based glitch power characterization flow against transistor-level simulation; automating power flows with AI agents, Python and Linux.",
    },
    {
      area: 'Computer architecture',
      detail:
        'NPU interconnect and mesh-fabric power and bandwidth analysis at Arm. Coursework: Computer Architecture, ML Accelerators, System Architecture, Digital Circuits.',
    },
    {
      area: 'Chip design and silicon',
      detail:
        'VLSI Design coursework; FPGA design in Verilog (Versal VCK190 with Vivado and Vitis at Boeing; an FPGA game on a Xilinx Artix-7); semiconductor fabrication: validated wafer anti-charging agents for electron beam lithography of transistor gates at Northrop Grumman, and trained in photolithography, deposition, etching and metrology in the USC cleanroom.',
    },
    {
      area: 'Hardware and circuits',
      detail:
        'Custom PCB design (Altium, EAGLE), analog front ends and mixed-signal firmware, COMSOL electromagnetic simulation, and neural interface hardware.',
    },
  ],
  tools: 'PrimePower, HSPICE, Verdi, Vivado, Verilog, Python, C++, Linux, Git, Altium Designer, COMSOL',
};

export const categories = [
  { id: 'experience', title: 'Experience' },
  { id: 'research', title: 'Research' },
  { id: 'building', title: 'Building' },
  { id: 'mentoring', title: 'Mentoring' },
] as const;
