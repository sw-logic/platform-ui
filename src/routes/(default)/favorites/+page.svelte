<script>
	import Icon from '$lib/components/Icon.svelte';
	import { settings } from '$lib';
	import { getItems } from '$lib/scripts/getItems.js';
	import { ActiveToggle } from '$lib/scripts/activeToggle';
	import Item from '$lib/components/Item/Item.svelte';
	import FilterBar from '$lib/components/Filters/FilterBar.svelte';
	import { onMount } from 'svelte';

	const doc_items = getItems(6, { type: 'doc' });
	const img_items = getItems(6, { type: 'image' });

	onMount(() => {
		ActiveToggle.init();
	});
</script>

<div class="d-flex flex-column flex-grow-1">
	{#if $settings.userLoggedIn === true}
		{#if $settings.userHasContent}
			<div class="container py-5">
				<div class="flex-row-center flex-wrap justify-content-between mb-3">
					<h1 class="col-12 col-sm-6">My favorites</h1>
					<FilterBar />
				</div>
				<div class="tags tags-rounded my-4" data-active-toggle=".tag">
					<span>Filter: </span>
					<a href="#" class="tag active active-bg-primary" data-target="#favoriteDocuments" data-target-class="show">Documents</a>
					<a href="#" class="tag active active-bg-primary" data-target="#favoriteImages" data-target-class="show">Images</a>
					<a href="#" class="tag active active-bg-primary" data-target="#favoriteArchives" data-target-class="show">Archives</a>
				</div>

				<section>
					<h2>Documents</h2>
					<div class="mt-4 items item-grid item-grid-6 collapse show" id="favoriteDocuments">
						{#each doc_items as item, index (index)}
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
				</section>
				<hr class="my-5" />
				<section>
					<h2>Images</h2>
					<div class="mt-4 items item-grid item-grid-6 collapse show" id="favoriteImages">
						{#each img_items as item, index (index)}
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
				</section>
				<hr class="my-5" />
				<section>
					<h2>Archives</h2>
					<div class="mt-4 items item-grid item-grid-6 collapse show" id="favoriteArchives">
						{#each doc_items as item, index (index)}
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
				</section>

			</div>
		{:else}
			<div class="flex-center text-center">
				<img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/icons/assets/illustrated/light/large/no-favorites.svg" alt="Add folder" />
				<h1 class="mt-3">Opps!</h1>
				<h3>You don't have any favorites yet...</h3>
				<p class="mt-3">Please select a document, image or archive<br/>and click on the favorite icon (<Icon icon="star" />)<br/>next to the item.</p>
			</div>
		{/if}
	{:else}
		<div class="flex-center text-center">
			<img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/icons/assets/illustrated/light/large/no-favorites.svg" alt="Add folder" />
			<h1 class="mt-3">Opps!</h1>
			<h3>You are not logged in...</h3>
			<p class="mt-3">You need to be logged in<br/>to use this feature!</p>
		</div>
	{/if}
</div>
