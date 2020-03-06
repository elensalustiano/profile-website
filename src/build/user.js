const getUserFormatted = user => ({
  avatar: user.avatar_url,
  name: user.name,
  nickname: user.login,
  location: user.location
})

const getRepoFormatted = repos => repos.map(repo => ({
  name: repo.name,
  description: repo.description,
  link: repo.html_url,
  language: repo.language
}))


export {
  getUserFormatted,
  getRepoFormatted
}