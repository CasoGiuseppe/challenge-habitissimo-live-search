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
          grid__col-sm-8
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
        <li
          v-if="extraPanel"
          class="
            the-navigation__search
            grid__col-xs-12
            grid__col-sm-4
            grid__col--end
        ">
          <BaseInput
            id="live-search"
            placeholder="Qué necesitas..."
          >
            <template #icon>
              <BaseIcon
                :name="$icons.search"
                size="medium"
                color="dark-gray"
              />
            </template>
          </BaseInput>
        </li>
        <!-- /// -->

        <!-- MOBILE BTN TRIGGER -->
        <li
          v-if="$mq === 'mobile'"
          class="the-navigation__mobile-trigger"
        >
          <BaseButton
            is-squared
            @click="changeExtraPanel"
          >
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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TheNavigation',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/basics/base-button/BaseButton'),
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/basics/base-icon/BaseIcon'),
    BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/basics/base-input/BaseInput'),
  },

  computed: {
    ...mapGetters('cosmetic', [
      'getExtraPanelState',
    ]),

    extraPanel() {
      return (this.$mq === 'mobile' && this.getExtraPanelState) || (this.$mq === 'tablet');
    },
  },

  methods: {
    ...mapActions('cosmetic', [
      'changeExtraPanelState',
    ]),

    changeExtraPanel() {
      this.changeExtraPanelState({
        value: !this.getExtraPanelState,
      });
    },
  },
};
</script>
<style lang="scss" src="./TheNavigation.scss" />
