<template>
  <nav class="the-navigation">
    <form
      class="grid"
      autocomplete="off"
      novalidate
      onsubmit="event.preventDefault();"
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
            :placeholder="$t(`message.inputs.placeholder`)"
            @input="startSearch"
            @focus="setFocus"
            @blur="setFocus"
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
                  :items="getSearchResults"
                  @blur="focus === true ? null : stopSearch()"
                >
                  <!-- RESULTS -->
                  <template
                    slot="content"
                    slot-scope="row"
                  >
                    <template v-for="(item, index) in row">
                      <span
                        :key="index"
                        v-html="
                          helper.highlightSubString({
                            subString: getSearchKey,
                            string: item.name,
                            style: 'highlight'
                          })"
                      />
                    </template>
                  </template>
                  <!-- /// -->
                </BaseDataList>
              </transition>
            </template>
            <!-- /// -->

            <template #icon>
              <transition
                mode="out-in"
                name="loading"
              >
                <!-- icon search -->
                <span
                  v-if="!getSearchLoading"
                  :key="false"
                >
                  <BaseIcon
                    :name="$icons.search"
                    size="medium"
                    color="dark-gray"
                  />
                </span>
                <!-- /// -->

                <!-- loader -->
                <img
                  v-else
                  :key="true"
                  class="loader"
                  src="@/assets/images/svg/loader.svg"
                />
                <!-- /// -->
              </transition>
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
            is-light
            @click="changeExtraPanel"
          >
              <template #content>
                <BaseIcon
                  :name="$icons.hamburger"
                  size="normal"
                  color="dark-gray"
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
import { Utilities } from '@/helpers';

export default {
  name: 'TheNavigation',

  data() {
    return {
      focus: false,
      helper: Utilities,
    };
  },

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
      'getSearchLoading',
      'getSearchResults',
      'getSearchKey',
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
      'changeSearchLoading',
      'resetSearchState',
      'changeSearchKey',
    ]),

    changeExtraPanel() {
      // SEARCH PANEL VISIBILITY
      this.changeExtraPanelState({
        value: !this.getExtraPanelState,
      });

      this.stopSearch();
    },

    async startSearch(e) {
      console.log(e);
      const { length: size } = e;

      // SET KEY SEARCH
      // IN STORE
      this.changeSearchKey({
        key: e,
      });

      // START SEARCH
      // IF KEY LENGHT > 3
      (size > 3) ? await Response.getSearchresults() : this.stopSearch();
    },

    stopSearch() {
      this.$nextTick(() => this.resetSearchState({ value: false }));
    },

    setFocus(e) {
      const { state } = e;
      this.focus = state;
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
