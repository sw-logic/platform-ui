<script>
	import { onMount } from 'svelte';
	import { Toolbar } from '$lib/scripts/toolbar';
	import Icon from '$lib/components/Icon.svelte';
	import DocumentToolbarItem from '$lib/components/Documents/DocumentToolbarItem.svelte';
	import TOC from '$lib/components/Item/TOC.svelte';
	import { base } from '$app/paths';
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import DocumentToolbarHighlights from '$lib/components/Documents/DocumentToolbarHighlights.svelte';
	import DocumentToolbarSettings from '$lib/components/Documents/DocumentToolbarSettings.svelte';

	onMount(() => {
		Toolbar.init();
	});
</script>

<div class="toolbar document-toolbar" id="documentToolbar">
	<DocumentToolbarItem icon="list-bullet-dot" title="Table of contents">
		<div class="content scroll">
			<TOC />
		</div>
	</DocumentToolbarItem>
	<DocumentToolbarItem icon="search" title="Search in document">
		<form action="" class="px-2 py-3 border-bottom">
			<div class="input-group input-group-sm">
				<input type="text" class="form-control border-dark" placeholder="Search" aria-label="Search" aria-describedby="searchButton">
				<a href="{base}/search" class="btn btn-outline-dark" type="button" id="searchButton"><Icon type="fa-solid" icon="magnifying-glass" /></a>
			</div>
			<div class="flex-row-center gap-3 mt-2">
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
		<div class="content scroll gap-2">
			<div class="list-group">
				<div class="list-title">This is the title of the chapter</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content">Tis is the very long
							<mark>search result</mark>
							with the highlighted search phrase.
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content">Tis is the <mark>very long</mark>
							search result with the highlighted search phrase.
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content">Tis is the very long
							search result
							with the highlighted <mark>search phrase</mark>.
						</div>
					</div>
				</div>
			</div>
			<div class="list-group">
				<div class="list-title">This is the title of the chapter</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content">Tis is the very long
							<mark>search result</mark>
							with the highlighted search phrase.
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content">Tis is the <mark>very long</mark>
							search result with the highlighted search phrase.
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content">Tis is the very long
							search result
							with the highlighted <mark>search phrase</mark>.
						</div>
					</div>
				</div>
			</div>
			<div class="list-group">
				<div class="list-title">This is the title of the chapter</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content">Tis is the very long
							<mark>search result</mark>
							with the highlighted search phrase.
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content">Tis is the <mark>very long</mark>
							search result with the highlighted search phrase.
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content">Tis is the very long
							search result
							with the highlighted <mark>search phrase</mark>.
						</div>
					</div>
				</div>
			</div>
		</div>
	</DocumentToolbarItem>
	<DocumentToolbarItem icon="bookmark" title="Bookmarks">
		<div class="content scroll gap-2">
			<div class="list-group gap-1">
				<div class="list-title">This is the chapter title</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">Very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">The search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
				</div>
			</div>
			<div class="list-group gap-1">
				<div class="list-title">This is the chapter title</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">Very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">The search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
				</div>
			</div>
			<div class="list-group gap-1">
				<div class="list-title">This is the chapter title</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">Very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">The search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</DocumentToolbarItem>
	<DocumentToolbarItem icon="chat-box" title="Notes">
		<div class="content scroll gap-2">
			<div class="list-group gap-1">
				<div class="list-title">This is the chapter title</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">Very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">The search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
				</div>
			</div>
			<div class="list-group gap-1">
				<div class="list-title">This is the chapter title</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">Very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">The search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
				</div>
			</div>
			<div class="list-group gap-1">
				<div class="list-title">This is the chapter title</div>
				<div class="list-items ps-2">
					<div class="list-item">
						<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">Very long search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
					<div class="list-item">
						<div class="list-item-content text-truncate">The search result with the highlighted search phrase.</div>
						<div class="list-item-action">
							<ControlIcon icon="trash" title="Delete item" class="no-hover" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</DocumentToolbarItem>
	<DocumentToolbarItem icon="highlight" title="Highlights" class="active">
		<DocumentToolbarHighlights />
	</DocumentToolbarItem>
	<DocumentToolbarItem icon="settings" title="Settings">
		<DocumentToolbarSettings />
	</DocumentToolbarItem>
</div>
