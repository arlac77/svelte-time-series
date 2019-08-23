<script>
  import { scaleLinear } from "d3-scale";

  export let points = [];
  export let yTicks = [];
  export let width = 500;
  export let height = 200;

  export let padding = { top: 20, right: 15, bottom: 20, left: 25 };

  let yScale;

  $: {
    const minX = points[0].x;
    const maxX = points[points.length - 1].x;

    yScale = scaleLinear()
      .domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
      .range([height - padding.bottom, padding.top]);
  }
</script>

<svg>
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
</svg>
