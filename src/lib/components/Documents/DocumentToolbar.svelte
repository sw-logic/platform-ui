<script>
	import { onMount } from 'svelte';
	import { Toolbar } from '$lib/scripts/toolbar';
	import Icon from '$lib/components/Icon.svelte';
	import DocumentToolbarItem from '$lib/components/Documents/DocumentToolbarItem.svelte';
	import TOC from '$lib/components/Book/TOC.svelte';
	import { base } from '$app/paths';
	import ControlIcon from '$lib/components/ControlIcon.svelte';

	onMount(() => {
		Toolbar.init();
	});
</script>

<div class="toolbar document-toolbar">
	<DocumentToolbarItem title="Table of contents" class="active">
		<div class="content scroll">
			<TOC />
		</div>
	</DocumentToolbarItem>
	<DocumentToolbarItem title="Search in document">
		<form action="" class="px-2 py-3 border-bottom">
			<div class="input-group input-group-sm">
				<input type="text" class="form-control border-dark" placeholder="Search" aria-label="Search" aria-describedby="searchButton">
				<a href="{base}/search" class="btn btn-outline-dark" type="button" id="searchButton"><Icon type="fa-solid" icon="magnifying-glass" /></a>
			</div>
			<div class="flex-row-center gap-3 mt-2 small">
				<label for="searchInTOC">
					<input type="checkbox" class="form-check-input" id="searchInTOC">
					In table of contents
				</label>
				<label for="searchInDOC">
					<input type="checkbox" class="form-check-input" id="searchInDOC">
					In document
				</label>
			</div>
		</form>
		<div class="list-items content scroll">
			<div class="list-item">
				<div class="bullet bullet-sm bullet-red"></div>
				<div class="list-item-content">Tis is the search result</div>
				<div class="list-item-action">
					<ControlIcon icon="trash" />
				</div>
			</div>
		</div>
	</DocumentToolbarItem>
	<DocumentToolbarItem title="Bookmarks">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
		laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!
	</DocumentToolbarItem>
	<DocumentToolbarItem title="Notes">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
		laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!
	</DocumentToolbarItem>
	<DocumentToolbarItem title="Highlights">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
		laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!
	</DocumentToolbarItem>
	<DocumentToolbarItem title="Settings">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
		laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!
	</DocumentToolbarItem>
</div>
