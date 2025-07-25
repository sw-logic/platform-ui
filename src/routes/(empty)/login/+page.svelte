<script>
	import Logo from '$lib/components/Layout/Logo.svelte';
	import { settings } from '$lib';
	import { goto } from '$app/navigation';

	function logIn(event) {
		event.preventDefault();
		settings.update(s => ({ ...s, userLoggedIn: true }));
		console.log('User is logged in, redirecting to home page...');
		goto('/', { replaceState: true });
	}
</script>

<div class="flex-grow-1 d-flex flex-row">
	<div class="flex-grow-1 w-50 position-relative">
		<picture class="bg-image">
			<img src="images/header/login.webp" alt="">
		</picture>
	</div>
	<div class="flex-grow-1 w-50 d-flex flex-column">
		<div class="flex-grow-1 d-flex align-items-center justify-content-center">
			<form action="" class="login">
				<h1 class="m-0 lh-1"><Logo /></h1>
				<small>Comprehensive Online Reference Exchange</small>
				<div class="my-3">
					<label for="email" class="form-label">Email address</label>
					<input type="email" class="form-control" id="email" placeholder="E-mail" required>
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input type="password" class="form-control" id="password" placeholder="Password" required>
				</div>
				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="rememberMe">
					<label class="form-check-label" for="rememberMe">Remember me</label>
				</div>
				<button type="submit" class="btn btn-primary" on:click={logIn}>Login</button>
			</form>
		</div>
		<div class="p-5 text-center">This is the footer. All rights reserved.</div>
	</div>
</div>
