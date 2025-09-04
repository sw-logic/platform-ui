<script lang="ts">
	import { Modal } from 'bootstrap';
	import { settings } from '$lib';
	import { base } from '$app/paths';

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
				<h5 class="modal-title" id="startTrialModalLabel">
					{#if !$settings.userRegistered}Register and start Trial{:else}Start Trial{/if}
				</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				{#if !$settings.userRegistered}
					<form>
						<div class="mb-3">
							<label for="username" class="form-label">Username</label>
							<input type="text" class="form-control" id="username" name="username" required>
						</div>
						<div class="mb-3">
							<label for="email" class="form-label">Email</label>
							<input type="text" class="form-control" id="email" name="username" required>
						</div>
						<div class="mb-3">
							<label for="password" class="form-label">Password</label>
							<input type="password" class="form-control" id="password" name="password" required>
						</div>
						<div class="mb-3">
							<label for="password2" class="form-label">Password verification</label>
							<input type="password" class="form-control" id="password2" name="password" required>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="remember" name="remember">
							<label class="form-check-label" for="remember">Notify me about news and promotions.</label>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="remember" name="remember">
							<label class="form-check-label" for="remember">I acknowledge and accept the <a target="_blank" href="{base}/docs/privacy-policy">Privacy Policy.</label>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="remember" name="remember">
							<label class="form-check-label" for="remember">I acknowledge and accept the <a target="_blank" href="{base}/docs/terms-and-conditions">Terms and Conditions</a> and the license agreement.</label>
						</div>
					</form>
					<hr>
				{/if}
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis nunc vel lorem tempor, ac volutpat nisl consectetur. Mauris vehicula, turpis at scelerisque tincidunt, lorem magna hendrerit nunc, eu tempor elit massa sit amet magna.</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-primary" on:click={startTrial}>
					{#if !$settings.userRegistered}Register and start Trial{:else}Start Trial{/if}
				</button>
			</div>
		</div>
	</div>
</div>
