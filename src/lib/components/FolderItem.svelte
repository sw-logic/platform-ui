<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';
</script>

<div class="folder-item">
		<div class="flex-row-center gap-1 mb-2">
			<div class="folder-icon">
				<a href="#" aria-label="folder-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" class="m-folder-icon folder-yellow">
						<path id="folder" d="M90,0a10,10,0,0,1,10,9.9V70a9.94,9.94,0,0,1-9.9,10H10A9.94,9.94,0,0,1,0,70.1V20A9.94,9.94,0,0,1,9.9,10H50L60,0Z"></path>
					</svg>
				</a>
			</div>
			<div class="folder-tools">
				<ControlIcon icon="pencil" title="Edit Folder" data-bs-toggle="modal" data-bs-target="#editFolderModal" />
				<!-- ControlIcon icon="trash" title="Delete Folder" /-->
			</div>
		</div>
		<div class="folder-name">Name of the folder</div>
		<div class="folder-count">5 items</div>
</div>
