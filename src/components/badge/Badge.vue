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

      <!-- GENDER -->
      <p
        v-if="$slots['gender']"
        class="badge__more"
      >
        <span class="badge__label">Gender:</span>
        <slot name="gender" />
      </p>
      <!-- /// -->

      <!-- STATUS -->
      <p
        v-if="$slots['status']"
        class="badge__more"
      >
        <span class="badge__label">Status:</span>
        <slot name="status" />
      </p>
      <!-- /// -->

      <!-- ORIGIN -->
      <p
        v-if="$slots['origin']"
        class="badge__more"
      >
        <span class="badge__label">Origin:</span>
        <slot name="origin" />
      </p>
      <!-- /// -->

      <!-- LOCATION -->
      <p
        v-if="$slots['location']"
        class="badge__more"
      >
        <span class="badge__label">Location:</span>
        <slot name="location" />
      </p>
      <!-- /// -->
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
  },
};
</script>
<style lang="scss" src="./Badge.scss" />
