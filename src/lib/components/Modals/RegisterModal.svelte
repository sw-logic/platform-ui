<script lang="ts">
	import { settings } from '$lib';
	import Icon from '$lib/components/Icon.svelte';
	import { Modal } from 'bootstrap';

	let modalElement: HTMLDivElement;

	function toggleUserLoggedIn() {
		settings.update(s => ({ ...s, userLoggedIn: !s.userLoggedIn }));
		const modal = Modal.getOrCreateInstance(modalElement);
		modal.hide();
	}
</script>

<div bind:this={modalElement} class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Login</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">

				<form>
					<div class="mb-3">
						<label for="username" class="form-label">Username</label>
						<input type="text" class="form-control" id="username" name="username" required>
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">Password</label>
						<input type="password" class="form-control" id="password" name="password" required>
					</div>
					<div class="d-flex align-items-center justify-content-between">
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="remember" name="remember">
							<label class="form-check-label" for="remember">Remember me</label>
						</div>
						<div class="mb-3">
							<a href="#" class="link-primary">Lost password?</a>
						</div>
					</div>
					<button type="submit" on:click={toggleUserLoggedIn} class="btn btn-primary w-100">Login</button>
				</form>

				<div class="divider">
					<div class="bg-white px-3">Or</div>
				</div>

				<div class="d-flex align-items-center justify-content-between gap-3">
					<button class="btn btn-outline-primary w-50"><Icon type="fa-brands" icon="google" /> Login with Google</button>
					<button class="btn btn-outline-primary w-50"><Icon type="fa-brands" icon="facebook" /> Login with Facebook</button>
				</div>

				<div class="divider">
					<div class="bg-white px-3">Are you a student?</div>
				</div>

				<div class="d-flex justify-content-center gap-3">
					<button class="btn btn-outline-primary align-self-center w-50">Login with EduID</button>
				</div>
			</div>
		</div>
	</div>
</div>
