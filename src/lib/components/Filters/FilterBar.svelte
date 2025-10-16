<script>
import ControlIcon from '$lib/components/ControlIcon.svelte';

export let sidebar = '#filter-sidebar';
let gridView = true;

function setBookGrid() {
	document.querySelectorAll('.item-list').forEach(el => {
		el.classList.add('item-grid');
		el.classList.remove('item-list');
		gridView = true;
	});
}

function setBookList() {
	document.querySelectorAll('.item-grid').forEach(el => {
		el.classList.remove('item-grid');
		el.classList.add('item-list');
		gridView = false;
	});
}
</script>

<div class="filter-bar mt-3 mt-sm-0">
	<select class="form-select" aria-label="Select sort">
		<option value="1" selected>Title</option>
		<option value="2">Popularity</option>
		<option value="3">Date</option>
	</select>
	<div class="view-selectors">
		<ControlIcon icon="filled-grid" active={gridView} onclick={setBookGrid} />
		<ControlIcon icon="filled-list-bullet-square" active={!gridView} onclick={setBookList} />
	</div>
	<div class="d-md-none">
		<ControlIcon icon="filled-funnel" type="button" data-sidebar-target={sidebar} aria-controls="filterOffcanvas"/>
	</div>
</div>
