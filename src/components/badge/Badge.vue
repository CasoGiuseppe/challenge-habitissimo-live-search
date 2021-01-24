<template>
  <article class="badge">
    <!-- BADGE IMAGE -->
    <figure class="badge__image">
      <img
        :src="image"
        alt="image"
      >
      <figcaption class="badge__caption">
        {{ image }}
      </figcaption>
    </figure>
    <!-- /// -->

    <!-- BADGE INFO -->
    <div class="badge__info">
      <!-- TITLE -->
      <h2
        v-if="$slots['title']"
        class="badge__title"
      >
        <span class="badge__label">Name:</span>
        <slot name="title" />
      </h2>
      <!-- /// -->
      <p
        v-for="item in items"
        :key="item.label"
        class="badge__more"
      >
        <slot
          name="content"
          :item="item"
        />
      </p>
    </div>
    <!-- /// -->
  </article>
</template>
<script>
export default {
  name: 'Badge',

  props: {
    image: {
      type: String,
    },

    items: {
      type: [Array, Object],
      default: () => [],
    },
  },
};
</script>
<style lang="scss" src="./Badge.scss" />
