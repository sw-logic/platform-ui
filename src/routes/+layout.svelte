<script>
	import Header from '$lib/components/Layout/Header.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import '../styles/app.scss';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
