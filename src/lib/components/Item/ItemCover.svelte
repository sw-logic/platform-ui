<script>
	let props = $props();

	let cover = props.cover || 'book-1.webp';
	let type = props.type || 'doc';
	let tag = props.tag || '';
	let link = props.href || '';

	import { base } from '$app/paths';
</script>

{#if link}
	<a class="item-cover-link" href={link}>
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


