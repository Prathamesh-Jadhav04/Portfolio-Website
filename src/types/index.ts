// Types for sanjaybehera.web.app clone

export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  year?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
