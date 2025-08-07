<script>
	import { base } from '$app/paths';
	export let cover = 'book-1.webp';
	export let type = 'book';
	export let tag = '';
</script>


<picture class="book {type}">
	<img src="{base}/images/book/{cover}" alt="Name of the book">
	{#if tag}
		<span class="book-tag">{tag}</span>
	{/if}
</picture>

