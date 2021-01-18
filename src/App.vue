<template>
  <main
    id="app"
    class="app"
  >
    <!-- HEADER ROUTER VIEW: LOGO + LIVE SEARCH -->
    <header class="app__header">
      <router-view name="header" />
    </header>
    <!-- /// -->

    <!-- MAIN CONTENT ROUTER VIEW: HOME + SEARCH RESULT-->
    <section class="app__main">
      <router-view name="main" />
    </section>
    <!-- /// -->

    <!-- FOOTER CONTENT ROUTER VIEW : MOCK BUDGET BTN + COPY-->
    <footer class="app__footer">
      <router-view name="footer" />
    </footer>
    <!-- /// -->
  </main>
</template>
<style lang="scss" src="@/styles/index.scss" />
