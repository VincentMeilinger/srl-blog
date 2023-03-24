<script>
  import { onMount } from 'svelte';
  let count = 1;
  let images = ["mean0", "mean1", "mean2", "mean3", "mean4", "mean5", "mean6", "mean7", "mean8", "mean9", "mean10", "mean11", "mean12", "mean13", "mean14", "mean15", "mean16", "mean17", "mean18", "mean19", "mean20", "mean21"];
  console.log("RUNS")
  // the `$:` means 're-run whenever these values change'
  onMount(() => document.getElementById(images[0] + "-2").classList.toggle('hidden'));
  
  function next_sample() {
    document.getElementById(images[count-1] + "-2").classList.toggle('hidden');
    count = get_next();
    document.getElementById(images[count-1] + "-2").classList.toggle('hidden');
  }

  function prev_sample() {
    document.getElementById(images[count-1] + "-2").classList.toggle('hidden');
    count = get_prev();
    document.getElementById(images[count-1] + "-2").classList.toggle('hidden');
  }

  function reset() {
    for(var i=0; i<images.length; i++) {
      document.getElementById(images[i] + "-2").classList.add('hidden');
    }
    count = 1;
    document.getElementById(images[count-1] + "-2").classList.toggle('hidden');
  }

  function get_next() {
    if(count >= 22) {
      return 1;
    }
    return count + 1;
  }

  function get_prev() {
    if(count <= 1) {
      return 22;
    }
    return count - 1;
  }
</script>

<style>
  

  .mean {
    position: absolute;
    
    top: 0;
    left: 0;
    
    width: 100%;
    aspect-ratio: 1;
    opacity: 1; 
    -moz-transition: opacity 0.5s ease; 
    -webkit-transition: opacity 0.5s ease; 
    transition: opacity 0.5s ease;
  }

  .hidden{
    opacity: 0;
      
  }

  .container {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
  }
</style>


<div class="container">
  {#each images as image (image)}
    <img src={"/plots2/" + image + ".png"} alt={image + ".png"} id={image + "-2"} class="hidden mean" />
  {/each}
</div>
<div style="width: 70%;margin: 0% 15% 5% 15%;">
  <button on:click={prev_sample}> &lt </button>
  <p style="display: inline;"> Sample {count} </p>
  <button on:click={next_sample}> &gt </button>
  <button on:click={reset} style="float:right;">Reset</button>
</div>


