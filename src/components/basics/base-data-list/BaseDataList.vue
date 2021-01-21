<template>
  <ul
    class="base-data-list"
    :style="customStyle"
  >
    <li
      v-for="(item, index) in [0, 1, 2, 3, 4, 5, 6, 7]"
      :key="index"
      tabindex="0"
      :data-index="index"
      :class="[
        'base-data-list__item',
        indexOf === index ? 'base-data-list--is-selected' : null
      ]"
      @click="handleClickState"
    >
      {{ `item-${index}`}}
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
    size: {
      type: Number,
      default: null,
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
      current ? current.focus() : null;
    },

    // EMIT CLICK EVENT
    handleClickState(e) {
      const { target: el } = e;
      this.$emit('click');
    },
  },

  // ACTIVE KEY EVENT
  mounted() {
    this.$el.addEventListener('keydown', (e) => {
      this.keysMetohdsMap[e.keyCode] ? this.keysMetohdsMap[e.keyCode](e) : null;
    });
  },

  // REMOVE KEY EVENT
  destroyed() {
    this.$el.removeEventListener('keydown');
  },
};
</script>
<style lang="scss" src="./BaseDataList.scss" />
