<script>
	import Logo from '$lib/components/Layout/Logo.svelte';
	import { settings } from '$lib';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let email = '';
	let password = '';
	let errorMessage = '';

	const VALID_CREDENTIALS = {
		email: 'platform@wolterskluwer.com',
		password: '8RoE4C_7'
	};

	function logIn(event) {
		event.preventDefault();
		errorMessage = '';

		if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
			settings.login();
			console.log('User is logged in, redirecting to home page...');
			goto(`${base}/`, { replaceState: true });
		} else {
			errorMessage = 'Invalid username or password';
		}
	}
</script>

<div class="flex-grow-1 d-flex flex-row">
	<div class="flex-grow-1 w-50 position-relative">
		<picture class="bg-image">
			<img src="{base}/images/header/login.webp" alt="">
		</picture>
	</div>
	<div class="flex-grow-1 w-50 d-flex flex-column">
		<div class="flex-grow-1 d-flex align-items-center justify-content-center">
			<form action="" class="login">
				<h1 class="m-0 lh-1"><Logo /></h1>
				<small>Comprehensive Online Reference Exchange</small>
				{#if errorMessage}
					<div class="alert alert-danger" role="alert">
						{errorMessage}
					</div>
				{/if}
				<div class="my-3">
					<label for="email" class="form-label">Email address</label>
					<input type="email" class="form-control" id="email" placeholder="E-mail" bind:value={email} required>
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input type="password" class="form-control" id="password" placeholder="Password" bind:value={password} required>
				</div>
				<button type="submit" class="btn btn-primary" on:click={logIn}>Login</button>
			</form>
		</div>
		<div class="p-5 text-center">This is the footer. All rights reserved.</div>
	</div>
</div>
