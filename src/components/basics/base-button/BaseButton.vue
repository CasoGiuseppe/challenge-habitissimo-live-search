<template>
  <component
    :is="type"
    :data-id="id"
    :class="[
      isSecondary ? 'base-button--is-secondary' : 'base-button--is-primary',
      isSmall ? 'base-button--is-small' : null,
      isRounded ? 'base-button--is-rounded' : null,
      isSquared ? 'base-button--is-squared' : null,
      isWarning ? 'base-button--is-warning' : null,
      isLight ? 'base-button--is-light' : null,
      isClear ? 'base-button--is-clear' : null,
      'base-button'
    ]"
    :disabled="isDisabled"
    :autofocus="isAutofocus"
    @click="handleClick"
  >
    <transition
      mode="out-in"
      name="button-label"
    >
      <div
        :key="id"
        class="base-button__content"
      >
        <slot name="content" />
      </div>
    </transition>
  </component>
</template>
<script>
export default {
  name: 'BaseButton',

  props: {
    id: {
      type: [String, Boolean],
      default: 'null',
    },

    type: {
      type: String,
      default: 'button',
    },

    isSecondary: {
      type: Boolean,
      default: false,
    },

    isSmall: {
      type: Boolean,
      default: false,
    },

    isRounded: {
      type: Boolean,
      default: false,
    },

    isSquared: {
      type: Boolean,
      default: false,
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    isAutofocus: {
      type: Boolean,
      default: false,
    },

    isWarning: {
      type: Boolean,
      default: false,
    },

    isLight: {
      type: Boolean,
      default: false,
    },

    isClear: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(e) {
      const { id } = e.target.dataset;
      this.$emit('click', {
        id,
      });
    },
  },
};
</script>

<style lang='scss' scoped src= './BaseButton.scss'></style>
