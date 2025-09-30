<script lang="ts">
import Book from '$lib/components/Book/Book.svelte';
import ControlIcon from '$lib/components/ControlIcon.svelte';
import FilterPanelSearch from '$lib/components/Filters/FilterPanelSearch.svelte';
import FilterOffcanvas from '$lib/components/Filters/FilterOffcanvas.svelte';
import FilterBar from '$lib/components/Filters/FilterBar.svelte';

let bookGrid: HTMLDivElement;

function setBookGrid() {
	bookGrid.classList.add('book-grid');
	bookGrid.classList.remove('book-list');
}

function setBookList() {
	bookGrid.classList.remove('book-grid');
	bookGrid.classList.add('book-list');
}

</script>

<div class="container py-5">
	<div class="d-flex flex-row gap-5">
		<div class="col-12 col-md-9">
			<div class="row align-items-center mb-3">
				<div class="col-12 col-sm-6 me-auto">
					<ul class="nav nav-underline">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#" data-bs-toggle="tab" data-bs-target="#publicationList">Publications</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#imageList">Images</a>
						</li>
					</ul>
				</div>
				<FilterBar />
			</div>

			<!-- Tab panes -->
			<div class="tab-content" id="searchPageTabContent">
				<div class="tab-pane fade show active" id="publicationList" role="tabpanel" aria-labelledby="home-tab">
					<div class="d-flex flex-wrap gap-2 mb-3">
						<span class="text-nowrap">Similar phrases:</span>
						<span class="badge rounded-pill text-bg-light bg-hover-light pointer">Cultural History</span>
						<span class="badge rounded-pill text-bg-light">Cultural History</span>
						<span class="badge rounded-pill text-bg-light">Cultural History</span>
					</div>
					<p><strong>15386</strong> results in <strong>438</strong> publications</p>

					<div bind:this={bookGrid} class="book-grid grid-cols-1 grid-cols-sm-3 grid-cols-lg-4 grid-cols-xl-5">
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
						<Book cover="book-2.webp" />
						<Book cover="book-3.webp" />
					</div>
				</div>
				<div class="tab-pane fade" id="imageList" role="tabpanel" aria-labelledby="profile-tab">
					Profile tab content
				</div>
			</div>


		</div>
		<div class="col d-none d-md-block">
			<div class="sticky-top" style="top: 144px;">
				<FilterPanelSearch />
			</div>
		</div>
	</div>

</div>

<FilterOffcanvas>
	<FilterPanelSearch />
</FilterOffcanvas>
