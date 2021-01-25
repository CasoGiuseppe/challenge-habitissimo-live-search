import BaseInput from '@/components/user-message/UserMessage'
import { mount } from '@vue/test-utils'

describe('UserMessage.vue', () => {
  let component

  beforeEach(() => {
    component = mount(BaseInput, {
      propsData:{
        isSoBig: true,
        isLight: false,
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().isSoBig).toBeTruthy()
    expect(component.props().isLight).toBeFalsy()
  })

  it('has correct $emit response', async () => {
    component.vm.$emit('icon', 'icon')
    component.vm.$emit('title', 'title')
    component.vm.$emit('message', 'message')

    await component.vm.$nextTick()
    expect(component.emitted().icon).toBeTruthy()
    expect(component.emitted().icon[0]).toEqual(['icon'])

    expect(component.emitted().title).toBeTruthy()
    expect(component.emitted().title[0]).toEqual(['title'])

    expect(component.emitted().message).toBeTruthy()
    expect(component.emitted().message[0]).toEqual(['message'])
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})