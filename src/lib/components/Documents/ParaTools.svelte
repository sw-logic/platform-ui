<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';

	let {id} = $props();
</script>

<div class="para-tools">
	<div class="para-buttons">
		<ControlIcon icon="bookmark" />
		<ControlIcon icon="chat-box" data-bs-toggle="collapse" data-bs-target="#para-note-{id}" aria-expanded="false" aria-controls="collapseExample" />
		<ControlIcon icon="quote" data-bs-toggle="collapse" data-bs-target="#para-references-{id}" aria-expanded="false" aria-controls="collapseExample" />
	</div>
</div>
