<script lang="ts">
	import type { Asset, Entry } from 'contentful'
  import Animation from './Animation.svelte'
  import Picture from './Picture.svelte'

  export let titre: string
	export let animations: Entry<{ titre: string, media: Asset }>[]
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
      <svg viewBox="0 0 337 271" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.14941 5.49097H187C255.078 5.49097 331.623 51.6799 331.623 139.144C331.623 226.608 255.078 265.918 187 265.918H35.6321" stroke="#009639" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <Picture media={animation.fields.media} />
    </figure>
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    width: 100%;
  }

  h5 {
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
      width: 666px;
      margin: -20rem calc(var(--gutter) + 12vw) 0 auto;
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
    }

    figure :global(img) {
      position: relative;
      width: auto;
      z-index: 1;
    }
</style>