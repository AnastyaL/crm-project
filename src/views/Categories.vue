<template>
<MainLayout>

<div>
  <div class="page-title">
    <h3>Category</h3>
  </div>
  <section>
    <div class="row">
      <div class="col s12 m6">
        <div>
          <div class="page-subtitle">
            <h4>Create</h4>
          </div>

          <form>
            <div class="input-field">
              <input
                  id="name"
                  type="text"
              >
                 <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label for="name">Title</label>
              <span class="helper-text invalid">Enter title</span>
            </div>

            <div class="input-field">
              <input
                  id="limit"
                  type="number"
              >
                 <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label for="limit">Limit</label>
              <span class="helper-text invalid">Minimum value</span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
              Create
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
      <div class="col s12 m6">
        <div>
          <div class="page-subtitle">
            <h4>Edit</h4>
          </div>

          <form>
            <div class="input-field" >
              <select>
                <option>Category</option>
              </select>
                 <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label>Choose category</label>
            </div>

            <div class="input-field">
              <input type="text" id="name">
                 <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label for="name">Title</label>
              <span class="helper-text invalid">TITLE</span>
            </div>

            <div class="input-field">
              <input
                  id="limit"
                  type="number"
              >
               <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
              <label for="limit">Limit</label>
              <span class="helper-text invalid">LIMIT</span>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
              Refresh
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
</MainLayout>
</template>

<script>
// @ is an alias to /src
import MainLayout from '@/components/MainLayout.vue';

export default {
  name: 'CategoriesPage',
  components:
    {
      MainLayout,
    },
};
</script>
