<template>
    <MainLayout>

<div>
  <div class="page-title">
    <h3>Planning</h3>
    <h4>12 212</h4>
  </div>

  <section>
    <div>
      <p>
        <strong>Girlfriend:</strong>
        12 122 of 14 0000
      </p>
      <div class="progress" >
        <div
            class="determinate green"
            style="width:40%"
        ></div>
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
  name: 'PlanningPage',
  components:
    {
      MainLayout,

    },
};
</script>
