<script>
  import { scaleLinear } from "d3-scale";

  let {
    width = 500,
    height = 200,
    padding = { top: 20, right: 15, bottom: 22, left: 25 },
    points = [],
    yTicks = [],
    xTicks = []
  } = $props();

  let xScale = $state();
  let yScale = $state();

  const minX = points[0].x;
  const maxX = points[points.length - 1].x;

  xScale = scaleLinear()
    .domain([minX, maxX])
    .range([padding.left, width - padding.right]);

  yScale = scaleLinear()
    .domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
    .range([height - padding.bottom, padding.top]);

  function mousemove(event) {}
</script>

<svg {mousemove}>
  <slot name="y-axis">
    <g class="axis y-axis" transform="translate(0, {padding.top})">
      {#each yTicks as tick}
        <g
          class="tick tick-{tick}"
          transform="translate(0, {yScale(tick) - padding.bottom})"
        >
          <line x2="100%" />
          <text y="-4">{tick}</text>
        </g>
      {/each}
    </g>
  </slot>

  <slot name="x-axis">
    <g class="axis x-axis">
      {#each xTicks as tick}
        <g
          class="tick tick-{tick}"
          transform="translate({xScale(tick)},{height})"
        >
          <line y1="-{height}" y2="-{padding.bottom}" x1="0" x2="0" />
          <text y="-2">{tick}</text>
        </g>
      {/each}
    </g>
  </slot>

  <slot />
</svg>

<style>
  svg {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: visible;
  }

  .tick {
    font-size: 0.725em;
    font-weight: 200;
  }

  .tick line {
    stroke: #aaa;
    stroke-dasharray: 2;
  }

  .tick text {
    fill: #666;
    text-anchor: start;
  }

  .tick.tick-0 line {
    stroke-dasharray: 0;
  }

  .x-axis .tick text {
    text-anchor: middle;
  }
</style>
