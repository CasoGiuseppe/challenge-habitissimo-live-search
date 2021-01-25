import BaseButton from '@/components/basics/base-button/BaseButton.vue';
import { mount } from '@vue/test-utils';

describe('BaseButton.vue', () => {
  let component;

  beforeEach(() => {
    component = mount(BaseButton, {
      propsData: {
        id: '001',
        type: 'text',
        isSecondary: false,
        isSmall: false,
        isRounded: true,
        isSquared: true,
        isDisabled: true,
        isAutofocus: false,
        isWarning: true,
        isLight: true,
        isClear: true
      },

      slots: {
        content: '<span class="slot-content">content</span>'
      },
    });
  });

  it('has correct props values', () => {
    expect(component.props().id).toBe('001');
    expect(component.props().type).toBe('text');

    expect(component.props().isSecondary).toBe(false);
    expect(component.props().isSmall).toBe(false);
    expect(component.props().isRounded).toBe(true);
    expect(component.props().isSquared).toBe(true);
    expect(component.props().isDisabled).toBe(true);
    expect(component.props().isAutofocus).toBe(false);
    expect(component.props().isWarning).toBe(true);
    expect(component.props().isLight).toBe(true);
    expect(component.props().isClear).toBe(true);
  });

  it('has correct action slot', () => {
    const main = component.find('.base-button');
    expect(main.findAll('.slot-content').length).toBe(1);
  });


  it('has correct $emit response', async () => {
    component.vm.$emit('click', 'clickvalue');

    await component.vm.$nextTick();
    expect(component.emitted().click).toBeTruthy();
    expect(component.emitted().click[0]).toEqual(['clickvalue']);
  });

  it('has correct class name', () => {
    expect(component.classes()).toContain('base-button--is-primary');
  });

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
