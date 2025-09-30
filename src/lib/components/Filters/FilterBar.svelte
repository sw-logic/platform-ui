<script>
import ControlIcon from '$lib/components/ControlIcon.svelte';

let gridView = true;

function setBookGrid() {
	document.querySelectorAll('.book-list').forEach(el => {
		el.classList.add('book-grid');
		el.classList.remove('book-list');
		gridView = true;
	});
}

function setBookList() {
	document.querySelectorAll('.book-grid').forEach(el => {
		el.classList.remove('book-grid');
		el.classList.add('book-list');
		gridView = false;
	});
}
</script>

<div class="col col-sm-auto flex-row-center gap-3 mt-3 mt-sm-0">
	<select class="form-select" aria-label="Select sort">
		<option value="1" selected>Title</option>
		<option value="2">Popularity</option>
		<option value="3">Date</option>
	</select>
	<div class="text-nowrap">
		<ControlIcon icon="filled-grid" active={gridView} onclick={setBookGrid} />
		<ControlIcon icon="filled-list-bullet-square" active={!gridView} onclick={setBookList} />
	</div>
	<div class="d-md-none">
		<ControlIcon icon="filled-funnel" type="button" data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas" aria-controls="filterOffcanvas"/>
	</div>
</div>
