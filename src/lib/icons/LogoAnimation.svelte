<script lang="ts">
  import { onMount } from 'svelte'

  import type { TransitionConfig } from 'svelte/transition'
  import { draw } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'

  let show = false
  let showIn = false
  let showOut = false
  let element: HTMLElement

  const intersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      show = entry.isIntersecting
      showIn = entry.isIntersecting
    })
  }

  function reverseDraw(node: SVGElement & { getTotalLength(): number }, {
    delay = 0,
    duration,
    easing = cubicOut
  }): TransitionConfig {
    const len = node.getTotalLength();

    return {
      delay,
      duration,
      easing,
      css: (t, u) => `stroke-dasharray: ${t * len} ${u * len};stroke-dashoffset: ${t*len}`
    };
  }


  onMount(() => {

    let options = {
      root: null,
      rootMargin: "0px 0px 0px",
      threshold: [0]
    }

    const observer = new IntersectionObserver(intersect, options)
    observer.observe(element)

    return () => observer.disconnect()
  })
</script>

<center bind:this={element}>
<svg width="193" height="77" viewBox="0 0 140 46" fill="none" xmlns="http://www.w3.org/2000/svg">
{#if showIn}
<line in:draw={{ duration: 333, easing: cubicIn }} out:reverseDraw={{ duration: 666 }} x2="140" y1="23" y2="23" stroke="url(#paint0_linear)" stroke-width="46"/>
<defs>
<linearGradient id="paint0_linear" x1="15.8449" y1="46.9987" x2="120.818" y2="46.9987" gradientUnits="userSpaceOnUse">
<stop stop-color="#05C3DE" stop-opacity="0" />
<stop offset="1" stop-color="#05C3DE"/>
</linearGradient>
</defs>
{/if}
</svg>

<svg width="288" height="287" viewBox="0 0 207 207" style="margin: -1px -2px -95px -99px;" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="main0_linear" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90) ">
<stop offset="0.446" stop-color="#05C3DE"/>
<stop offset="0.446" stop-color="#007DBA"/>
</linearGradient>
<linearGradient id="main1_linear" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90)">
<stop offset="0.222" stop-color="#009639"/>
<stop offset="0.222" stop-color="#8EDE65"/>
</linearGradient>
</defs>
{#if show}
<path in:draw={{ delay: 100 + 333, duration: 666, easing: cubicOut }} out:draw={{ duration: 666 }} d="M206 69L172 69L138 69L138 35L138 1" stroke="url(#main1_linear)" stroke-width="46"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="207" height="207">
<path d="M69.5 0.898418L206.602 138L69.5 138L69.5 0.898418Z" fill="black"/>
</mask>
<g mask="url(#mask0)">
<path in:draw={{ delay: 333, duration: 666, easing: cubicOut }} out:draw={{ delay: 100, duration: 666 }} d="M70 69.5H104H138V103.5V137.5" stroke="url(#main0_linear)" stroke-width="46" />
</g>
{/if}
</svg>

<svg width="193" height="77" viewBox="0 0 140 46" style="margin-top: -2px" fill="none" xmlns="http://www.w3.org/2000/svg">
{#if showIn}
<line in:draw={{ delay: 100, duration: 333, easing: cubicIn }} out:reverseDraw={{ duration: 666 }} on:introend={() => showIn = false} y1="23" x1={showIn && "140"} x2={!showIn && "140"} y2="23" stroke="url(#right_linear)" stroke-width="46"/>
<defs>
<linearGradient id="right_linear" x1="2.45804e-09" y1="46.9985" x2="116.077" y2="46.9986" gradientUnits="userSpaceOnUse">
<stop stop-color="#8EDE65"/>
<stop offset="1" stop-color="#8EDE65" stop-opacity="0"/>
</linearGradient>
</defs>
{/if}
</svg>
</center>

<style>
  center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    /* width: 100%; */
  }
</style>
