<script lang="ts">
	import type { Asset, Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'
	import Picture from './Picture.svelte'
	import { couleur } from './helpers'

	export let etude: { titre: string, couleur?: string, text?: RichTextContent, sousText?: RichTextContent, photo?: Asset }
</script>

<figure style="--color: {couleur(etude.couleur)}; --color-dark: {couleur(etude.couleur, true)}; --li-color: {couleur(etude.couleur)}">
	{#if etude.photo}<Picture media={etude.photo} />{/if}
	<figcaption>
		{#if etude.titre}<h6 style="color: var(--color); background-color: var(--color-dark)">{etude.titre}</h6>{/if}
		{#if etude.text}<article><Document body={etude.text} /></article>{/if}
		{#if etude.sousText}<aside style="background-color: var(--color)"><Document body={etude.sousText} /></aside>{/if}
	</figcaption>
</figure>

<style lang="scss">
	figure {
		color: var(--dark-0);
		background-color: var(--text);

		display: flex;
		align-items: stretch;
		margin: 0;

		@media (max-width: 900px) {
			flex-direction: column;
			align-items: unset;
		}
	}

		figure :global(img) {
			height: 100%;
			object-fit: cover;
		}

		figure :global(picture) {
			width: 40%;

			@media (max-width: 900px) {
				width: 100%;
				height: 20rem;
				order: 99;
			}
		}

		figcaption {
			width: 60%;

			@media (max-width: 900px) {
				width: 100%;
			}
		}

		article, aside {
			padding: var(--gutter) calc(var(--gutter) + 2vw);

			@media (max-width: 900px) {
				padding: var(--gutter);
			}
		}

		article {
			padding-top: 6rem;
		}

			article :global(h2),
			article :global(h4) {
				font-size: 40px;
				color: var(--color);
				margin-left: calc(var(--gutter) * -1);

				@media (max-width: 900px) {
					font-size: 30px;
					margin-left: -1rem;
					margin-bottom: 2rem;
				}
			}

			article :global(h6) {
				font-size: 18px;
				color: var(--color-dark);
				margin-left: calc(var(--gutter) * -1);

				@media (max-width: 900px) {
					font-size: 14px;
					margin-left: -1rem;
				}
			}

			/* article :global(p) {
				margin: 0 var(--gutter);
			} */

			figcaption :global(strong) {
				color: var(--color-dark);
				font-weight: 400;
			}

			h6 {
				position: absolute;
				top: 1rem;
				right: 0;
				padding: 0.5rem 0.5rem 0.5rem 1.5rem;
				font-size: 13px;
				max-width: 12rem;
				border-top-left-radius: 4rem;
				border-bottom-left-radius: 4rem;
			}
</style>