<script lang="ts">
	import Logo from '$lib/components/Layout/Logo.svelte';
	import { settings } from '$lib';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	function logIn() {
		settings.update(s => ({ ...s, userRegistered: true }));
		settings.update(s => ({ ...s, userLoggedIn: true }));
	}

	function logInWithTrial(event) {
		event.preventDefault();
		logIn();
		settings.update(s => ({ ...s, userSubscription: false }));
		goto(`${base}/library`, { replaceState: true });
	}

	function logInWithSubscription(event) {
		event.preventDefault();
		logIn();
		settings.update(s => ({ ...s, userSubscription: true }));
		goto(`${base}/library`, { replaceState: true });
	}
</script>


<div class="flex-grow-1 d-flex align-items-center justify-content-center">
	<form action="" class="login">
		<h1>PORTAL PAGE</h1>
		<p>You are on the portal. Please get a subscription or start a trial period on our portal.</p>
		<hr>
		<button type="submit" class="btn btn-primary" on:click={logInWithTrial}>Start a trial period</button>
		<button type="submit" class="btn btn-primary" on:click={logInWithSubscription}>Subscribe</button>
	</form>
</div>
<div class="p-5 text-center">This is the footer. All rights reserved.</div>
