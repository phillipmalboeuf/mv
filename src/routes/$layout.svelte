<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	export const load = async ({ page, fetch, session, context }) => {
		const res = await fetch('page.json')

		return {
			props: {
				page: await res.json()
			}
		}
	}

</script>

<script lang="ts">
  import Header from '$lib/Header.svelte'
  export let page
</script>

<Header {page} />

<main>
  <slot></slot>
</main>

<style lang="scss">
  :root {
    --gutter: 2rem;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    scroll-behavior: smooth;
  }

	:global(body) {
    font-family: 'Söhne';
    font-size: #{33/2}px;

    margin: 0;
    padding: 0;
  }

  main {
    margin-top: calc(var(--gutter) * 3);
    padding: var(--gutter);
  }
</style>