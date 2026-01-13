<script lang="ts">
	import Item from '$lib/components/Item/Item.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { settings } from '$lib';
	import { onMount } from 'svelte';

	onMount(async () => {
		const bootstrap = await import('bootstrap');
		if (bootstrap) console.log('Bootstrap JS bundle created successfully');
		else console.error('Failed to load Bootstrap JS bundle');
	});
</script>

<div id="headerCarousel" class="carousel slide bg-lighter">
	<div class="carousel-inner">
		<div class="carousel-item active">
			<div class="container expand">
				<div class="row flex-column flex-md-row	 h-100">
					<div class="col col-12 col-md-6 banner-left">
						<div class="wk-line-green my-4"></div>
						<div class="flex-grow-1 d-flex flex-column py-4">
							<h1 class="display-5 fw-bold">Vitajte v ASPI Akadémii</h1>
							<p class="fs-1">Jedna platforma – stovky odborných titulov</p>
						</div>
						<div>
							<img src="images/banner/aspi_logo.webp" height="auto" width="200" />
						</div>
					</div>
					<div class="col col-12 col-md-6 banner-right mt-3 mt-md-0">
						<picture class="position-relative">
							<img class="fit-cover position-absolute" alt="Welcome banner" src="images/banner/main_banner_sk_2026_650x450.webp" />
						</picture>
					</div>
				</div>
			</div>
		</div>
	</div>
	<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	</button>
</div>

<div class="container py-5">
	<section class="mb-5">
		<div class="flex-row-center mb-5">
			<h2>Novelities</h2>
			<button class="btn btn-outline-primary ms-auto">All items <Icon icon="arrow-right" /></button>
		</div>
		<div class="items item-grid item-grid-6">
			<Item cover="book-1.webp" />
			<Item cover="book-2.webp" />
			<Item cover="book-3.webp" />
			<Item cover="book-4.webp" />
			<Item cover="book-5.webp" />
			<Item cover="book-1.webp" />
		</div>
		<div class="d-flex justify-content-center mt-5">
			<button class="btn btn-outline-primary">More novelities...</button>
		</div>
	</section>

	<!-- This sections are only visible if the user is logged in -->
	{#if $settings.userLoggedIn}

		<hr>

		<!-- User's history -->
		<section class="my-5">
			<div class="flex-row-center mb-5">
				<h2>History</h2>
				<button class="btn btn-outline-primary ms-auto">All items <Icon icon="arrow-right" /></button>
			</div>
			<div class="items item-grid item-grid-6">
				<Item cover="book-1.webp" />
				<Item cover="book-2.webp" />
				<Item cover="book-3.webp" />
				<Item cover="book-4.webp" />
				<Item cover="book-5.webp" />
				<Item cover="book-1.webp" />
			</div>
			<div class="d-flex justify-content-center mt-5">
				<button class="btn btn-outline-primary">More history items...</button>
			</div>
		</section>

		<hr>

		<!-- User's favorites -->
		<section class="my-5">
			<div class="flex-row-center mb-5">
				<h2>Favorites</h2>
				<button class="btn btn-outline-primary ms-auto">All items <Icon icon="arrow-right" /></button>
			</div>
			<div class="items item-grid item-grid-6">
				<Item cover="book-1.webp" />
				<Item cover="book-2.webp" />
				<Item cover="book-3.webp" />
				<Item cover="book-4.webp" />
				<Item cover="book-5.webp" />
				<Item cover="book-1.webp" />
			</div>
			<div class="d-flex justify-content-center mt-5">
				<button class="btn btn-outline-primary">More favorites...</button>
			</div>
		</section>
	{/if}
</div>
