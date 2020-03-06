import React from 'react'
import { mount } from 'enzyme'

import ErrorMessage from '.'

describe('Account', () => {
  it('render component', async () => {
    const component = mount(<ErrorMessage
      message="message"
      isShowButton={false}
    />)

    expect(component.find('.error-container').html()).toContain('message')
  })

  it('render component with button', async () => {
    const component = mount(<ErrorMessage
      message="message"
      isShowButton={true}
      buttonLabel="buttonLabel"
      buttonCallback={jest.fn()}
    />)

    component.find('.error-button').simulate('click');

    expect(component.find('.error-container').html()).toContain('message')
    expect(component.find('.error-container').html()).toContain('buttonLabel')
    expect(component.props().buttonCallback).toHaveBeenCalled();
  })
})