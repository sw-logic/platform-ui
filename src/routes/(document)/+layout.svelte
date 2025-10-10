<script>
	import Header from '$lib/components/Layout/Header.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import SettingsOffcanvas from '$lib/components/Modals/SettingsOffcanvas.svelte';
	import ReferenceModal from '$lib/components/Modals/ReferenceModal.svelte';
	import InfoModal from '$lib/components/Modals/InfoModal.svelte';
	import { settings } from '$lib';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let {children} = $props();

	$effect(() => {
		if (!$settings.userLoggedIn && !$settings.allowGuest) {
			document.querySelector('.modal-backdrop')?.remove();
			document.body.style.overflow = '';
			goto(`${base}/login`, { replaceState: true });
		}
	})
</script>


<!-- This is the beginning of the page -->
<Header />
<main>
	{@render children()}
</main>
<!-- This is the end of the page -->

<SettingsOffcanvas />
