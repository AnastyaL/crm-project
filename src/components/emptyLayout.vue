<template>
    <div class="grey darken-1 empty-layout">
        <slot />
    </div>
</template>

<script>

import messages from '@/utils/messages';

export default {
  name: 'emptyLayout',
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Something wrong');
    },
  },
  components: {

  },
};
</script>
