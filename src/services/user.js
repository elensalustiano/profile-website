import fetchWrapper from './fetch-wrapper'
import { getUserFormatted, getRepoFormatted } from '../build/user'

const GITHUB_API = 'https://api.github.com/users'

const getUser = async userName => {
  try {
    const response = await fetchWrapper(`${GITHUB_API}/${userName}`)
    return getUserFormatted(response)
  } catch (error) {
    throw error
  }
}

const getRepos = async userName => {
  try {
    const response = await fetchWrapper(`${GITHUB_API}/${userName}/repos`)
    return getRepoFormatted(response)
  } catch (error) {
    throw error
  }
}

export {
  getUser,
  getRepos
}