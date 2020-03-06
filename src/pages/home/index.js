import React from 'react'

import './index.scss';
import Account from '../../components/account'
import { getUser, getRepos } from '../../services/user'
import ReposList from '../../components/repos-list'
import ErrorMessage from '../../components/error-message'
import Loader from '../../components/loader'

const Home = () => {
  const [userData, setUserData] = React.useState({});
  const [repoData, setRepoData] = React.useState([{}]);
  const [onError, setErrorState] = React.useState(false);
  const [showLoader, setLoaderState] = React.useState(true);

  React.useEffect(() => {
    getInitialInfos()
  }, [])

  const getInitialInfos = async () => {
    try {
      const userName = 'elensalustiano'

      const [user, repos] = await Promise.all([getUser(userName), getRepos(userName)])

      setUserData({
        ...user,
        linkedin: 'https://www.linkedin.com/in/elensalustiano/',
        github: 'https://github.com/elensalustiano'
      })

      setRepoData(repos)
      setErrorState(false)
      setLoaderState(false)
    } catch (error) {
      setErrorState(true)
      setLoaderState(false)
    }
  }

  const batata = () => {
    setLoaderState(true)
    setTimeout(getInitialInfos, 2000)
  }

  return (
    <div className="container">
      <div className="row">
        {showLoader ?
          <div className="col"> <Loader /> </div>
          :
          <React.Fragment>
            {onError ?
              <ErrorMessage
                message="Ops! ocorreu um erro inesperado"
                buttonLabel="Tentar acessar novamente"
                isShowButton={true}
                buttonCallback={batata}
              />
              :
              <React.Fragment>
                <div className="col col-sidebar">
                  <Account userData={userData} />
                </div>
                <div className="col col-content">
                  <ReposList repoData={repoData} />
                </div>
              </React.Fragment>
            }
          </React.Fragment>
        }
      </div>
    </div>
  );
}

export default Home