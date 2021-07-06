<script lang="ts">
	import type { Asset, Entry } from 'contentful'
  import Picture from './Picture.svelte'

  export let titre: string
	export let animations: Entry<{ titre: string, media: Asset, marges: string, animation: string }>[]
</script>

<section>
  <h5>{titre.replace('\\', '\n')}</h5>

  <div class="animations">
    {#each animations as animation, i}
    <figure>
      <figcaption>
        {#if animation.fields.titre}
        <h6>{animation.fields.titre}</h6>
        {/if}
      </figcaption>
      <svg viewBox="0 0 507 271" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5H356.851C424.929 5 501.474 51.1889 501.474 138.653C501.474 226.117 424.929 265.427 356.851 265.427H5" stroke="#009639" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="picture {animation.fields.animation}" style="margin: {animation.fields.marges}; animation-delay: {i/2}s;">
        <Picture media={animation.fields.media} />
      </div>
    </figure>
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    width: 100%;
  }

  h5 {
    font-weight: bold;
    padding: 6rem var(--gutter);
    position: sticky;
    top: 10rem;

    @media (max-width: 900px) {
      padding: 3rem var(--gutter);
    }
  }

  h6 {
    font-weight: normal;
    color: var(--light-1);
    margin: 0 var(--gutter);
  }

    .animations {
      width: 800px;
      margin: -20rem calc(var(--gutter) + 12vw) 0 auto;
      // overflow-x: hidden;

      @media (max-width: 900px) {
        width: 742px;
        transform: scale(0.3);
        margin: -200% -66% -200% -62%;
      }
    }

    figure {
      position: relative;
      display: flex;
      align-items: center;
      margin: 0;
      height: 16rem;
    }

      svg {
        position: absolute;
        top: 0;
        right: 8%;
        bottom: 0;
        height: 104%;
        pointer-events: none;
      }

    figure:nth-child(2n) {
      flex-direction: row-reverse;
    }

      figure:first-child svg {
        display: none;
      }

      figure:nth-child(2n - 1) svg {
        transform: scaleX(-1);
        right: auto;
        left: 8%;
      }

    figcaption {
      width: 14rem;
      transform: translateX(66%);

      @media (max-width: 900px) {
        width: 12rem;

        h6 {
          font-size: 25px;
        }
      }
    }

    figure:nth-child(2n - 1) figcaption {
      transform: translateX(-50%);
    }

    @keyframes waves {
      from { transform: rotate(-10deg) }
      to { transform: rotate(10deg) }
    }

    @keyframes roule {
      from { transform: translateX(-10%) }
      to { transform: translateX(10%) }
    }

    @keyframes drop {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0) } 
      40% { transform: translateY(-15%) } 
      60% { transform: translateY(-5%) } 
    }

    @keyframes float {
      from { transform: translateY(-3.33%) }
      to { transform: translateY(3.33%) }
    }

    .picture {
      position: relative;
      z-index: 1;
      animation-iteration-count: infinite;
      animation-direction: alternate;

      &.Waves {
        transform-origin: center 100%;
        animation-name: waves;
        animation-duration: 3.33s;
      }

      &.Roule {
        animation-name: roule;
        animation-duration: 2s;
      }

      &.Drop {
        animation-name: drop;
        animation-duration: 2s;
        animation-direction: normal;
      }

      &.Float {
        animation-name: float;
        animation-duration: 2s;
      }
    }

    figure :global(img) {
      width: auto;
      max-width: 22rem;
    }
</style>