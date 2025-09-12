<script>
	import Logo from '$lib/components/Layout/Logo.svelte';
	import { settings } from '$lib';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	function logIn(event) {
		event.preventDefault();
		settings.update(s => ({ ...s, userRegistered: true }));
		settings.update(s => ({ ...s, userLoggedIn: true }));
		console.log('User is logged in, redirecting to home page...');
		goto(`${base}/`, { replaceState: true });
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
				<h1>Oops!</h1>
				<p>You probably don't have acces to this page. Please get a subscription or start a trial period on our portal.</p>
				<hr>
				<button type="submit" class="btn btn-primary" on:click={logIn}>Go to our Portal</button>
			</form>
		</div>
		<div class="p-5 text-center">This is the footer. All rights reserved.</div>
	</div>
</div>
