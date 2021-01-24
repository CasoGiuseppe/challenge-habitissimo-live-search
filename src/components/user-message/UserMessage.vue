<template>
  <aside
    :class="[
      isSoBig ? 'user-message--is-so-big' : null,
      isLight ? 'user-message--is-light' : null,
      'user-message'
    ]">
    <!-- ICON: CUSTOM -->
    <div
      v-if="$slots['icon']"
      class="user-message__icon"
    >
      <slot name="icon" />
    </div>
    <!-- /// -->

    <!-- TITLE: CUSTOM -->
    <h3
      v-if="$slots['title']"
      class="user-message__title"
    >
      <slot name="title" />
    </h3>
    <!-- /// -->

    <!-- MESSAGE: CUSTOM -->
    <p
      v-if="$slots['message']"
      class="user-message__text"
    >
      <slot name="message" />
    </p>
    <!-- /// -->
  </aside>
</template>
<script>
export default {
  name: 'UserMessage',

  props: {
    isSoBig: {
      type: Boolean,
      default: false,
    },

    isLight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" src="./UserMessage.scss" />
