<script>
  import Observer from '$lib/Observer.svelte'
  import Spacer from '$lib/Spacer.svelte'
  import HorizontalBarChart from '$lib/HorizontalBarChart.svelte'
  import frameworkUsage from '$lib/framework-usage'

  let innerWidth
  let innerHeight

  let year = 2016
  function setYear(value) {
    year = value
  }

  $: data = frameworkUsage.find(d => d.year === year).data

  const years = frameworkUsage.map(d => d.year)
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="grid">
  <div class="left">
    {#each years as year}
      <Observer onEnter={() => setYear(year)}>
        <h2>{year}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur culpa
          debitis explicabo fuga, harum impedit iste itaque laudantium nam nulla perferendis
          perspiciatis quasi quod repellendus sit tempore temporibus unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur culpa
          debitis explicabo fuga, harum impedit iste itaque laudantium nam nulla perferendis
          perspiciatis quasi quod repellendus sit tempore temporibus unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur culpa
          debitis explicabo fuga, harum impedit iste itaque laudantium nam nulla perferendis
          perspiciatis quasi quod repellendus sit tempore temporibus unde.
        </p>
      </Observer>
      <Spacer h="100vh" />
    {/each}
  </div>
  <div class="right">
    <div class="view">
      <h2>Frontend Frameworks Usage</h2>
      <HorizontalBarChart
        {data}
        width={innerWidth / 2}
        height={innerHeight / 2}
        xKey="percent"
        yKey="name"
        margin={{ top: 0, right: 25, bottom: 25, left: 75 }}
      />
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .left {
    padding: 0 1rem;
  }

  .right {
    position: relative;
  }

  .view {
    position: fixed;
    width: 50%;
    text-align: center;
    height: 100vh;
    top: 0;
    right: 0;
  }
</style>
