<template>
  <ul
    data-cy="data-list"
    class="base-data-list"
    :style="customStyle"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
      tabindex="0"
      :data-id="item.id"
      :data-index="index"
      :data-value="item.name"
      :class="[
        'base-data-list__item',
        indexOf === index ? 'base-data-list--is-selected' : null
      ]"
      @click="handleClickState"
    >
      <slot
        name="content"
        :item="item"
      />
    </li>
  </ul>
</template>
<script>

export default {
  name: 'BaseDataList',

  data() {
    return {
      indexOf: 0,
      keysMetohdsMap: {
        40: (e) => this.move(e),
        38: (e) => this.move(e),
        13: (e) => this.handleClickState(e),
      },
    };
  },

  props: {
    items: {
      type: [Array, Object],
      default: () => [],
    },

    size: {
      type: Number,
      default: null,
    },

    isVisible: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    customStyle() {
      // SET CUSTOM IMTES MAX LENGTH
      return this.size ? { '--max-item-length': this.size } : null;
    },
  },

  methods: {
    // MOVE FORWARD AND BACKWARD
    // ON ARROWS KEY TAP
    move(e) {
      const { index } = document.activeElement.dataset;
      this.indexOf = e.keyCode === 40 ? Math.floor(index) + 1 : Math.floor(index) - 1;
      this.setFocus();
    },

    // SET FOCUS ON ARROW KEY TAP
    setFocus() {
      const current = this.$el.querySelector(`[data-index='${this.indexOf}']`);
      current ? current.focus() : this.$emit('blur');
    },

    // EMIT CLICK EVENT
    handleClickState(e) {
      const { id, value } = e.target.dataset;
      this.$emit('click', {
        id,
        value,
      });
    },

    onBlur() {
      this.$emit('blur');
    },
  },

  // ACTIVE KEY EVENT
  mounted() {
    this.$el.addEventListener('keydown', (e) => {
      this.keysMetohdsMap[e.keyCode] && this.keysMetohdsMap[e.keyCode](e);
    });
  },

  // REMOVE KEY EVENT
  destroyed() {
    this.$el.removeEventListener('keydown', (e) => {});
  },
};
</script>
<style lang="scss" src="./BaseDataList.scss" />
