<template>
<emptyLayout><RegisterForm/></emptyLayout>
</template>

<script>
// @ is an alias to /src
import emptyLayout from '@/components/emptyLayout.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'LoginPage',
  components:
    {
      emptyLayout,
      RegisterForm,
    },
};
</script>
