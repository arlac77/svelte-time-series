<script>
  import { TimeSeries,DataSet } from "../../src/index.svelte";
  import points from "./data.mjs";

  const yTicks = [0, 2, 4, 6, 8];
  const xTicks = [1980, 1990, 2000, 2010];
</script>

<div>
  <h1>Example</h1>
  <TimeSeries width="600" height="300" {xTicks} {yTicks} {points}>

<!--
    <DataSet width="600" height="300" {xTicks} {yTicks} {points}/>

    --->
  </TimeSeries>
</div>
