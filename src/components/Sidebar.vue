<template>
     <ul class="sidenav app-sidenav" :class="{open: value}">
      <router-link
        v-for="link in links"
        :key="link.url"
        v-slot="{navigate, href, isExactActive}"
        custom
        active-class="active"
        :to="link.url"
        >
      <li :class="isExactActive ? 'active' : ''"><a :href="href" @click="navigate"
      class="waves-effect waves-orange pointer">{{link.title}}</a></li>
      </router-link>
    </ul>
</template>
<script>
export default {
  name: 'SideBar',
  components: {

  },
  props: ['value'],
  data: () => ({
    links: [
      { title: 'Account', url: '/' },
      { title: 'History', url: '/history' },
      { title: 'Planning', url: '/planning' },
      { title: 'New Record', url: '/record' },
      { title: 'Categories', url: '/categories' },
    ],
  }),
};

</script>
