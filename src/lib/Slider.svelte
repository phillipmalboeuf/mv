<script lang="ts">
	import type { Entry, RichTextContent } from 'contentful'
  import 'keen-slider/keen-slider.min.css'
  import KeenSlider from 'keen-slider'
  import { onMount } from 'svelte'

  import Hero from './Hero.svelte'
  import Text from './Text.svelte'
  import Etude from './Etude.svelte'
  

	export let slides: Entry<{ titre: string }>[]
  export let noLines = false
  export let spaced = true

  let element: HTMLDivElement
  let slider: KeenSlider
  let current = 0

  onMount(() => {
    slider = new KeenSlider(element, {
      loop: true,
      centered: true,
      slidesPerView: spaced ? 1.5 : 3,
      ...spaced && { spacing: 20 },
      slideChanged: instance => {
        current = instance.details().relativeSlide
      }
    })

    return () => slider.destroy()
  })
</script>

<div class="container">
  <div class="keen-slider" bind:this={element}>
    {#each slides as slide, i}
    <article class="keen-slider__slide{current === i ? ' current' : ''}" on:click={() => slider.moveToSlideRelative(i)}>
      {#if slide.sys.contentType.sys.id === 'hero'}
      <Hero hero={slide.fields} />
      {:else if slide.sys.contentType.sys.id === 'text'}
      <Text text={slide.fields} />
      {:else if slide.sys.contentType.sys.id === 'item'}
      <Etude etude={slide.fields} />
      {/if}
    </article>
    {/each}
  </div>

  {#if !noLines}
  <div class="lines">
    {#each slides as slide, i}
    <button class="line" class:active={i === current} on:click={() => slider.moveToSlideRelative(i)}>Slide {i}</button>
    {/each}
  </div>
  {/if}
</div>

<style>
  .keen-slider {
    cursor: ew-resize;
    padding-bottom: 3rem;
  }

  /* .slider::-webkit-scrollbar {
    height: 4px;
    cursor: pointer;
  }

  .slider::-webkit-scrollbar-thumb {
    background: var(--light-1);
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    cursor: pointer;
  } */

  

  .container {
    position: relative;
    margin: 4rem 0;
  }

    .keen-slider__slide {
      transition: opacity 666ms;
    }

    .keen-slider__slide:not(.current) {
      opacity: 0.5;
    }

    .lines {
      display: flex;
      border-bottom: 1px solid var(--text);
    }

      .line {
        cursor: pointer;
        width: 100%;
        height: 10px;
        background: var(--light-1);
        color: var(--light-1);
        overflow: hidden;
        border: none;
        opacity: 0;
        transition: opacity 666ms;
      }

        .line.active {
          opacity: 1;
        }
</style>