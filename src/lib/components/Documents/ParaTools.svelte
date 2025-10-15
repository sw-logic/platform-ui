<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';

	let {id} = $props();
</script>

<div class="para-tools">
	<div class="para-buttons">
		<ControlIcon class="btn-bookmark" icon="bookmark" />
		<ControlIcon class="btn-note" icon="chat-box" data-bs-toggle="collapse" data-bs-target="#para-note-{id}" aria-expanded="false" aria-controls="collapseExample" />
		<ControlIcon class="btn-refs" icon="quote" data-bs-toggle="collapse" data-bs-target="#para-refs-{id}" aria-expanded="false" aria-controls="collapseExample" />
	</div>
</div>
