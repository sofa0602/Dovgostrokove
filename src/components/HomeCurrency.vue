<template>
  <div class="col s12 m6 l8">
    <div class="card light-blue darken-4 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">{{ 'CurrencyAmountTitle' | localize }}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>{{ 'Currency' | localize }}</th>
              <th>{{ 'CurrencyType' | localize }}</th>
              <th>{{ 'Date' | localize }}</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cur in currencies" :key="cur">
              <td>{{ cur }}</td>
              <td>{{ rates[cur].toFixed(4) }}</td>
              <td>{{ date | date('date') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates', 'date'],
  data: () => ({
    currencies: ['UAH', 'USD', 'EUR'],
  }),
}
</script>
