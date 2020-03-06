import React from 'react'
import { mount } from 'enzyme'
import Account from '.'

const user = {
  avatar: 'avatar',
  name: 'name',
  nickname: 'login',
  location: 'location'
}

describe('Account', () => {
  it('render Account component', async () => {
    const component = mount(<Account userData={user} />)

    expect(component.find('.account-avatar').html()).toContain(user.avatar)
    expect(component.find('.account-name').html()).toContain(user.name)
    expect(component.find('.account-nickname').html()).toContain(user.nickname)
    expect(component.find('.account-location').html()).toContain(user.location)
  })
})