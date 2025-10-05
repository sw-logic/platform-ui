<script>
import ParaTools from '$lib/components/Documents/ParaTools.svelte';

let {children} = $props();
</script>

<div class="para-row">
	<ParaTools />
	<div class="para-content">
		{@render children()}
	</div>
</div>