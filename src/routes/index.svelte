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
	import type { Entry, RichTextContent } from 'contentful'
	import Text from '$lib/Text.svelte'
	import Hero from '$lib/Hero.svelte'
	import Sections from '$lib/Sections.svelte'

	export let page: Entry<{
		titre: string
		sections: Entry<{ titre: string, id?: string, sections?: Entry<{ titre: string, id?: string, text?: RichTextContent }>[] }>[]
	}>
</script>

{#each page.fields.sections as section}
{#if section.sys.contentType.sys.id === 'hero'}
<Hero hero={section.fields} />
{:else if section.sys.contentType.sys.id === 'text'}
<Text text={section.fields} />
{:else if section.sys.contentType.sys.id === 'page'}
<section id={section.fields.id}><Sections sections={section.fields.sections} /></section>
{/if}
{/each}

<style lang="scss">
	section {
		// min-height: 80vh;
		scroll-margin-top: 8rem;
	}
</style>
