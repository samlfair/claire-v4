<script>
  import {colord} from "colord"

  export let config_theme, menu

  const color = colord(config_theme?.data?.color).darken(0.5).toHex()
</script>

<nav style:color>
  <ul class="bound">
    {#each menu as item}
      <li>{item.label}</li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    margin: 0 auto 2rem;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    background: white;
    position: sticky;
    top: 0px;
    padding: 1rem;
    font-family: "Sweet Sans Pro";
    font-size: 0.8em;
    text-transform: uppercase;
    z-index: 2;
  }

  
  nav li:hover {
    color: var(--gold);
  }
</style>