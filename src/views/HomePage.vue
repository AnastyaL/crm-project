<template>
    <MainLayout>

<div>
  <div class="page-title">
    <h3>Account</h3>

    <button class="btn waves-effect waves-light btn-small" @click="refresh">
      <i class="material-icons">refresh</i>
    </button>
  </div>

  <loader v-if="loading" />

  <div v-else class="row" >
    <home-bill
    :rates="currency.rates" />

    <home-currency
    :rates="currency.rates"
    :date="currency.date"
    />
  </div>
</div>

    </MainLayout>
</template>
<script>
// @ is an alias to /src
import MainLayout from '@/components/MainLayout.vue';
import HomeBill from '@/components/HomeBill.vue';
import HomeCurrency from '@/components/HomeCurrency.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'HomePage',
  data: () => ({
    loading: true,
    currency: null,
  }),
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency');
    this.loading = false;
  },
  methods: {
    async refresh() {
      this.loading = true;
      this.currency = await this.$store.dispatch('fetchCurrency');
      this.loading = false;
    },
  },
  components:
    {
      MainLayout,
      HomeBill,
      HomeCurrency,
      Loader,
    },
};
</script>
