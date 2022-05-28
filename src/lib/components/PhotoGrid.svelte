<script>
  export let num = 6
</script>

<section>
  {#each {length: num} as square}
    <div class="square"></div>
  {/each}
</section>

<style>
  section {
    background: var(--lightblue);
    display: flex;
    gap: 1rem;
    margin: -3rem -20rem;
    padding: 3rem 20rem;
    flex-wrap: wrap;
  }

  .square {
    aspect-ratio: 1;
    /* flex: 33.3%; */
    width: calc(33.3% - 0.66rem);
    background: grey;
  }
</style>