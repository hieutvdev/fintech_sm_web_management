<script setup>
import PieChartCpn from '@/components/charts/PieChartCpn.vue'

const dataPie = [
  { asset: 'Stocks', amount: 60000 },
  { asset: 'Bonds', amount: 40000 },
  { asset: 'Cash', amount: 70000 },
]
</script>

<template>
  <div>
    <PieChartCpn title="Hi" :data="dataPie" />
  </div>
</template>

<style scoped></style>
