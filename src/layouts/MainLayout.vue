<template>
  <div class="app-main-layout">

    <Navbar @toggleSidebar="isOpened = !isOpened" />

    <Sidebar v-model="isOpened" />

    <main class="app-content" :class="{ full: !isOpened }">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/app/Navbar.vue'
import Sidebar from '../components/app/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  },
  data: () => ({
    isOpened: true
  })
}
</script>
