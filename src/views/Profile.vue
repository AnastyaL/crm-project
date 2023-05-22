<template>
    <main-layout>

<div>
  <div class="page-title">
    <h3>Profile</h3>
  </div>

  <form class="form">
    <div class="input-field">
      <input
          id="description"
          type="text"
      >
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="description">Name</label>
      <span
            class="helper-text invalid">name</span>
    </div>

    <button class="btn waves-effect waves-light" type="submit">
      Refresh
      <i class="material-icons right">send</i>
    </button>
  </form>
</div>

    </main-layout>
</template>

<script>
// @ is an alias to /src
import MainLayout from '@/components/MainLayout.vue';

export default {
  name: 'ProfilePage',
  components:
    {
      MainLayout,

    },
};
</script>
