<template>
  <section class="detail">
    <div class="grid">
      <Badge
        v-if="getSelectedItem"
        :image="getSelectedItem.image"
        :items="$constants.DETAILS"
      >
        <template #title>
          {{ getSelectedItem.name }}
        </template>

        <template
          slot="content"
          slot-scope="row"
        >
          <template v-for="item in row">
            <span :key="item.label">
              <span class="badge__label">
                {{ item.label }}:
              </span>
              {{ getSelectedItem[item.value] }}
            </span>
          </template>
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
