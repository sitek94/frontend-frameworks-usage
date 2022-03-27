<script lang="ts">
  import HorizontalBarChart from '$lib/HorizontalBarChart.svelte'

  const data = [
    {
      name: 'React',
      value: 50
    },
    {
      name: 'Vue',
      value: 30
    },
    {
      name: 'Angular',
      value: 20
    },
    {
      name: 'Ember',
      value: 10
    }
  ]
</script>

<HorizontalBarChart
  {data}
  xKey="value"
  yKey="name"
  height={400}
  margin={{ top: 20, right: 15, bottom: 100, left: 100 }}
/>
