<script>
	import Item from '$lib/components/Item/Item.svelte';
	import { getItems } from '$lib/scripts/getItems.js';

	const items = getItems(10, { type: 'doc' });
</script>

<div class="similar-phrases mb-3">
	<span class="text-nowrap">Similar phrases:</span>
	<span class="badge rounded-pill text-bg-light bg-hover-light pointer">Cultural History</span>
	<span class="badge rounded-pill text-bg-light">Cultural History</span>
	<span class="badge rounded-pill text-bg-light">Cultural History</span>
</div>
<div class="result-info mb-3"><strong>15386</strong> results in <strong>438</strong> publications</div>

<div class="items item-grid">
	{#each items as item, index (index)}
		<Item
			type={item.type}
			cover={item.cover}
			author={item.author}
			title={item.title}
			subtitle={item.subtitle}
			tag={item.tag}
			categories={item.categories}
			access={item.access}
			trial={item.trial}
			search={true}
		/>
	{/each}
</div>
