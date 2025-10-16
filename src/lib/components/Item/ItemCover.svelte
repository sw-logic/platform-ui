<script>
	let props = $props();

	let cover = props.cover || 'book-1.webp';
	let type = props.type || '';
	let tag = props.tag || '';
	let link = props.href || '';
	let access = true //props.access ?? true;
	let trial = false //props.trial || false;

	import { base } from '$app/paths';
</script>

{#if link}
	<a class="item-cover-link" href={link}>
		<picture class="item-cover-picture {type} {props.class}">
			<img src="{base}/images/book/{cover}" alt="Name of the book">
			{#if tag}
				<span class="item-tag">{tag}</span>
			{/if}
			{#if !access}
				<span class="item-access {trial ? 'trial-available' : ''}">{trial ? "Trial available" : "Not available"}</span>
			{/if}
		</picture>
	</a>
{:else}
	<picture class="item-cover-picture {type} {props.class}">
		<img src="{base}/images/book/{cover}" alt="Name of the book">
		{#if tag}
			<span class="item-tag">{tag}</span>
		{/if}
		{#if !access}
			<span class="item-access {trial ? 'trial-available' : ''}">{trial ? "Trial available" : "Not available"}</span>
		{/if}
	</picture>
{/if}


