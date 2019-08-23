<script>
  import { TimeSeries, DataSet } from "../../src/index.svelte";
  import points from "./data.mjs";

  const padding = { top: 20, right: 15, bottom: 22, left: 25 };
  const yTicks = [0, 2, 4, 6, 8];
  const xTicks = [1980, 1990, 2000, 2010];

  const width=900;
  const height=300;
</script>

<div>
  <h1>Example</h1>
  <TimeSeries {padding} {width} {height} {xTicks} {yTicks} {points}>
    <DataSet {padding} {width} {height} {xTicks} {yTicks} {points} />
  </TimeSeries>
</div>
