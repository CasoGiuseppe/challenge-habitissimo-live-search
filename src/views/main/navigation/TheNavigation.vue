<template>
  <nav class="the-navigation">
    <section class="grid">
      <ul class="
        the-navigation__content
        grid__row
        grid__row--isWrap
      ">
        <!-- LOGO -->
        <li class="
          grid__col-xs-12
          grid__col-sm-6
        ">
          <h1 class="the-navigation__wrap">
            <a href="/">
              <figure class="the-navigation__logo">
                <img
                  src="@/assets/images/elements/logo.webp"
                  :alt="$t(`message.company`)"
                >
              </figure>
            </a>
          </h1>
        </li>
        <!-- /// -->

        <!-- LIVE SEARCH + BTN-->
        <li class="
          the-navigation__search
          grid__col-xs-12
          grid__col-sm-6
          grid__col--end
        ">
          live search
          <!-- <span class="the-navigation__mobile-trigger">
            <BaseButton is-squared>
              <template #content>
                <BaseIcon
                  :name="$icons.bill"
                  size="normal"
                  color="light"
                />
              </template>
            </BaseButton>
          </span> -->
        </li>
        <!-- /// -->

        <!-- MOBILE BTN TRIGGER -->
        <li
          v-if="$mq === 'mobile'"
          class="the-navigation__mobile-trigger"
        >
          <BaseButton is-squared>
              <template #content>
                <BaseIcon
                  :name="$icons.hamburger"
                  size="normal"
                  color="light"
                />
              </template>
            </BaseButton>
        </li>
        <!-- /// -->
      </ul>
    </section>
  </nav>
</template>
<script>
export default {
  name: 'TheNavigation',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/basics/base-button/BaseButton'),
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/basics/base-icon/BaseIcon'),
  },
};
</script>
<style lang="scss" src="./TheNavigation.scss" />
