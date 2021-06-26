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

<Header {page} />

<main>
  <slot></slot>
</main>

<Footer {navigation} />

<style lang="scss">
  :root {
    --gutter: 2rem;
    --text: white;
    --light-1: #8EDD65;
    --light-2: #009639;
    --dark-0: #0B1F11;
    --dark-1: #122F1A;
    --dark-2: #004422;
    --alt-1: #00C3DD;
    --alt-2: #007DBA;

    @media (max-width: 900px) {
      --gutter: 1.66rem;
    }
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

	:global(body) {
    font-family: 'Söhne';
    font-size: 16px;
    color: var(--text);
    background: var(--dark-1);
    overflow-x: hidden;

    margin: 0;
    padding: 0;
  }

  main {
    margin-top: calc(var(--gutter) * 5);
    // padding: var(--gutter);
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-weight: normal;
    color: var(--light-1);
    white-space: pre-line;
    margin: 0 0 0.333em;
  }

  :global(h1) {
    font-size: 90px;
    line-height: 1.222;

    @media (max-width: 900px) {
      font-size: 45px;
    }
  }

  :global(h2) {
    font-size: 62px;
    line-height: 1.161;

    @media (max-width: 900px) {
      font-size: 35px;
    }
  }

  :global(h3, h4, h5) {
    font-size: 25px;
    line-height: 1.25;

    @media (max-width: 900px) {
      font-size: 20px;
    }
  }

  :global(h6) {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.25;
    color: var(--light-2);
  }

  :global(p) {
    font-size: 20px;
    line-height: 1.25;
    white-space: pre-line;
    margin: 0 0 0.333em;

    @media (max-width: 900px) {
      font-size: 16px;
    }
  }

  :global(p.big) {
    font-size: 28px;

    @media (max-width: 900px) {
      font-size: 20px;
    }
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  :global(ul, ol) {
    padding-left: 1.333em;
  }

  :global(ul) {
    list-style-type: none;
  }

  :global(li) {
    position: relative;
  }

  :global(li p) {
    margin: 0 0 0.333em;
  }

  :global(ul > li:before) {
    content: "+";
    position: absolute;
    top: 0;
    left: -1.333em;

    color: var(--li-color);
  }

  :global(button) {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  :global(button[type="submit"]) {
    cursor: pointer;
    font-size: 25px;
    line-height: 1;
    color: var(--text);
    background: var(--light-2);
    border: none;
    border-radius: 1em;
    padding: 0.5em 1.5em;
  }

  :global(input) {
    font-size: 25px;
    line-height: 1;
    display: block;
    width: 100%;
    margin: 0 0 1em;
    padding: 0.5em;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--light-1);
  }

  :global(::-webkit-input-placeholder, ::-webkit-input-placeholder) { color: var(--text); }
  :global(:-moz-placeholder, :-moz-placeholder) { color: var(--text); }
</style>