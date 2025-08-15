<script lang="ts">
import Book from '$lib/components/Book/Book.svelte';
import ControlIcon from '$lib/components/ControlIcon.svelte';

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
			<div class="d-flex flex-row align-items-center mb-3">
				<div class="me-auto">
					<ul class="nav nav-underline">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#" data-bs-toggle="tab" data-bs-target="#publicationList">Publications</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" data-bs-toggle="tab" data-bs-target="#imageList">Images</a>
						</li>
					</ul>
				</div>
				<div class="d-flex flex-row align-items-center">
					<select class="form-select ms-3" aria-label="Select sort">
						<option value="1" selected>Title</option>
						<option value="2">Popularity</option>
						<option value="3">Date</option>
					</select>
					<div class="d-flex flex-row">
						<ControlIcon icon="filled-grid" class="ms-3" onclick={setBookGrid} />
						<ControlIcon icon="filled-list-bullet-square" onclick={setBookList} />
					</div>
				</div>
			</div>

			<!-- Tab panes -->
			<div class="tab-content" id="searchPageTabContent">
				<div class="tab-pane fade show active" id="publicationList" role="tabpanel" aria-labelledby="home-tab">
					<div class="d-flex gap-2 mb-3">
						Similar phrases:
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
		<div class="col">
			<div class="sticky-top" style="top: 144px;">
				<div class="list-filter mb-3">
					<div class="list-filter-header">
						<label for="filterSearchInAll">
							<input type="checkbox" class="form-check-input" id="filterSearchInAll" />
							<h6 class="m-0">Search in</h6>
						</label>
					</div>
					<div class="list-filter-items">
						<label for="filterSearchIn1">
							<input type="checkbox" class="form-check-input" id="searchIn1" />
							Author and Title (1)
						</label>
						<label for="filterSearchIn2">
							<input type="checkbox" class="form-check-input" id="filterSearchIn2" />
							Table of Contents (42)
						</label>
						<label for="filterSearchIn3">
							<input type="checkbox" class="form-check-input" id="filterSearchIn3" />
							Full text (324)
						</label>
					</div>
				</div>
				<div class="list-filter mb-3">
					<div class="list-filter-header">
						<label for="filterCategoryAll">
							<input type="checkbox" class="form-check-input" id="filterCategoryAll" />
							<h6 class="m-0">Category</h6>
						</label>
					</div>
					<div class="list-filter-items">
						<label for="filterCategory1">
							<input type="checkbox" class="form-check-input" id="filterCategory1" />
							Agriculture (3)
						</label>
						<label for="filterCategory2">
							<input type="checkbox" class="form-check-input" id="filterCategory2" />
							Biology (7)
						</label>
						<label for="filterCategory3">
							<input type="checkbox" class="form-check-input" id="filterCategory3" />
							Chemistry (8)
						</label>
					</div>
				</div>
				<div class="list-filter mb-3">
					<div class="list-filter-header">
						<label for="filterTypeAll">
							<input type="checkbox" class="form-check-input" id="filterTypeAll" />
							<h6 class="m-0">Type of publication</h6>
						</label>
					</div>
					<div class="list-filter-items">
						<label for="filterType1">
							<input type="checkbox" class="form-check-input" id="filterType1" />
							Book (1)
						</label>
						<label for="filterType2">
							<input type="checkbox" class="form-check-input" id="filterType2" />
							Journal (42)
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>
