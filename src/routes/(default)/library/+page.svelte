<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import Book from '$lib/components/Book/Book.svelte';
</script>

<div class="container py-5">
	<div class="d-flex flex-row align-items-center mb-3">
		<h1 class="text-center">Library</h1>
		<div class="d-flex flex-row align-items-center ms-auto">
			<select class="form-select" aria-label="Select category">
				<option selected>-- All category --</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
			<select class="form-select ms-3" aria-label="Select sort">
				<option value="1" selected>Title</option>
				<option value="2">Popularity</option>
				<option value="3">Date</option>
			</select>
			<ControlIcon icon="filled-grid" class="ms-3" />
			<ControlIcon icon="filled-list-bullet-square" />
		</div>
	</div>

	<div class="d-flex flex-row align-items-center pointer mb-4" data-bs-toggle="collapse" data-bs-target="#collapseSeries" aria-expanded="true" aria-controls="collapseWidthExample">
		<h2 class="m-0 me-3">Book series and journals</h2>
		<i class="wk-icon-chevron-right"></i>
	</div>
	<div class="collapse show" id="collapseSeries">
		<div class="grid grid-cols-6">
			<Book type="series" tag="new" cover="book-1.webp" />
			<Book type="series" cover="book-2.webp" />
			<Book type="series" cover="book-3.webp" />
			<Book type="series" cover="book-4.webp" />
			<Book type="series" cover="book-5.webp" />
			<Book type="series" cover="book-1.webp" />
			<Book type="series" cover="book-2.webp" />
			<Book type="series" cover="book-3.webp" />
			<Book type="series" cover="book-4.webp" />
			<Book type="series" cover="book-5.webp" />
			<Book type="series" cover="book-1.webp" />
		</div>
	</div>

	<hr class="my-4">

	<div class="d-flex flex-row align-items-center pointer mb-4" data-bs-toggle="collapse" data-bs-target="#collapseCollections" aria-expanded="true" aria-controls="collapseWidthExample">
		<h2 class="m-0 me-3">Collections</h2>
		<i class="wk-icon-chevron-right"></i>
	</div>
	<div class="collapse show" id="collapseCollections">
		<div class="grid grid-cols-6">
			<Book type="series" cover="book-1.webp" />
			<Book type="series" cover="book-2.webp" />
			<Book type="series" cover="book-3.webp" />
			<Book type="series" cover="book-4.webp" />
			<Book type="series" cover="book-5.webp" />
			<Book type="series" cover="book-1.webp" />
		</div>
	</div>

	<hr class="my-4">

	<h2 class="mb-4">Books</h2>
	<div class="grid grid-cols-6">
		<Book cover="book-1.webp" />
		<Book cover="book-2.webp" />
		<Book cover="book-3.webp" />
		<Book cover="book-4.webp" />
		<Book cover="book-5.webp" />
		<Book cover="book-1.webp" />
		<Book cover="book-2.webp" />
		<Book cover="book-3.webp" />
		<Book cover="book-4.webp" />
		<Book cover="book-5.webp" />
		<Book cover="book-1.webp" />
	</div>
</div>
