<script>
  import { scaleLinear } from "d3-scale";

  export let points = [];
    export let yTicks = [];
  export let xTicks = [];

  export let padding = { top: 20, right: 15, bottom: 20, left: 25 };
  export let width = 500;
  export let height = 200;

  $: xScale = scaleLinear()
    .domain([minX, maxX])
    .range([padding.left, width - padding.right]);

  $: yScale = scaleLinear()
    .domain([Math.min.apply(null, yTicks), Math.max.apply(null, yTicks)])
    .range([height - padding.bottom, padding.top]);
  $: minX = points[0].x;
  $: maxX = points[points.length - 1].x;

  $: path = `M${points.map(p => `${xScale(p.x)},${yScale(p.y)}`).join("L")}`;

</script>

<svg>
  <path class="path-line" d={path}/>
</svg>
