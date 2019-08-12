<script>
  import { scaleLinear } from "d3-scale";

  export let points = [];
  export let yTicks = [];
  export let xTicks = [];
  export let width = 500;
  export let height = 200;

  export let padding = { top: 20, right: 15, bottom: 20, left: 25 };

  $: xScale = scaleLinear()
    .domain([minX, maxX])
    .range([padding.left, width - padding.right]);

  $: yScale = scaleLinear()
    .domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
    .range([height - padding.bottom, padding.top]);

  $: minX = points[0].x;
  $: maxX = points[points.length - 1].x;
  $: path = `M${points.map(p => `${xScale(p.x)},${yScale(p.y)}`).join("L")}`;
  $: area = `${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(
    0
  )}Z`;
</script>

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

  .path-line {
    fill: none;
    stroke: rgb(0, 100, 100);
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 2;
  }

  .path-area {
    fill: rgba(0, 100, 100, 0.2);
  }
</style>

<svg>
  <slot />

  <g class="axis y-axis" transform="translate(0, {padding.top})">
    {#each yTicks as tick}
      <g
        class="tick tick-{tick}"
        transform="translate(0, {yScale(tick) - padding.bottom})">
        <line x2="100%" />
        <text y="-4">{tick}</text>
      </g>
    {/each}
  </g>

  <g class="axis x-axis">
    {#each xTicks as tick}
      <g
        class="tick tick-{tick}"
        transform="translate({xScale(tick)},{height})">
        <line y1="-{height}" y2="-{padding.bottom}" x1="0" x2="0" />
        <text y="-2">{tick}</text>
      </g>
    {/each}
  </g>

  <path class="path-area" d={area} />
  <!--
  <path class="path-line" d={path} />
  -->
</svg>
