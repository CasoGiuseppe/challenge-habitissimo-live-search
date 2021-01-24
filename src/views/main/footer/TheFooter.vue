<template>
  <section class="
      the-footer
      grid
  ">
    <ul class="
      the-footer__content
      grid__row
      grid__row--isWrap
    ">
      <!-- MOCK: BUDGET BTN -->
      <li class="
        grid__col-xs-12
        grid__col-sm-6
      ">
        <BaseButton>
          <template #content>
            {{ $t(`message.buttons.budget`) }}
            <BaseIcon
              :name="$icons.bill"
              size="normal"
              color="light"
            />
          </template>
        </BaseButton>
      </li>
      <!-- /// -->

      <!-- BTN BUDGET + COPY -->
      <li class="
        grid__col-xs-12
        grid__col-sm-6
        grid__col--end
      ">
        <p
          class="the-footer__copy"
          v-html="$t(`message.copy`)"
        />
      </li>
      <!-- /// -->
    </ul>
  </section>
</template>
<script>
export default {
  name: 'TheFooter',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/basics/base-button/BaseButton'),
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/basics/base-icon/BaseIcon'),
  },
};
</script>
<style lang="scss" src="./TheFooter.scss" />
