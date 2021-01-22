<template>
  <nav class="the-navigation">
    <form
      class="grid"
      autocomplete="off"
    >
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
            {{ $t('message.company') }}
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
            @input="startSearch"
          >
            <!-- DATA LIST API RESULTS-->
            <template #data-list>
              <transition
                name="expand"
                @enter="onExpand"
                @leave="onLeave"
              >
                <BaseDataList
                  v-if="getSearchVisibility"
                  :size="6"
                />
              </transition>
            </template>
            <!-- /// -->
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
    </form>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { Response } from '@/services/modules/search';

export default {
  name: 'TheNavigation',

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/basics/base-button/BaseButton'),
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/basics/base-icon/BaseIcon'),
    BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/basics/base-input/BaseInput'),
    BaseDataList: () => import(/* webpackChunkName: "BaseDataList" */ '@/components/basics/base-data-list/BaseDataList'),
  },

  computed: {
    ...mapGetters('cosmetic', [
      'getExtraPanelState',
    ]),

    ...mapGetters('search', [
      'getSearchVisibility',
    ]),

    // GET EXTRA PANEL VIEW
    // ON DEVICE MODE
    extraPanel() {
      return (this.$mq === 'mobile' && this.getExtraPanelState) || (this.$mq === 'tablet');
    },
  },

  methods: {
    ...mapActions('cosmetic', [
      'changeExtraPanelState',
    ]),

    ...mapActions('search', [
      'changeSearchVisibility',
    ]),

    changeExtraPanel() {
      this.changeExtraPanelState({
        value: !this.getExtraPanelState,
      });
    },

    async startSearch(e) {
      const { length: size } = e;
      size > 3 ? await Response.getSearchresults() : this.changeSearchVisibility({ value: false });
    },

    onExpand(e) {
      requestAnimationFrame(() => { e.style.height = `${e.scrollHeight}px`; });
    },

    onLeave(e) {
      requestAnimationFrame(() => { e.style.height = '0px'; });
    },
  },
};
</script>
<style lang="scss" src="./TheNavigation.scss" />
