import type { IconName } from '../shared/icon/icon';

/**
 * Central content file — edit the values below to make the portfolio yours.
 */
export const GITHUB_USERNAME = 'MahadShehzad';
export const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

/**
 * Web3Forms lets this static site send real emails from the contact form
 * with no backend of your own. Get a free access key in under a minute:
 *   1. Go to https://web3forms.com
 *   2. Enter immahad77@gmail.com and click "Create Access Key"
 *   3. Copy the key from the email it sends you and paste it below.
 * Until you do, the form will show an error when submitted.
 */
export const WEB3FORMS_ACCESS_KEY: string = '8651a035-0ac9-4e14-b642-bf6b5aacda6f';

export const personal = {
  name: 'Mahad Shehzad',
  firstName: 'Mahad',
  role: 'Frontend Developer',
  taglines: ['Frontend Developer', 'Angular Developer', 'UI Engineer', 'React Developer'],
  email: 'immahad77@gmail.com',
  githubUrl: GITHUB_URL,
  location: 'Punjab, Pakistan',
  // Add your real LinkedIn / X profile once you have the links handy.
  linkedinUrl: '',
  resumeUrl: '',
  bio:
    "I build fast, accessible, and visually polished web interfaces. I care about clean component " +
    'architecture, pixel-accurate UI, and the small details that make a product feel finished — ' +
    'from smooth micro-interactions to responsive layouts that hold up on every screen.',
  bioShort:
    'Frontend developer focused on turning designs into fast, responsive, production-ready interfaces.',
};

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'] },
  { category: 'Frameworks & Libraries', items: ['Angular', 'React', 'RxJS', 'Signals'] },
  { category: 'Styling', items: ['SCSS / Sass', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
  { category: 'Tools & Workflow', items: ['Git & GitHub', 'npm', 'VS Code', 'Figma', 'Chrome DevTools'] },
];

export interface FocusArea {
  icon: IconName;
  title: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    icon: 'layout',
    title: 'Responsive UI',
    description: 'Mobile-first, pixel-accurate layouts.',
  },
  {
    icon: 'component',
    title: 'Components',
    description: 'Reusable, typed, signal-driven.',
  },
  {
    icon: 'bolt',
    title: 'Performance',
    description: 'Lean bundles, fast by default.',
  },
  {
    icon: 'palette',
    title: 'Design-to-Code',
    description: 'Figma to pixel-true UI.',
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

/**
 * Pulled from https://github.com/MahadShehzad — add new repos here as you
 * publish them. Set `image` to a screenshot placed in `public/projects/`
 * (e.g. `projects/online-store.png`) to replace the gradient tile.
 */
export const projects: Project[] = [
  {
    title: 'Hospital Management System',
    description:
      'Full-stack hospital/clinic management system with role-based access (Patient/Doctor/Receptionist/Admin), appointment booking with slot-conflict prevention, prescriptions & billing PDFs, and reporting dashboards.',
    tech: ['Angular 22', 'TypeScript', 'SCSS', 'ASP.NET Core 10', 'EF Core', 'SQL Server'],
    repo: `${GITHUB_URL}/hospital-management-system`,
    featured: true,
  },
  {
    title: 'Online Store — Multi-Vendor Marketplace',
    description:
      'Multi-vendor e-commerce marketplace with an Angular 22 SSR frontend built on signals, backed by a .NET 10 Web API with EF Core and SQL Server.',
    tech: ['Angular 22', 'Signals', 'SSR', '.NET 10 Web API', 'EF Core', 'Bootstrap 5'],
    repo: `${GITHUB_URL}/onlineStore`,
    featured: true,
  },
  {
    title: 'Enterprise Management System',
    description:
      'Role-based enterprise system where Admins, Managers, and Employees each see and act only on what their role permits.',
    tech: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#'],
    repo: `${GITHUB_URL}/Enterprise-System`,
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];
