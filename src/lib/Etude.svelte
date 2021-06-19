<script lang="ts">
	import type { Asset, Entry, RichTextContent } from 'contentful'
  import Document from '$lib/document/index.svelte'
	import Picture from './Picture.svelte'
import { couleur } from './helpers';

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

<style>
	figure {
		color: var(--dark-0);
		background-color: var(--text);

		display: flex;
		align-items: stretch;
		margin: 0;
	}

		figure :global(img) {
			height: 100%;
			object-fit: cover;
		}

		figure :global(picture) {
			width: 40%;
		}

		figcaption {
			width: 60%;
		}

		article, aside {
			padding: var(--gutter) calc(var(--gutter) + 2vw);
		}

		article {
			padding-top: 6rem;
		}

			article :global(h2, h4) {
				font-size: 40px;
				color: var(--color);
				margin-left: calc(var(--gutter) * -1);
			}

			article :global(h6) {
				font-size: 18px;
				color: var(--color-dark);
				margin-left: calc(var(--gutter) * -1);
			}

			/* article :global(p) {
				margin: 0 var(--gutter);
			} */

			:global(strong) {
				color: var(--color-dark);
				font-weight: 400;
			}

			:global(p) {
				font-size: 18px;
			}

			h6 {
				position: absolute;
				top: var(--gutter);
				right: 0;
				padding: 0.5rem 0.5rem 0.5rem 1.5rem;
				font-size: 13px;
				max-width: 12rem;
				border-top-left-radius: 4rem;
				border-bottom-left-radius: 4rem;
			}
</style>