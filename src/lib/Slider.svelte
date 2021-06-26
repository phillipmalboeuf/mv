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
      },
      breakpoints: {
        '(max-width: 900px)': {
          slidesPerView: 1.25
        }
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
  .container {
    position: relative;
    margin: 4rem 0 2rem;
    width: 100%;
  }

  .keen-slider {
    cursor: ew-resize;
    padding-bottom: 3rem;
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