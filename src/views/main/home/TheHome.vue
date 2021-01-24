<template>
  <section class="the-home">
    <div class="grid">
      <UserMessage
        is-so-big
        is-light
      >
        <template #icon>
          <BaseIcon
            :name="$icons.characterSearch"
            size="xxlarge"
            color="light"
          />
        </template>
        <template #title>
          {{ $t(`message.user.home.title`) }}
        </template>
        <template #message>
          {{ $t(`message.user.home.message`) }}
        </template>
      </UserMessage>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Home',

  components: {
    BaseIcon: () => import(/* webpackChunkName: "BaseIcon" */ '@/components/basics/base-icon/BaseIcon'),
    UserMessage: () => import(/* webpackChunkName: "UserMessage" */ '@/components/user-message/UserMessage'),
  },
};
</script>
<style lang="scss" src="./TheHome.scss" />
