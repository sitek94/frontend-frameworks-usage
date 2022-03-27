<script lang="ts">
  import * as d3 from 'd3'

  export let width = 500
  export let height = 200
  export let margin = { top: 20, right: 15, bottom: 20, left: 25 }
  export let data = []
  export let xKey = 'x'
  export let yKey = 'y'

  const xValue = d => d[xKey]
  const yValue = d => d[yKey]

  $: innerWidth = width - (margin.left + margin.right)
  $: innerHeight = height - (margin.top + margin.bottom)

  $: yScale = d3.scaleBand().domain(data.map(yValue)).range([0, innerHeight]).paddingInner(0.15)

  $: xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, xValue)] as [number, number])
    .range([0, innerWidth])

  $: yTicks = yScale.domain()
  $: xTicks = xScale.ticks()
</script>

<svg {width} {height}>
  <g transform="translate({margin.left},{margin.top})">
    <!-- Y-axis -->
    <g>
      {#each yScale.domain() as tickValue}
        <text
          x={-3}
          dy=".32em"
          style:text-anchor="end"
          y={yScale(tickValue) + yScale.bandwidth() / 2}
        >
          {tickValue}
        </text>
      {/each}
    </g>

    <!-- X-axis -->
    <g>
      {#each xTicks as tickValue}
        <g class="tick" transform="translate({xScale(tickValue)},0)">
          <line y2={innerHeight} />
          <text style:text-anchor="middle" dy=".71em" y={innerHeight + 7}>
            {tickValue}
          </text>
        </g>
      {/each}
    </g>

    <!-- Bars  -->
    <g class="bars">
      {#each data as d, i}
        <rect x={0} y={yScale(yValue(d))} width={xScale(xValue(d))} height={yScale.bandwidth()} />
      {/each}
    </g>
  </g>
</svg>

<style>
  .tick {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 0.725em;
    font-weight: 200;
  }

  .tick line {
    stroke: #e2e2e2;
  }

  .tick text {
    fill: #ccc;
    text-anchor: start;
  }

  .bars rect {
    fill: royalblue;
    stroke: none;
  }
</style>
