<template>
        <div class="col s12 m6 l4">
      <div class="card light-blue bill-card">
        <div class="card-content white-text">
          <span class="card-title">Account</span>

          <p
          class="currency-line">
            <span>
                {{this.base | currency('USD')}}
            </span>
          </p>
                    <p
          v-for="cur of currencies"
          :key="cur"
          class="currency-line">
            <span>
                {{getCurrency(cur) | currency(cur)}}
            </span>
          </p>
        </div>
      </div>
       </div>
</template>
<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['EUR', 'GBP'],
  }),
  computed: {
    base() {
      return this.$store.getters.info.bill;
    },
  },
  methods: {
    getCurrency(currency) {
      console.log('+++++');
      return Math.floor(this.base * this.rates[currency]);
    },
  },
};

</script>
