<script>
	import Item from '$lib/components/Item/Item.svelte';
	import { getItems } from '$lib/scripts/getItems.js';

	const defaultBooks = getItems(10, { type: 'image' });
</script>

<div class="result-info mb-3"><strong>15386</strong> results in <strong>438</strong> publications</div>

<div class="items item-grid">
	{#each defaultBooks as book, index (index)}
		<Item
			type={book.type}
			cover={book.cover}
			author={book.author}
			title={book.title}
			subtitle={book.subtitle}
			access={book.access}
			trial={book.trial}
			tag={book.tag}
			categories={book.categories}
			search={true}
		/>
	{/each}
</div>
