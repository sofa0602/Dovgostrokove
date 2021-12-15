<template>
  <div class="col s12 m6 l4">
    <div class="card green accent-3 bill-card">
      <div class="card-content black-text">
        <span class="card-title">{{ 'BillInCurrency' | localize }}</span>

        <p class="currency-line" v-for="cur of currencies" :key="cur">
          <span>{{ getCurrency(cur) | currency(cur) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['UAH', 'USD', 'EUR'],
  }),
  computed: {
    base() {
      return this.$store.getters.info.bill / this.rates['UAH']
    },
  },
  methods: {
    getCurrency(currency) {
      console.log(' HomeBill.vue - rates: ', this.rates)
      return Math.floor(this.base * this.rates[currency] * 100) / 100
    },
  },
}
</script>
