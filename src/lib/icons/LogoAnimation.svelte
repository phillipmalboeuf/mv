<script>
  import { draw } from 'svelte/transition'
  let show = true
</script>

<button on:click={() => show = !show}>show</button>
<svg width="136" height="137" viewBox="0 0 136 137" fill="none" xmlns="http://www.w3.org/2000/svg">
{#if show}
<path transition:draw d="M136 68L102 68L68 68L68 34L68 1.68465e-06" stroke="#8EDE65" stroke-width="46" stroke-miterlimit="1.80775" stroke-linejoin="bevel"/>
<path transition:draw d="M0 68.5H34H68V102.5V136.5" stroke="#05C3DE" stroke-width="46" stroke-miterlimit="1.80775" stroke-linejoin="bevel"/>
{/if}
</svg>

<svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
{#if show}
<path transition:draw d="M91.07 91.07H45.37V136.44H91.07V91.07Z" stroke="#007DBA"/>
<path transition:draw d="M91 0H45V55H91V0Z" stroke="#009639"/>
<path transition:draw d="M0 45.37V91.06H45.37H91.06L45.37 45.37H0Z" stroke="#05C3DE"/>
<path transition:draw d="M91.07 45.37H45.37L91.07 91.06V91.07H136.43V45.37H91.07Z" stroke="#8EDD65"/>
{/if}
</svg>
