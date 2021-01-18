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
          grid__col-xs-12
          grid__col-sm-6
          grid__col--end
        ">
          right
        </li>
        <!-- /// -->
      </ul>
    </section>
  </nav>
</template>
<style lang="scss" src="./TheNavigation.scss" />
