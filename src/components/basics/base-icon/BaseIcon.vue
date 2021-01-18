<template>
  <svg
    :class="[
      'base-icon',
      size ? `base-icon--is-${size}` : null,
      color ? `base-icon--is-${color}` : null,
    ]"
    viewBox="0 0 24 24">
    <path :d="name" />
  </svg>
</template>

<script>

export default {
  name: 'BaseIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      default: 'default',
    },

    color: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang='scss' scoped src= './BaseIcon.scss'></style>
