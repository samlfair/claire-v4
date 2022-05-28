<script>
  import logo from "./logo.png"
  import Thumbnail from "$lib/components/Thumbnail.svelte";
  import PhotoGrid from "$lib/components/PhotoGrid.svelte";
  import Spacer from "$lib/components/Spacer.svelte";
</script>

<header>
  
  <img src={logo} alt="logo">

  <p>Jewellery Designer <span class="fancy">&</span> Metalsmith</p>
</header>
<nav>
  <li>Contact</li>
  <li>About</li>
  <li>Commissions</li>
</nav>
<main>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, laboriosam modi! Est in recusandae porro! Fugiat assumenda, labore hic at consectetur eius accusamus ipsa nam quaerat veniam tenetur eos voluptatibus!
  </p>
  <Spacer />
  <PhotoGrid />
  <Spacer />
  <Thumbnail />
  <Thumbnail reverse />
  <Thumbnail />
</main>
<footer>
  	© Claire Littlefair Jewellery {new Date().getFullYear()}
</footer>

<style>
  :global(html, body) {
    margin: 0;
    body: 0;
  }

  :global(:root) {
    --gold: #E7A85D;
    --lightblue: #D6EAEA;
    --blue: #52A3A3;
  }

  img {
    max-width: clamp(200px, 30vw, 400px);
    margin: 1.5rem auto;
    display: block;
  }

  :global(body) {
    min-height: 100vh;
  }

  header,
  main {
    width: 100%;
    max-width: min(calc(100vw - 5rem), 800px);
    margin: auto;
  }

  header {
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

  header p {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  nav {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-bottom: 2rem;
    background: white;
    position: sticky;
    top: 0px;
    padding: 1rem;
    font-family: "Sweet Sans Pro";
    font-size: 0.8em;
    text-transform: uppercase;
    color: var(--blue);
    /* color: var(--gold); */
    /* border-bottom: 2px solid #25A87F; */
    /* border-top: 2px solid #25A87F; */
  }

  
  nav li:hover {
    color: var(--gold);
  }

  footer {
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Sweet Sans Pro";
  }
</style>