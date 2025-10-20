<script lang="ts">
	import FilterPanelSearch from '$lib/components/Filters/FilterPanelSearch.svelte';
	import FilterBar from '$lib/components/Filters/FilterBar.svelte';
	import { onMount } from 'svelte';
	import { Sidebar } from '$lib/scripts/sidebar';
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import SearchDocTab from './SearchDocTab.svelte';
	import SearchImageTab from './SearchImageTab.svelte';

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
						<li class="nav-item" aria-current="page">
							<a class="nav-link active" href="#" aria-selected="true" data-bs-toggle="tab" data-bs-target="#publicationList">Publications</a>
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
					<SearchDocTab />
				</div>
				<div class="tab-pane fade" id="imageList" role="tabpanel" aria-labelledby="profile-tab">
					<SearchImageTab />
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
