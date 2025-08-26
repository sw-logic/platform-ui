<script lang="ts">
	import { Modal } from 'bootstrap';
	import { settings } from '$lib';

	let modalElement: HTMLDivElement;

	export function show() {
		const modal = Modal.getOrCreateInstance(modalElement);
		modal.show();
	}

	export function hide() {
		const modal = Modal.getOrCreateInstance(modalElement);
		modal.hide();
	}

	function startTrial() {
		settings.update(s => ({ ...s, userStartedTrial: true }));
		hide();
	}
</script>

<div bind:this={modalElement} class="modal fade" id="startTrialModal" tabindex="-1" aria-labelledby="startTrialModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="startTrialModalLabel">Start Your Trial</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis nunc vel lorem tempor, ac volutpat nisl consectetur. Mauris vehicula, turpis at scelerisque tincidunt, lorem magna hendrerit nunc, eu tempor elit massa sit amet magna.</p>
				
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-primary" on:click={startTrial}>Start Trial</button>
			</div>
		</div>
	</div>
</div>