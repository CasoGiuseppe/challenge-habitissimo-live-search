import BaseButton from '@/components/basics/base-icon/BaseIcon.vue';
import { mount } from '@vue/test-utils';

describe('BaseIcon.vue', () => {
  let component;

  beforeEach(() => {
    component = mount(BaseButton, {
      propsData: {
        name: 'icon',
        size: 'small',
        color: 'primary'
      }
    });
  });

  it('has correct props values', () => {
    expect(component.props().name).toBe('icon');
    expect(component.props().size).toBe('small');
    expect(component.props().color).toBe('primary');
  });

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
