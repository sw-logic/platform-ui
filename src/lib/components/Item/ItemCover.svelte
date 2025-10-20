<script>
	let props = $props();

	let cover = props.cover || 'book-1.webp';
	let type = props.type || 'doc';
	let tag = props.tag || '';
	let link = props.href || '';
	let ai = props.ai || false;

	import { base } from '$app/paths';
</script>

{#if link}
	<a class="item-cover-link" class:ai href={link}>
		<picture class="item-cover-picture {type}">
			<img src="{base}/images/book/{cover}" alt="Name of the book">
			{#if tag}
				<span class="item-tag">{tag}</span>
			{/if}
		</picture>
	</a>
{:else}
	<picture class="item-cover-picture {type}">
		<img src="{base}/images/book/{cover}" alt="Name of the book">
		{#if tag}
			<span class="item-tag">{tag}</span>
		{/if}
	</picture>
{/if}


