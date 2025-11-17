<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';
</script>

<div class="footer-toolbar site-indent">
	<nav class="page-nav flex-row-center" aria-label="Page navigation">
		<ControlIcon icon="chevron-double-left" class="hover-text-bg-primary" aria-label="Previous page" />
		<ControlIcon icon="chevron-left" class="hover-text-bg-primary" aria-label="Previous page" />
		<div class="flex-row-center">
			<span class="small mx-1">Page</span>
			<input type="number" size="4" min="1" max="1000" value="1" class="form-input form-input-sm text-center mx-1" aria-label="Current page number" />
			<span class="small mx-1">of 1000</span>
		</div>
		<ControlIcon icon="chevron-right" class="hover-text-bg-primary" aria-label="Previous page" />
		<ControlIcon icon="chevron-double-right" class="hover-text-bg-primary" aria-label="Previous page" />
	</nav>
	<div class="flex-row-center">
		<ControlIcon icon="expand-angle" class="hover-text-bg-primary" aria-label="Zoom out" />
		<ControlIcon icon="contract-angle" class="hover-text-bg-primary" aria-label="Zoom out" />
		<ControlIcon icon="zoom-in" class="hover-text-bg-primary" aria-label="Zoom out" />
		<div class="dropdown">
			<button class="m-dark-gray dropdown-toggle page-link px-1" id="zoom-select" data-bs-toggle="dropdown" aria-expanded="false" value="145%"><small>145%</small></button>
			<ul class="dropdown-menu" aria-labelledby="zoom-select" data-popper-placement="top-start">
				<li><a class="dropdown-item" href="#" data-zoom="auto">Automatic zoom</a></li>
				<li><a class="dropdown-item" href="#" data-zoom="actual">Actual size</a></li>
				<li><a class="dropdown-item" href="#" data-zoom="page-fit">Fit to page</a></li>
				<li><a class="dropdown-item" href="#" data-zoom="page-width">Fit to width</a></li>
				<li><hr class="dropdown-divider"></li>
				<li><a class="dropdown-item" href="#" data-zoom="50">50%</a></li>
				<li><a class="dropdown-item" href="#" data-zoom="75">75%</a></li><li><a class="dropdown-item" href="#" data-zoom="100">100%</a></li>
				<li><a class="dropdown-item" href="#" data-zoom="125">125%</a></li><li><a class="dropdown-item" href="#" data-zoom="150">150%</a></li>
				<li><a class="dropdown-item" href="#" data-zoom="200">200%</a></li><li><a class="dropdown-item" href="#" data-zoom="300">300%</a></li>
				<li><a class="dropdown-item" href="#" data-zoom="400">400%</a></li>
			</ul>
		</div>
		<ControlIcon icon="zoom-out" class="hover-text-bg-primary" aria-label="Zoom out" />
	</div>
	<div class="flex-row-center">
		<ControlIcon icon="bookmark" class="hover-text-bg-primary" aria-label="Zoom out" />
		<ControlIcon icon="chat-box" class="hover-text-bg-primary" aria-label="Zoom out" />
		<ControlIcon icon="quote" class="hover-text-bg-primary" aria-label="Zoom out" />
	</div>
</div>
