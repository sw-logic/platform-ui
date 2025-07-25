<script>
	import Header from '$lib/components/Layout/Header.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import '../../styles/app.scss';
	import { settings } from '$lib';
	import { goto } from '$app/navigation';

	$: if (!$settings.userLoggedIn && !$settings.allowGuest) {
		document.querySelector('.modal-backdrop')?.remove();
		goto('/login');
	}
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
