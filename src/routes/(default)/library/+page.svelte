<script lang="ts">
	import Book from '$lib/components/Book/Book.svelte';
	import FilterBar from '$lib/components/Filters/FilterBar.svelte';
	import FilterOffcanvas from '$lib/components/Filters/FilterOffcanvas.svelte';
	import FilterPanelLibrary from '$lib/components/Filters/FilterPanelLibrary.svelte';
</script>

<div class="container py-5">
	<div class="d-flex flex-row gap-5">
		<div class="col-12 col-md-9">
			<div class="flex-row-center flex-wrap mb-3">
				<h1 class="col-12 col-sm-6 me-auto">Library</h1>
				<FilterBar />
			</div>

			<div class="d-flex flex-row align-items-center pointer mb-4" data-bs-toggle="collapse" data-bs-target="#collapseSeries" aria-expanded="true" aria-controls="collapseWidthExample">
				<h2 class="m-0 me-3">Book series and journals</h2>
				<i class="wk-icon-chevron-right"></i>
			</div>
			<div class="collapse show" id="collapseSeries">
				<div class="book-grid">
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
				<div class="book-grid">
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
			<div class="book-grid">
				<Book cover="book-1.webp" tag="New"/>
				<Book cover="book-2.webp" />
				<Book cover="book-3.webp" />
				<Book cover="book-4.webp" access={false} trial={true} />
				<Book cover="book-5.webp" access={false} trial={true} />
				<Book cover="book-1.webp" access={false} trial={false} />
				<Book cover="book-2.webp" access={false} trial={false} />
				<Book cover="book-3.webp" access={false} trial={false} />
				<Book cover="book-4.webp" access={false} trial={false} />
				<Book cover="book-5.webp" />
				<Book cover="book-1.webp" />
			</div>
		</div>
		<div class="col d-none d-md-block">
			<div class="sticky-top" style="top: 144px;">
				<FilterPanelLibrary />
			</div>
		</div>
	</div>
</div>

<FilterOffcanvas>
	<FilterPanelLibrary />
</FilterOffcanvas>
