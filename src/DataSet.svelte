<script>
  import { scaleLinear } from "d3-scale";

  let { padding, height, width, points = [], yTicks = [] } = $props();

  let path = $state();
  let area = $state();

  let xScale, yScale;

  const minX = points[0].x;
  const maxX = points[points.length - 1].x;

  xScale = scaleLinear()
    .domain([minX, maxX])
    .range([padding.left, width - padding.right]);

  yScale = scaleLinear()
    .domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
    .range([height - padding.bottom, padding.top]);

  path = `M${points.map(p => `${xScale(p.x)},${yScale(p.y)}`).join("L")}`;
  area = `${path}L${xScale(maxX)},${yScale(0)}L${xScale(minX)},${yScale(0)}Z`;
</script>

<svg>
  <path class="path-line" d={path} />
  <path class="path-area" d={area} />
</svg>

<style>
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
