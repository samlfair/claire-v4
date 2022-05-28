<script>
  export let reverse
</script>

<article>
  <div class="padding"  class:reverse>

    <div class="image">
      <div class="picture"></div>
    </div>
    <div class="text">
      <h2>Lorem Ipsum</h2>
      <p>Dolor sit amet.</p>
    </div>
  </div>
</article>

<style>
  article {
    margin: min(10vw, 4rem) 0;
  }

  .padding {
    align-items: center;
    gap: 4vw;
    margin: -1rem;
    padding: 1rem;
    display: flex;
    transition: all 0.6s;
  }
  
  .padding.reverse {
    flex-direction: row-reverse;
  }

  .padding:hover {
    box-shadow: 
      0px 4px 20px 14px rgba(0,0,0,0.08), 
      0px 2px 5px 1px rgba(0,0,0,0.1);
      transform: translateY(-1px)
  }

  .text {
    flex: 2;
  }

  .picture {
    padding-top: clamp(130px, 20vw, 180px);
    background: grey;
  }

  .image {
    /* aspect-ratio: 1.8; */
    flex: 1.2vw;
    align-self: flex-start;
  }

  h2 {
    margin-bottom:  0.5rem;
    font-size: 1.4rem;
  }
</style>