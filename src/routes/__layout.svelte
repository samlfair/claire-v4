<script>
  import Header from "$lib/components/Header.svelte"
  import Nav from "$lib/components/Nav.svelte"
  import Footer from "../lib/components/Footer.svelte";
  import { repositoryName } from "$lib/prismicio"
</script>

<svelte:head>
  <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={repositoryName}"></script>
</svelte:head>

<Header />
<Nav />
<main>
  <slot />
</main>
<Footer />

<style>
  :global(body) {
    margin: 0;
    min-height: 100vh;
  }

  :global(:root) {
    --gold: #E7A85D;
    --lightblue: #D6EAEA;
    --blue: #52A3A3;
  }

    
  :global(h2, h3) {
    font-family: "Americana";
    font-size: 2rem;
  }

  :global(p, li) {
    font-family: "Sweet Sans Pro";
  }

  :global(.bound) {
    width: 100%;
    max-width: min(calc(100vw - 5rem), 800px);
    margin: auto;
  }
</style>