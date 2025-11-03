<script lang="ts">
</script>

<div class="modal fade" id="createFolderModal" tabindex="-1" aria-labelledby="createFolderModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="createFolderModalLabel">Create Folder</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<form action="">
					<div class="mb-3">
						<label for="folderName" class="form-label">Folder Name</label>
						<input type="text" class="form-control" id="folderName" placeholder="Enter folder name" />
					</div>
					<div class="mb-3">
						<label for="folderDescription" class="form-label">Description</label>
						<textarea class="form-control" id="folderDescription" rows="3" placeholder="Enter folder description"></textarea>
					</div>
					<div class="flex-row-center gap-3 mb-3">
						<label for="selectColor" class="form-label m-0">Select color</label>
						<div class="mt-2" data-active-toggle=".bullet" data-active-toggle-one="true">
							<button type="button" class="bullet bullet-xl bullet-middle active" aria-label="Color selector"></button>
							<button type="button" class="bullet bullet-xl bullet-blue" aria-label="Color selector"></button>
							<button type="button" class="bullet bullet-xl bullet-green" aria-label="Color selector"></button>
							<button type="button" class="bullet bullet-xl bullet-orange" aria-label="Color selector"></button>
							<button type="button" class="bullet bullet-xl bullet-red" aria-label="Color selector"></button>
						</div>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-primary">OK</button>
			</div>
		</div>
	</div>
</div>
