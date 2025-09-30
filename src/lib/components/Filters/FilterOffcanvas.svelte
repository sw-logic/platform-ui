<script lang="ts">
	let {children} = $props();
</script>

<div class="offcanvas offcanvas-end" tabindex="-1" id="filterOffcanvas" aria-labelledby="offcanvasLabel">
	<div class="offcanvas-header border-bottom">
		<h5 class="offcanvas-title" id="offcanvasLabel">Filters</h5>
		<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
	</div>
	<div class="offcanvas-body">
		{@render children()}
	</div>
</div>
