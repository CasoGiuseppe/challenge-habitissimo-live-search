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
            <router-link
              :to="{ name: 'start' }"
            >
              <figure class="the-navigation__logo">
                <img
                  src="@/assets/images/elements/logo.webp"
                  :alt="$t(`message.company`)"
                >
              </figure>
            </router-link>
          </h1>
        </li>
        <!-- /// -->

        <!-- LIVE SEARCH + BTN-->
        <transition
          mode="out-in"
          name="mobileSearch"
        >
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
              v-model.trim="form.search"
              @input="startSearch"
              @focus="inputFocus"
              @blur="setFocus"
              v-click-outside="outClickEvent"
            >
              <!-- TITLE -->
              <template #title>
                {{ $t(`message.inputs.title`) }}
              </template>
              <!-- /// -->

              <!-- DATA LIST API RESULTS-->
              <template #data-list>
                <transition
                  name="expand"
                  mode="out-in"
                  @enter="onExpand"
                  @leave="onLeave"
                >
                  <!-- API CALL RETURN > 0 -->
                  <BaseDataList
                    v-if="showResults"
                    :key="getSearchKey"
                    :size="6"
                    :items="getSearchResults"
                    @click="selectItem"
                    @blur="outClickEvent"
                  >
                    <!-- PRINT RESULTS BY SLOT SCOPE -->
                    <template
                      slot="content"
                      slot-scope="row"
                    >
                      <template v-for="(item, index) in row">
                        <span
                          :key="index"
                          v-html="
                            `${highlightSubString({
                              subString: getSearchKey.trim(),
                              string: item.name,
                              style: 'highlight'
                            })} - <small class='small'>${item.gender}</small>`"
                        />
                      </template>
                    </template>
                    <!-- /// -->
                  </BaseDataList>
                  <!-- /// -->

                  <!-- API CALL RETURN IS VOID -->
                  <UserMessage
                    v-else-if="showError"
                    key="void"
                  >
                    <template #icon>
                      <BaseIcon
                        :name="$icons.sad"
                        size="large"
                        color="warning"
                      />
                    </template>
                    <template #title>
                      {{ $t(`message.user.empty.title`) }}
                    </template>
                    <template #message>
                      {{ $t(`message.user.empty.message`) }}
                    </template>
                  </UserMessage>
                  <!-- /// -->
                </transition>
              </template>
              <!-- /// -->

              <template #icon>
                <transition
                  mode="out-in"
                  name="loading"
                >
                  <!-- ICON: SEARCH -->
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

                  <!-- LOADER -->
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
        </transition>
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
import { highlightSubString } from '@/helpers';
import ClickOutside from 'vue-click-outside';

export default {
  name: 'TheNavigation',

  directives: {
    ClickOutside,
  },

  data() {
    return {
      focus: false,
      highlightSubString,
      timeout: null,
      form: {
        search: '',
      },
    };
  },

  components: {
    BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/basics/base-button/BaseButton'),
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/basics/base-icon/BaseIcon'),
    BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/basics/base-input/BaseInput'),
    BaseDataList: () => import(/* webpackChunkName: "BaseDataList" */ '@/components/basics/base-data-list/BaseDataList'),
    UserMessage: () => import(/* webpackChunkName: "UserMessage" */ '@/components/user-message/UserMessage'),
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
      'getErrorState',
      'getItemByID',
    ]),

    // GET EXTRA PANEL VIEW
    // ON DEVICE MODE
    extraPanel() {
      return (this.$mq === 'mobile' && this.getExtraPanelState) || (this.$mq === 'tablet');
    },

    // SHOW ERROR CONDITION
    showError() {
      return this.getErrorState
              && this.getSearchVisibility;
    },

    // SHOW RESULTS CONDITION
    showResults() {
      return this.getSearchResults.length > 0
              && !this.getErrorState
              && this.getSearchVisibility;
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
      'fillSearchResults',
      'changeSelectedItem',
    ]),

    changeExtraPanel() {
      // SEARCH PANEL VISIBILITY
      this.changeExtraPanelState({
        value: !this.getExtraPanelState,
      });

      // RESET SEARCH
      this.stopSearch();
    },

    async startSearch(e) {
      clearTimeout(this.timeout);

      const { length: size } = e;

      // SET KEY SEARCH
      // IN STORE
      this.changeSearchKey({
        key: e,
      });

      // START SEARCH
      // IF KEY LENGHT > 3
      // AND 1SEC OF DEBOUNCE
      if (size > 3) {
        // START LOADING ICON
        this.changeSearchLoading({ value: true });

        // EMPTY STORE RESULT
        // UNTIL NEW SEARCH
        this.fillSearchResults({ items: [] });

        // DEBOUNCE
        this.timeout = setTimeout(() => {
          Response.getSearchresults({ key: this.getSearchKey });
          clearTimeout(this.timeout);
        }, 1000);
      } else {
        // RESET SEARCH
        this.stopSearch();
      }
    },

    stopSearch() {
      this.resetSearchState({ value: false });
    },

    setFocus(e) {
      const { state } = e;
      this.focus = state;
    },

    inputFocus(e) {
      const { value } = e;
      this.setFocus(e);

      // START NEW SEARCH
      // IF STORE IS EMPTY
      this.getSearchResults.length === 0 && this.startSearch(value);
    },

    onExpand(e) {
      requestAnimationFrame(() => { e.style.height = `${e.scrollHeight}px`; });
    },

    onLeave(e) {
      requestAnimationFrame(() => { e.style.height = '0px'; });
    },

    selectItem({ id, value }) {
      // SET INPUT VALUE
      // WITH OPTION LABEL
      this.form.search = value;

      // SAVE SELECTED ITEM
      this.changeSelectedItem({
        item: this.getItemByID({ id: Math.floor(id) }),
      });

      // CHANGE ROUTE
      // TO DETAIL PAGE
      this.$router.push({
        name: 'detail',
        params: { id },
      });

      // ON MOBILE DEVICE
      // CLOSE INPUT PANEL
      this.changeExtraPanel();
    },

    outClickEvent() {
      this.focus === true ? null : this.stopSearch();
    },
  },
};
</script>
<style lang="scss" src="./TheNavigation.scss" />
