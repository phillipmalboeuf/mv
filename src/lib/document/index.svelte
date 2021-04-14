<script lang="ts">
  import type { Entry, RichTextContent } from 'contentful'
  import Node from './node.svelte'

  export let body: RichTextContent
</script>

{#each body.content as node}
<Node node={node} />
{/each}