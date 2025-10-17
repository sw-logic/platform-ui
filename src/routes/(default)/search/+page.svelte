<script lang="ts">
	import Item from '$lib/components/Item/Item.svelte';
	import FilterPanelSearch from '$lib/components/Filters/FilterPanelSearch.svelte';
	import FilterBar from '$lib/components/Filters/FilterBar.svelte';
	import { onMount } from 'svelte';
	import { Sidebar } from '$lib/scripts/sidebar';
	import ControlIcon from '$lib/components/ControlIcon.svelte';

	onMount(() => {
		Sidebar.init();
	});
</script>

<div class="container py-5">
	<div class="d-flex flex-row gap-5">
		<div class="col-12 col-md">
			<div class="row align-items-center mb-3">
				<div class="col-12 col-sm-6 me-auto">
					<ul class="nav nav-underline">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#" data-bs-toggle="tab" data-bs-target="#publicationList">Publications</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#imageList">Images</a>
						</li>
					</ul>
				</div>
				<FilterBar view="list" />
			</div>

			<!-- Tab panes -->
			<div class="tab-content" id="searchPageTabContent">
				<div class="tab-pane fade show active" id="publicationList" role="tabpanel" aria-labelledby="home-tab">
					<div class="similar-phrases mb-3">
						<span class="text-nowrap">Similar phrases:</span>
						<span class="badge rounded-pill text-bg-light bg-hover-light pointer">Cultural History</span>
						<span class="badge rounded-pill text-bg-light">Cultural History</span>
						<span class="badge rounded-pill text-bg-light">Cultural History</span>
					</div>
					<div class="result-info mb-3"><strong>15386</strong> results in <strong>438</strong> publications</div>

					<div class="items item-grid">
						<Item cover="book-1.webp" search={true} />
						<Item cover="book-2.webp" search={true} />
						<Item cover="book-3.webp" search={true} />
						<Item cover="book-4.webp" search={true} />
						<Item cover="book-5.webp" search={true} />
						<Item cover="book-1.webp" search={true} />
						<Item cover="book-2.webp" search={true} />
						<Item cover="book-3.webp" search={true} />
						<Item cover="book-4.webp" search={true} />
						<Item cover="book-5.webp" search={true} />
						<Item cover="book-1.webp" search={true} />
						<Item cover="book-2.webp" search={true} />
						<Item cover="book-3.webp" search={true} />
					</div>
				</div>
				<div class="tab-pane fade" id="imageList" role="tabpanel" aria-labelledby="profile-tab">
					<div class="result-info mb-3"><strong>15386</strong> results in <strong>438</strong> publications</div>

					<div class="items item-grid">
						<Item type="image" cover="book-1.webp" search={true} />
						<Item type="image" cover="book-2.webp" search={true} />
						<Item type="image" cover="book-3.webp" search={true} />
						<Item type="image" cover="book-4.webp" search={true} />
						<Item type="image" cover="book-5.webp" search={true} />
						<Item type="image" cover="book-1.webp" search={true} />
						<Item type="image" cover="book-2.webp" search={true} />
						<Item type="image" cover="book-3.webp" search={true} />
						<Item type="image" cover="book-4.webp" search={true} />
						<Item type="image" cover="book-5.webp" search={true} />
						<Item type="image" cover="book-1.webp" search={true} />
						<Item type="image" cover="book-2.webp" search={true} />
						<Item type="image" cover="book-3.webp" search={true} />
					</div>
				</div>
			</div>
		</div>
		<div class="col-auto">
			<div class="sidebar sidebar-sm sidebar-collapse-md" id="filter-sidebar">
				<div class="sidebar-header d-md-none">
					<h4>Filters</h4>
					<ControlIcon icon="close" data-sidebar-close="#filter-sidebar" aria-label="Close sidebar" />
				</div>
				<FilterPanelSearch />
			</div>
		</div>
	</div>

</div>
