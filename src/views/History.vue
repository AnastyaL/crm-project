<template>
    <MainLayout>

<div>
  <div class="page-title">
    <h3>Record history</h3>
  </div>

  <div class="history-chart">
    <canvas></canvas>
  </div>

  <section>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Category</th>
        <th>Type</th>
        <th>Open</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td>1212</td>
        <td>12.12.32</td>
        <td>name</td>
        <td>
          <span class="white-text badge red">Expense</span>
        </td>
        <td>
          <button class="btn-small btn">
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</div>

    </MainLayout>
</template>
<script>
// @ is an alias to /src
import MainLayout from '@/components/MainLayout.vue';

export default {
  name: 'HistoryPage',
  components:
    {
      MainLayout,

    },
};
</script>
