<script>
	import Header from '$lib/components/Layout/Header.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import '../../styles/app.scss';
	import { settings } from '$lib';
	import { goto } from '$app/navigation';
	import SettingsOffcanvas from '$lib/components/Modals/SettingsOffcanvas.svelte';
	import ReferenceModal from '$lib/components/Modals/ReferenceModal.svelte';
	import InfoModal from '$lib/components/Modals/InfoModal.svelte';

	$: if (!$settings.userLoggedIn && !$settings.allowGuest) {
		document.querySelector('.modal-backdrop')?.remove();
		document.body.style.overflow = '';
		goto('/login', { replaceState: true });
	}
</script>


<!-- This is the beginning of the page -->
<Header />
<main>
	<slot />
</main>
<Footer />
<!-- This is the end of the page -->

<InfoModal />
<ReferenceModal />
<SettingsOffcanvas />
