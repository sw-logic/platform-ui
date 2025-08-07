<script>
import Icon from '$lib/components/Icon.svelte';
import { settings } from '$lib';

function toggleUserLoggedIn() {
	settings.update(s => ({ ...s, userLoggedIn: !s.userLoggedIn }));
}
</script>

<div class="container py-5">
	<h1 class="text-center">Registration</h1>

	<div class="max-width-md mx-auto mt-5">
		<div class="row gap-5">
			<div class="col">
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
					<button type="submit" on:click={toggleUserLoggedIn} class="btn btn-primary mt-3 w-100">Register</button>
				</form>

				<div class="divider">
					<div class="bg-white px-3">Or</div>
				</div>

				<div class="d-flex align-items-center justify-content-between gap-3">
					<button class="btn btn-outline-primary w-50"><Icon type="fa-brands" icon="google" /> Register with Google</button>
					<button class="btn btn-outline-primary w-50"><Icon type="fa-brands" icon="facebook" /> Register with Facebook</button>
				</div>

				<div class="divider">
					<div class="bg-white px-3">Are you a student?</div>
				</div>

				<div class="d-flex justify-content-center gap-3">
					<button class="btn btn-outline-primary align-self-center w-50">Register with EduID</button>
				</div>
			</div>
			<div class="col">
				<h2>Why to register?</h2>
				<div class="d-flex flex-column gap-2 ps-3">
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Save your favorite publications
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
