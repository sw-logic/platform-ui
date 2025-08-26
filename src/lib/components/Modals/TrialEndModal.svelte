<script lang="ts">
	import { Modal } from 'bootstrap';

	let modalElement: HTMLDivElement;

	export function show() {
		const modal = Modal.getOrCreateInstance(modalElement);
		modal.show();
	}

	export function hide() {
		const modal = Modal.getOrCreateInstance(modalElement);
		modal.hide();
	}
</script>

<div bind:this={modalElement} class="modal fade" id="trialEndModal" tabindex="-1" aria-labelledby="trialEndModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="trialEndModalLabel">Trial Period Expired</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

				<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Subscribe Now</button>
			</div>
		</div>
	</div>
</div>
