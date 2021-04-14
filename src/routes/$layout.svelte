<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	export const load = async ({ fetch, session, context }) => {
		const [page, navigation] = await Promise.all([
      await fetch('page.json'),
      await fetch('navigation.json')
    ].map(res => res.json()))

		return {
			props: {
				page,
        navigation
			}
		}
	}

</script>

<script lang="ts">
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  export let page
  export let navigation
</script>

<Header {page} {navigation} />

<main>
  <slot></slot>
</main>

<Footer {navigation} />

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

  :global(p) {
    white-space: pre-line;
  }
</style>