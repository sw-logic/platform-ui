<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import { ActiveToggle } from '$lib/scripts/activeToggle';
	import { onMount } from 'svelte';

	onMount(() => {
		ActiveToggle.init();
	});
</script>

<form action="" class="px-2 py-3 border-bottom">
	<div class="form-check form-switch">
		<input class="form-check-input" type="checkbox" role="switch" id="showHighlightsInText" checked>
		<label class="form-check-label" for="showHighlightsInText">Show highlights in text</label>
	</div>
	<div class="mt-2" data-active-toggle=".bullet">
		<button type="button" class="bullet bullet-lg bullet-blue active"></button>
		<button type="button" class="bullet bullet-lg bullet-green active"></button>
		<button type="button" class="bullet bullet-lg bullet-orange active"></button>
		<button type="button" class="bullet bullet-lg bullet-red active"></button>
		Filter by color
	</div>
</form>
<div class="content scroll gap-2">
	<div class="list-group gap-1">
		<div class="list-title">This is the title of the chapter</div>
		<div class="list-items ps-2">
			<div class="list-item">
				<span class="bullet bullet-sm bullet-red"></span>
				<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
				<div class="list-item-action">
					<ControlIcon icon="trash" title="Delete item" class="no-hover" />
				</div>
			</div>
			<div class="list-item">
				<span class="bullet bullet-sm bullet-green"></span>
				<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
				<div class="list-item-action">
					<ControlIcon icon="trash" title="Delete item" class="no-hover" />
				</div>
			</div>
			<div class="list-item">
				<span class="bullet bullet-sm bullet-blue"></span>
				<div class="list-item-content text-truncate">Tis is the very long search result with the highlighted search phrase.</div>
				<div class="list-item-action">
					<ControlIcon icon="trash" title="Delete item" class="no-hover" />
				</div>
			</div>
		</div>
	</div>
</div>

