<script lang="ts">
	import type { Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'
	import LogoAnimation from './icons/LogoAnimation.svelte'

	export let hero: { titre: string, text?: RichTextContent }
</script>

<svelte:head>
	<title>Maillon Vert – {hero.titre}</title>
</svelte:head>

<article>
	<div>
		<h1>{hero.titre}</h1>
		<Document body={hero.text} />
	</div>

	<LogoAnimation />
</article>

<button on:click={e => window.scrollTo({
	top: e.currentTarget.offsetTop,
	behavior: 'smooth'
})}>
	<svg width="60" height="31" viewBox="0 0 60 31" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M59.5847 0.406219L29.9943 30.176L0.403809 0.406219" stroke="#009639" stroke-width="2" stroke-miterlimit="10"/>
	</svg>
</button>


<style lang="scss">
	article {
		display: flex;
		align-items: center;
		padding: 0 calc(var(--gutter) + 5vw);
		min-height: 66vh;
		width: 100%;
		overflow: hidden;

		@media (max-width: 900px) {
			flex-direction: column-reverse;
			row-gap: 2rem;
			padding: 0 var(--gutter) var(--gutter);
		}
	}

	div {
		flex: 1;
	}

	div :global(p) {
    font-size: 28px;

		@media (max-width: 900px) {
			font-size: 20px;
		}
  }

	button {
		position: absolute;
		bottom: var(--gutter);
		left: 0;
		width: 100%;
		border: none;
		background: transparent
	}
</style>