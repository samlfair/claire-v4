<script>
  import logo from "./logo.png"
  import Thumbnail from "../lib/components/Thumbnail.svelte";
</script>

<main>
  <nav>
    <img src={logo} alt="logo">
    <p>Jewellery · Design</p>
  </nav>
  <h2>Dolor sit</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, laboriosam modi! Est in recusandae porro! Fugiat assumenda, labore hic at consectetur eius accusamus ipsa nam quaerat veniam tenetur eos voluptatibus!
  </p>
  <Thumbnail />
  <Thumbnail reverse />
  <Thumbnail />
</main>

<style>
  :global(html, body) {
    margin: 0;
    body: 0;
  }

  img {
    max-width: clamp(200px, 30vw, 400px);
    margin: 1.5rem auto;
    display: block;
  }

  :global(body) {
    min-height: 100vh;
  }

  main {
    width: 100%;
    max-width: min(calc(100vw - 5rem), 800px);
    margin: auto;
  }

  nav {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 3rem auto;
    text-align: center;
    color: rgba(0,0,0,0.6)
  }
  
  :global(h2) {
    font-family: "Americana";
    font-size: 2rem;
  }

  :global(p) {
    font-family: "Sweet Sans Pro";
    margin: 0;
  }
</style>