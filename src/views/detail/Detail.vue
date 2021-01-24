<template>
  <section class="detail">
    <div class="grid">
      <Badge
        v-if="getSelectedItem"
        :image="getSelectedItem.image"
      >
        <template #title>
          {{ getSelectedItem.name }}
        </template>

        <template #gender>
          {{ getSelectedItem.gender }}
        </template>

        <template #status>
          {{ getSelectedItem.status }}
        </template>

        <template #origin>
          {{ getSelectedItem.origin }}
        </template>

        <template #location>
          {{ getSelectedItem.location }}
        </template>
      </Badge>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Detail',

  components: {
    Badge: () => import(/* webpackChunkName: "Badge" */ '@/components/badge/Badge'),
  },

  computed: {
    ...mapGetters('search', [
      'getSelectedItem',
    ]),
  },
};
</script>
<style lang="scss" src="./Detail.scss" />
