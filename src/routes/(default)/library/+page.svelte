<script lang="ts">
	import Item from '$lib/components/Item/Item.svelte';
	import FilterBar from '$lib/components/Filters/FilterBar.svelte';
	import FilterPanelLibrary from '$lib/components/Filters/FilterPanelLibrary.svelte';
	import { getItems } from '$lib/scripts/getItems';
	import { onMount } from 'svelte';
	import { Sidebar } from '$lib/scripts/sidebar';
	import ControlIcon from '$lib/components/ControlIcon.svelte';

	const seriesBooks = getItems(10, { type: 'series' });
	const defaultBooks = getItems(10, { type: 'doc' });

	onMount(() => {
		Sidebar.init();
	});
</script>

<div class="container py-5">
	<div class="d-flex flex-row gap-5">
		<div class="col-12 col-md">
			<div class="flex-row-center flex-wrap mb-3">
				<h1 class="col-12 col-sm-6 me-auto">Library</h1>
				<FilterBar />
			</div>

			<div class="d-flex flex-row align-items-center pointer mb-4" data-bs-toggle="collapse" data-bs-target="#collapseSeries" aria-expanded="true" aria-controls="collapseWidthExample">
				<h2 class="m-0 me-3">Book series and journals</h2>
				<i class="wk-icon-chevron-right"></i>
			</div>
			<div class="collapse show" id="collapseSeries">
				<div class="items item-grid">
					{#each seriesBooks as book, index (index)}
						<Item
							type={book.type}
							cover={book.cover}
							author={book.author}
							title={book.title}
							subtitle={book.subtitle}
							categories={book.categories}
							access={book.access}
							trial={book.trial}
							tag={book.tag}
						/>
					{/each}
				</div>
			</div>

			<hr class="my-4">

			<div class="d-flex flex-row align-items-center pointer mb-4" data-bs-toggle="collapse" data-bs-target="#collapseCollections" aria-expanded="true" aria-controls="collapseWidthExample">
				<h2 class="m-0 me-3">Collections</h2>
				<i class="wk-icon-chevron-right"></i>
			</div>
			<div class="collapse show" id="collapseCollections">
				<div class="items item-grid">
					{#each seriesBooks as book, index (index)}
						<Item
							type={book.type}
							cover={book.cover}
							author={book.author}
							title={book.title}
							subtitle={book.subtitle}
							categories={book.categories}
							access={book.access}
							trial={book.trial}
							tag={book.tag}
						/>
					{/each}
				</div>
			</div>

			<hr class="my-4">

			<h2 class="mb-4">Books</h2>
			<div class="items item-grid">
				{#each defaultBooks as book, index (index)}
					<Item
						type={book.type}
						cover={book.cover}
						author={book.author}
						title={book.title}
						subtitle={book.subtitle}
						categories={book.categories}
						access={book.access}
						trial={book.trial}
						tag={book.tag}
					/>
				{/each}
			</div>
		</div>
		<div class="col-autos">
			<div class="sidebar sidebar-sm sidebar-collapse-md sticky-top" id="filter-sidebar">
				<div class="sidebar-header d-md-none">
					<h4>Filters</h4>
					<ControlIcon icon="close" data-sidebar-close="#filter-sidebar" aria-label="Close sidebar" />
				</div>
				<FilterPanelLibrary />
			</div>
		</div>
	</div>
</div>
