<script lang="ts">
  import { onMount } from 'svelte'

  import { draw } from 'svelte/transition'
  let show = false
  let element: SVGSVGElement

  const intersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      show = entry.isIntersecting
    })
  }

  onMount(() => {

    let options = {
      root: null,
      rootMargin: "-50% 0px 0px",
      threshold: 0.5
    }

    const observer = new IntersectionObserver(intersect, options)
    observer.observe(element)

    return () => observer.disconnect()
  })
</script>

<svg width="288" height="288" viewBox="0 0 207 207" fill="none" xmlns="http://www.w3.org/2000/svg" bind:this={element}>
<defs>
<linearGradient id="paint0_linear" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90) ">
<stop offset="0.446" stop-color="#05C3DE"/>
<stop offset="0.446" stop-color="#007DBA"/>
</linearGradient>
<linearGradient id="paint1_linear" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90)">
<stop offset="0.222" stop-color="#009639"/>
<stop offset="0.222" stop-color="#8EDE65"/>
</linearGradient>
</defs>
{#if show}
<path in:draw={{ delay: 100, duration: 666 }} out:draw={{ duration: 666 }} d="M206 69L172 69L138 69L138 35L138 1" stroke="url(#paint1_linear)" stroke-width="46"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="207" height="207">
<path d="M69.5 0.898418L206.602 138L69.5 138L69.5 0.898418Z" fill="black"/>
</mask>
<g mask="url(#mask0)">
<path in:draw={{ duration: 666 }} out:draw={{ delay: 100, duration: 666 }} d="M70 69.5H104H138V103.5V137.5" stroke="url(#paint0_linear)" stroke-width="46" />
</g>
{/if}
</svg>

<!-- <svg width="207" height="207" viewBox="0 0 207 207" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M206 69L172 69L138 69L138 35L138 1" stroke="#8EDE65" stroke-width="46" stroke-miterlimit="1.80775" stroke-linejoin="bevel"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="207" height="207">
<path d="M69.5 0.898418L206.602 138L69.5 138L69.5 0.898418Z" fill="black"/>
</mask>
<g mask="url(#mask0)">
<path d="M70 69.5H104H138V103.5V137.5" stroke="#05C3DE" stroke-width="46" stroke-miterlimit="1.80775"/>
</g>
</svg> -->


<!-- <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
{#if show}
<path transition:draw d="M91.07 91.07H45.37V136.44H91.07V91.07Z" stroke="#007DBA"/>
<path transition:draw d="M91 0H45V55H91V0Z" stroke="#009639"/>
<path transition:draw d="M0 45.37V91.06H45.37H91.06L45.37 45.37H0Z" stroke="#05C3DE"/>
<path transition:draw d="M91.07 45.37H45.37L91.07 91.06V91.07H136.43V45.37H91.07Z" stroke="#8EDD65"/>
{/if}
</svg> -->
