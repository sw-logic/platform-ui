<script>
import ControlIcon from '$lib/components/ControlIcon.svelte';
</script>

<div class="footer-toolbar site-indent">
	<div class="footer-toolbar-nav">
		<div class="col-auto"><ControlIcon icon="chevron-left" title="Previous Chapter" class="hover-text-bg-primary" /></div>
		<div class="col nav-slider" id="navSlider">
			<input class="form-range" type="range" min="1" max="50" value="25" aria-label="Navigate through document" />
		</div>
		<div class="col-auto"><ControlIcon icon="chevron-right" title="Next Chapter" class="hover-text-bg-primary" /></div>
	</div>
</div>
