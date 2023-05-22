<template>
    <form class="card auth-card" @submit.prevent="onSubmit">
  <div class="card-content">
    <span class="card-title">Homekeeping</span>
    <div class="input-field">
      <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
            v$.email.$dirty && v$.email.required.$invalid ||
            v$.email.email.$invalid }"
      >
       <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="email">Email</label>
      <small
      v-if="v$.email.$dirty && v$.email.required.$invalid"
      class="helper-text invalid">Email is required</small>
        <small
      v-else-if="v$.email.$dirty && v$.email.email.$invalid"
      class="helper-text invalid">Uncorrect email</small>
    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
            v$.password.$dirty && v$.password.required.$invalid ||
            v$.password.minLength.$invalid }"
      >
       <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="password">Password</label>
      <small class="helper-text invalid"
      v-if=" v$.password.$dirty && v$.password.required.$invalid"
      >Password is required</small>
         <small class="helper-text invalid"
      v-else-if=" v$.password.$dirty && v$.password.minLength.$invalid"
      >Password should have minLength 6</small>
    </div>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Log in
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Have no accuont?
      <router-link to="/register">Sign in</router-link>
    </p>
  </div>
</form>
</template>

<script>
import { email, required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
  name: 'LoginForm',
  data: () => ({

    password: '',
    email: '',

  }),
  setup: () => ({ v$: useVuelidate() }),
  // validationConfig: { $lazy: true },
  validations() {
    return {
      password: { required, minLength: minLength(6) },
      email: { required, email },
    };
  },
  methods: {
    async onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('login', formData);
        this.$router.push('/');
      } catch (e) { console.log('111'); }
    },
  },
};

</script>
