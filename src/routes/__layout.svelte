<script context="module">
  import Header from "$lib/components/Header.svelte"
  import Nav from "$lib/components/Nav.svelte"
  import Footer from "../lib/components/Footer.svelte";
  import { repositoryName } from "$lib/prismicio"
  import { createClient } from '$lib/prismicio'


  export async function load({ fetch }) {
    const client = createClient({ fetch })

    const config = await client.getSingle('config')

    

    return {
      props: {
        config
      }
    };
  }
</script>

<script>
  export let config

  const { site_title, subtitle, config_theme, menu } = config.data
</script>

<svelte:head>
  <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={repositoryName}"></script>
  <title>{site_title}</title>
</svelte:head>

<Header {site_title} {subtitle} />
<Nav {menu} {config_theme} />

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