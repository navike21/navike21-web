export enum EPages {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PROJECTS = 'projects',
  BLOG = 'blog',
  CONTACT = 'contact'
}

export interface IInformationPage {
  id: EPages
  name: string
  slug: string
}
