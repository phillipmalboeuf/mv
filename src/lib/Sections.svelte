<script lang="ts">
	import type { Entry, RichTextContent } from 'contentful'
  import Hero from './Hero.svelte'
  import Text from './Text.svelte'

	export let sections: Entry<{ titre: string, id?: string, text?: RichTextContent }>[]
</script>


{#each sections as section}
{#if section.sys.contentType.sys.id === 'hero'}
<Hero hero={section.fields} />
{:else if section.sys.contentType.sys.id === 'text'}
<Text text={section.fields} />
{/if}
{/each}