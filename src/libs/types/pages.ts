export enum Pages {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PROJECTS = 'projects',
  BLOG = 'blog',
  CONTACT = 'contact'
}

export interface InformationPage {
  id: Pages
  name: string
  slug: string
}
