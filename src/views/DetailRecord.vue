<template>
    <MainLayout>

<div>
  <div>
    <div class="breadcrumb-wrap">
      <a href="/history" class="breadcrumb">History</a>
      <a class="breadcrumb">
        Expense
      </a>
    </div>
    <div class="row">
      <div class="col s12 m6">
        <div class="card red">
          <div class="card-content white-text">
            <p>Description:</p>
            <p>Amount:</p>
            <p>Category:</p>

            <small>12.12.12</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </MainLayout>
</template>

<script>
// @ is an alias to /src
import MainLayout from '@/components/MainLayout.vue';

export default {
  name: 'DetailRecord',
  components:
    {
      MainLayout,
    },
};
</script>
