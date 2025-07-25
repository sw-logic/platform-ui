<script lang="ts">
	import Book from '$lib/components/Book/Book.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import InfoModal from '$lib/components/Modals/InfoModal.svelte';
	import ReferenceModal from '$lib/components/Modals/ReferenceModal.svelte';

	import { onMount } from 'svelte';

	onMount(async () => {
		const bootstrap = await import('bootstrap');
		if (bootstrap) console.log(`Bootstrap JS bundle loaded at ${new Date().toLocaleTimeString()}`);
		else console.error('Failed to load Bootstrap JS bundle');
	});
</script>

<div id="headerCarousel" class="carousel slide">
	<div class="carousel-inner">
		<div class="carousel-item active">
			<picture class="bg-image">
				<img src="images/header/home-dark.png">
			</picture>
			<div class="container text-light">
				<div class="row">
					<div class="col-12 col-sm-6">
						<h1 class="display-1">Welcome!</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem id quo autem aliquid eum
							voluptas vero doloremque itaque magni blanditis, suscipit laborum assumenda nulla ea animi illo consectetur
							ab!</p>
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
	<section>
		<div class="d-flex align-items-center">
			<h2>History</h2>
			<button class="btn btn-outline-primary ms-auto">All items <Icon icon="arrow-right" /></button>
		</div>
		<div class="grid mt-4">
			<Book cover="book-1.png" />
			<Book cover="book-2.png" />
			<Book cover="book-3.png" />
			<Book cover="book-4.png" />
			<Book cover="book-5.png" />
			<Book cover="book-1.png" />
		</div>
		<div class="d-flex justify-content-center mt-5">
			<button class="btn btn-outline-primary">More history items...</button>
		</div>
	</section>
	<section class="mt-6">
		<div class="d-flex align-items-center">
			<h2>Novelities</h2>
			<button class="btn btn-outline-primary ms-auto">All items <Icon icon="arrow-right" /></button>
		</div>
		<div class="grid mt-4">
			<Book cover="book-1.png" />
			<Book cover="book-2.png" />
			<Book cover="book-3.png" />
			<Book cover="book-4.png" />
			<Book cover="book-5.png" />
			<Book cover="book-1.png" />
		</div>
		<div class="d-flex justify-content-center mt-5">
			<button class="btn btn-outline-primary">More novelities...</button>
		</div>
	</section>
	<section class="mt-6">
		<div class="d-flex align-items-center">
			<h2>Favorites</h2>
			<button class="btn btn-outline-primary ms-auto">All items <Icon icon="arrow-right" /></button>
		</div>
		<div class="grid mt-4">
			<Book cover="book-1.png" />
			<Book cover="book-2.png" />
			<Book cover="book-3.png" />
			<Book cover="book-4.png" />
			<Book cover="book-5.png" />
			<Book cover="book-1.png" />
		</div>
		<div class="d-flex justify-content-center mt-5">
			<button class="btn btn-outline-primary">More favorites...</button>
		</div>
	</section>
</div>

<InfoModal />
<ReferenceModal />
