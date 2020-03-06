import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import Home from '.'
import Account from '../../components/account'
import ReposList from '../../components/repos-list'
import ErrorMessage from '../../components/error-message'
import * as UserService from '../../services/user'

import userMock from '../../test/mocks/user'
import reposMock from '../../test/mocks/repos'

const createComponent = async () => {
  let component

  await act(async () => {
    component = mount(<Home />)
  })

  component.update()
  return component
}

describe('Home', () => {
  it('render component', async () => {
    jest.spyOn(UserService, 'getUser').mockResolvedValue(userMock)
    jest.spyOn(UserService, 'getRepos').mockResolvedValue(reposMock)

    const component = await createComponent()

    expect(component.find(Account).exists()).toBeTruthy()
    expect(component.find(ReposList).exists()).toBeTruthy()
    component.unmount()
  })

  it('render error message component', async () => {
    jest.spyOn(UserService, 'getUser').mockRejectedValue()
    jest.spyOn(UserService, 'getRepos').mockRejectedValue()

    const component = await createComponent()

    expect(component.find(ErrorMessage).exists()).toBeTruthy()
    component.unmount()
  })
})
