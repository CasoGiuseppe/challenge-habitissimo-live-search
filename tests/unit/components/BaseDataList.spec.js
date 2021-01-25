import BaseButton from '@/components/basics/base-data-list/BaseDataList.vue';
import { mount } from '@vue/test-utils';
import { datalist } from './__mock__/dataList';

describe('BaseDataList.vue', () => {
  let component;

  beforeEach(() => {
    component = mount(BaseButton, {
      propsData: {
        items: datalist,
        size: 1,
        isVisible: true
      },

      slots: {
        content: '<span class="slot-content">content</span>'
      },
    });
  });

  it('has correct props values', () => {
    expect(component.props().items.length).toBe(1)
    expect(component.props().size).toBeGreaterThan(0);
    expect(component.props().isVisible).toBeTruthy();
  });

  it('has correct action slot', () => {
    const main = component.find('.base-data-list');
    expect(main.findAll('.slot-content').length).toBe(1);
  });


  it('has correct $emit response', async () => {
    component.vm.$emit('click', 'clickvalue');
    component.vm.$emit('blur', 'blurvalue');

    await component.vm.$nextTick();
    expect(component.emitted().click).toBeTruthy();
    expect(component.emitted().click[0]).toEqual(['clickvalue']);
    expect(component.emitted().blur).toBeTruthy();
    expect(component.emitted().blur[0]).toEqual(['blurvalue']);
  });

  it('has the expected html structure', () => {
    expect(component.html()).toMatchSnapshot();
  });
});
