import fetchMock from 'fetch-mock';

import * as UserService from './user'
import userMock from '../test/mocks/user'
import reposMock from '../test/mocks/repos'

const userName = 'test'
const GITHUB_API = `https://api.github.com/users/${userName}`

describe('UserService', () => {
  afterEach(() => {
    fetchMock.reset()
  })

  it('getUser with success', async () => {
    const userExpected = {
      avatar: userMock.avatar_url,
      name: userMock.name,
      nickname: userMock.login,
      location: userMock.location
    }

    fetchMock.once(GITHUB_API, { body: JSON.stringify(userMock) });

    const user = await UserService.getUser(userName)
    expect(user).toEqual(userExpected)
  })

  it('getUser throws an error', async () => {
    fetchMock.once(GITHUB_API, 500);
    await expect(UserService.getUser(userName)).rejects
  })

  it('getRepos with success', async () => {
    const repoExpected = {
      name: 'chrome-t-rex',
      description: 'Jogo simplificado do Google Chrome T-Rex com Arduino',
      link: 'https://github.com/elensalustiano/chrome-t-rex',
      language: 'C++'
    }

    fetchMock.mock(`${GITHUB_API}/repos`, { body: JSON.stringify(reposMock) });
    const repos = await UserService.getRepos(userName)

    expect(repos).toHaveLength(9)
    expect(repos[0]).toEqual(repoExpected)
  })

  it('getRepos throws an error', async () => {
    fetchMock.once(`${GITHUB_API}/repos`, 500);
    await expect(UserService.getRepos(userName)).rejects
  })
})