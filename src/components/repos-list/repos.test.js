import React from 'react'
import { mount } from 'enzyme'
import ReposList from '.'

const repos = [{
  name: 'chrome-t-rex',
  description: 'Jogo simplificado do Google Chrome T-Rex com Arduino',
  link: 'https://github.com/elensalustiano/chrome-t-rex',
  language: 'C++'
}]


describe('Account', () => {
  it('render Account component', async () => {
    const component = mount(<ReposList repoData={repos} />)
    const [firstRepo] = repos

    expect(component.find('.repo-title').html()).toContain(firstRepo.name)
    expect(component.find('.repo-container').html()).toContain(firstRepo.description)
    expect(component.find('.repo-title').html()).toContain(firstRepo.link)
    expect(component.find('.repo-language').html()).toContain(firstRepo.language)
  })
})