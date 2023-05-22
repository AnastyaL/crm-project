<template>
    <main-layout>

<div>
  <div class="page-title">
    <h3>New record</h3>
  </div>

  <form class="form">
    <div class="input-field" >
      <select>
        <option
        >name cat</option>
      </select>
           <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label>Choose category</label>
    </div>

    <p>
             <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
        />
        <span>Income</span>
      </label>
    </p>

    <p>
             <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label>
        <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
        />
        <span>Expense</span>
      </label>
    </p>

    <div class="input-field">
      <input
          id="amount"
          type="number"
      >
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="amount">Amount</label>
      <span class="helper-text invalid">amount password</span>
    </div>

    <div class="input-field">
      <input
          id="description"
          type="text"
      >
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label for="description">Description</label>
      <span
            class="helper-text invalid">description password</span>
    </div>

    <button class="btn waves-effect waves-light" type="submit">
      Create
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
  name: 'RecordPage',
  components:
    {
      MainLayout,
    },
};
</script>
