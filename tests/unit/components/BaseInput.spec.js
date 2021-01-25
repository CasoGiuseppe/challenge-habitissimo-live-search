import BaseInput from '@/components/basics/base-input/BaseInput'
import { mount } from '@vue/test-utils'

describe('BaseInput.vue', () => {
  let component

  beforeEach(() => {
    component = mount(BaseInput, {
      propsData:{
        type: 'text',
        id: 'test',
        placeholder: 'placeholder',
        isRequired: {
          state: false,
          label: 'required'
        },
      }
    })
  })

  it('has correct props values', () => {
    expect(component.props().type).toBe('text')
    expect(component.props().id).toBe('test')
    expect(component.props().placeholder).toBe('placeholder')
    expect(component.props().isRequired).toHaveProperty('label', 'required')
  })

  it('has correct $emit response', async () => {
    component.vm.$emit('icon', 'icon')
    component.vm.$emit('title', 'title')
    component.vm.$emit('dataList', 'list')

    await component.vm.$nextTick()
    expect(component.emitted().icon).toBeTruthy()
    expect(component.emitted().icon[0]).toEqual(['icon'])

    expect(component.emitted().title).toBeTruthy()
    expect(component.emitted().title[0]).toEqual(['title'])

    expect(component.emitted().dataList).toBeTruthy()
    expect(component.emitted().dataList[0]).toEqual(['list'])
  })

  it('has correct set data value', () => {
    component.setData({onActive: true})
    expect(component.vm.onActive).toBeTruthy()
  })

  it('has input correct ID', () => {
    const input = component.find('.base-input__field')
    expect(input.attributes().id).toEqual('test')
  })

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot()
  })
})