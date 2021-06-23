<script lang="ts">
  import { onMount } from 'svelte'

  let show = false
  let element: HTMLDivElement

  const intersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (!show && entry.isIntersecting) {
        show = true
      }
    })
  }

  onMount(() => {

    let options = {
      root: null,
      rootMargin: "-50% 0px 0px",
      threshold: 1
    }

    const observer = new IntersectionObserver(intersect, options)
    observer.observe(element)

    return () => observer.disconnect()
  })
</script>

<div class:show bind:this={element}>
  <slot />
</div>

<style>
  div {
    opacity: 0;
    transition: opacity 666ms;
  }

  div.show {
    opacity: 1;
  }
</style>