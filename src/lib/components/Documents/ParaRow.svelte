<script>
	import ParaTools from '$lib/components/Documents/ParaTools.svelte';
	import ParaReferences from '$lib/components/Documents/ParaReferences.svelte';
	import ParaNote from '$lib/components/Documents/ParaNote.svelte';

	let { children, note, class: className, ...props } = $props();
</script>

<div class="para-row {className}" {...props}>
	<ParaTools id={props.id} />
	<div class="para-content">
		<ParaNote id="para-note-{props.id}" {note} />
		<ParaReferences id="para-refs-{props.id}" />
		<div class="para-indent selectable">
			{@render children()}
		</div>
	</div>
</div>
