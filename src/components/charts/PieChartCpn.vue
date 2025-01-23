<script setup>
import { defineProps, ref } from 'vue'
import { AgCharts } from 'ag-charts-vue3'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
const totalValue = props.data.reduce(((acc, { amount}) => acc + amount), 0)
const series = ref({
  type: 'pie',
  angleKey: 'amount',
  calloutLabelKey: 'asset',
  sectorLabelKey: 'amount',
  sectorLabel: {
    color: 'white',
    fontWeight: 'bold',
    formatter: ({ value }) => `${((value / totalValue)*100).toFixed(0)}%`,
  },
})

const options = ref({
  data: props.data,
  title: {
    text: props.title,
  },
  series: [series.value],
})


</script>

<template>
  <AgCharts :options="options"  />
</template>

<style scoped></style>
