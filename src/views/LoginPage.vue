<template>
<emptyLayout><loginForm/></emptyLayout>
</template>

<script>
// @ is an alias to /src
import emptyLayout from '@/components/emptyLayout.vue';
import loginForm from '@/components/loginForm.vue';
import messages from '@/utils/messages';

export default {
  name: 'LoginPage',
  components:
    {
      emptyLayout,
      loginForm,
    },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
};
</script>
