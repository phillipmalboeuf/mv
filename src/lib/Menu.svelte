<script lang="ts">
  import type { Entry } from 'contentful'
  import { fly, draw } from 'svelte/transition'

  export let sections: Entry<{ titre: string, id?: string }>[]
  // export let navigation: Entry<{ contactezNous: string, courriel: string }>

  let open = false
</script>

<button class:open on:click={() => open = !open}>
  {#if open}
  <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="40.7984" y1="1.61522" x2="2.61465" y2="39.799" stroke="white" stroke-width="2"/>
  <line x1="39.384" y1="38.8909" x2="1.20019" y2="0.707118" stroke="white" stroke-width="2"/>
  </svg>
  {:else}
  <svg width="54" height="17" viewBox="0 0 54 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="54" y1="1" x2="-8.74228e-08" y2="0.999995" stroke="white" stroke-width="2"/>
  <line x1="54" y1="16" x2="-8.74228e-08" y2="16" stroke="white" stroke-width="2"/>
  </svg>
  {/if}
</button>

{#if open}
<nav transition:fly={{ x: -100 }}>
  {#each sections.filter(section => section.fields.id) as section}
  <a on:click={() => open = false} href={`#${section.fields.id}`}>{section.fields.titre}</a>
  {/each}
  <a on:click={() => open = false} href={`#contact`}>Contact</a>
  <div>
    <a href="https://facebook.com" target="_blank">
      <svg width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M4.16488 27.9993V15.2256H0V10.2578H4.1448V6.58141C4.1448 2.32179 6.64875 -0.000697359 10.3018 -0.000697359C11.5362 -0.00590472 12.7706 0.061791 14 0.197182V4.64948H11.4609C9.4638 4.64948 9.08244 5.63367 9.08244 7.07611V10.2578H13.8344L13.2122 15.2256H9.10753V27.9993" fill="white"/> </g> <defs> <clipPath id="clip0"> <rect width="14" height="28" fill="white"/> </clipPath> </defs> </svg>
    </a>
    <a href="https://linkedin.com" target="_blank">
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.376653 7.63439H5.14277V23H0.376653V7.63439ZM2.76212 0C4.28805 0 5.52425 1.23932 5.52425 2.7691C5.52425 4.29888 4.28805 5.5382 2.76212 5.5382C1.2362 5.5382 0 4.29888 0 2.7691C0 1.23932 1.2362 0 2.76212 0Z" fill="white"/>
      <path d="M8.13184 7.63394H12.6951V9.73497H12.7821C13.714 8.13741 15.4428 7.18856 17.2874 7.25633C22.1163 7.25633 23 10.4369 23 14.5712V22.9995H18.2387V15.5298C18.2387 13.7482 18.2097 11.4536 15.7663 11.4536C13.3229 11.4536 12.9076 13.39 12.9076 15.399V22.9995H8.15115L8.13184 7.63394Z" fill="white"/>
      </svg>
    </a>
  </div>
</nav> 
{/if}


<style lang="scss">
  button {
    display: none;
    position: relative;
    z-index: 2;
    border: none;
    background: none;

    @media (max-width: 900px) {
      display: inline-block;
    }
  }

    nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow-y: auto;
      padding: 12rem 1rem 2rem;
      background: var(--dark-0);

      a {
        font-size: 28px;
        padding: 0.5rem 1rem;
      }

      > div {
        flex: 1;
        display: flex;
        align-items: flex-end;
      }
    }
</style>