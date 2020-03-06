import React from 'react'

import './index.scss'
import { ICONS } from '../../constants/icon'
import Icon from '../icon'

const Account = ({ userData }) => (
  <React.Fragment>
    {userData.avatar &&
      <img className="account-avatar" src={userData.avatar} alt="user avatar" />
    }
    <p itemProp="name" className="account-name">{userData.name}</p>
    <p itemProp="nickname" className="account-nickname">{userData.nickname}</p>
    <div className="social-container">
      <a
        href={userData.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon={ICONS.LINKEDIN}
          style={{
            fill: '#0077b5'
          }}
        />
      </a>
      <a
        href={userData.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon={ICONS.GITHUB}
          style={{
            marginLeft: '20px'
          }}
        />
      </a>
    </div>
    <div className="location-container">
      <Icon
        icon={ICONS.LOCATION}
        style={{
          verticalAlign: 'text-bottom'
        }}
      />
      <p itemProp="location" className="account-location">{userData.location}</p>
    </div>
  </React.Fragment>
)

export default Account