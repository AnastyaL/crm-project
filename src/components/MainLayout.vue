<template>
<div>
  <loader v-if="loader"/>
<div v-else class="app-main-layout">
  <nav-bar @click="isOpen = !isOpen" />
<side-bar v-model="isOpen"/>
<main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
    <slot />
  </div>
</main>
<FixedBtn />
</div>
</div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import SideBar from '@/components/Sidebar.vue';
import FixedBtn from '@/components/FixedBtn.vue';

export default {
  name: 'MainLayout',
  data: () => ({
    isOpen: true,
    loading: true,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo');
    }
    this.loading = false;
  },
  components: {
    NavBar,
    SideBar,
    FixedBtn,
  },
};
</script>
