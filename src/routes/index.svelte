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
	import type { Entry } from 'contentful'

	export let page: Entry<{
		titre: string
		contenu: Entry<{ text: string }>[]
	}>
</script>

<h1>{page.fields.titre}</h1>
<p>Nous activons l’intégration du développement durable des entreprises de proximité, générant des transformations positives appuyées sur les meilleures pratiques.</p>

{#each page.fields.contenu as contenu, i}
<section id={`section-${i}`}>{contenu.fields.text}</section>
{/each}

<style lang="scss">
	section {
		min-height: 100vh;
		scroll-margin-top: 8rem;
	}
</style>
