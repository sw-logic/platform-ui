<script>
	import Header from '$lib/components/Layout/Header.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import '../../styles/app.scss';
	import { settings } from '$lib';
	import { goto } from '$app/navigation';
	import SettingsOffcanvas from '$lib/components/Modals/SettingsOffcanvas.svelte';
	import ReferenceModal from '$lib/components/Modals/ReferenceModal.svelte';
	import InfoModal from '$lib/components/Modals/InfoModal.svelte';

	let {children} = $props();

	$effect( ()=> {
			if (!$settings.userLoggedIn && !$settings.allowGuest) {
			document.querySelector('.modal-backdrop')?.remove();
			document.body.style.overflow = '';
			goto('/login', { replaceState: true });
		}
	})
</script>


<!-- This is the beginning of the page -->
<Header />
<main>
	{@render children()}
</main>
<Footer />
<!-- This is the end of the page -->

<InfoModal />
<ReferenceModal />
<SettingsOffcanvas />
