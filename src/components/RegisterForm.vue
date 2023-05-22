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
    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{
            invalid:
            v$.name.$dirty && v$.name.required.$invalid
          }"
      >
       <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="name">Name</label>
      <small class="helper-text invalid"
      v-if="v$.name.$dirty && v$.name.required.$invalid"
      >Name is required</small>
    </div>
    <p>
         <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label>
        <input type="checkbox" v-model="agree" />
        <span>I agree with the rules</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Sign in
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Do you have an account
      <router-link to="/login">Log in!</router-link>
    </p>
  </div>
</form>
</template>

<script>
import { email, required, minLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
  name: 'RegisterForm',
  components: {

  },
  data: () => ({

    password: '',
    email: '',
    name: '',
    agree: false,

  }),
  setup: () => ({ v$: useVuelidate() }),
  // validationConfig: { $lazy: true },
  validations() {
    return {
      password: { required, minLength: minLength(6) },
      email: { required, email },
      name: { required },
      agree: { checked: (v) => v },
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
        name: this.name,
      };

      try {
        await this.$store.dispatch('register', formData);
        this.$router.push('/');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
