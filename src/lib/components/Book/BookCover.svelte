<script>
	let props = $props();

	let cover = props.cover || 'book-1.webp';
	let type = props.type || '';
	let tag = props.tag || '';

	import { base } from '$app/paths';
</script>


<a class="book-cover-link" href="{base}/book-details">
	<picture class="book-cover-picture {type} {props.class}">
		<img src="{base}/images/book/{cover}" alt="Name of the book">
		{#if tag}
			<span class="book-tag">{tag}</span>
		{/if}
	</picture>
</a>

