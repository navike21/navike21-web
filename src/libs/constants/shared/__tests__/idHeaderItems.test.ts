import {
  ID_ABOUT,
  ID_CONTACT,
  ID_HOME,
  ID_PROJECTS,
  ID_SERVICES
} from '../idHeaderItems'

describe('idHeaderItems', () => {
  it('should have the same values', () => {
    expect(ID_HOME).toEqual('home')
    expect(ID_ABOUT).toEqual('about')
    expect(ID_PROJECTS).toEqual('projects')
    expect(ID_SERVICES).toEqual('services')
    expect(ID_CONTACT).toEqual('contact')
  })
})
