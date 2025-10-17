<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';

	let {id} = $props();
</script>

<div class="para-tools">
	<div class="para-buttons">
		<ControlIcon class="btn-bookmark" icon="bookmark" name="bookmark" />
		<ControlIcon class="btn-note" icon="chat-box" name="note" data-bs-toggle="collapse" data-bs-target="#para-note-{id}" aria-expanded="false" aria-controls="collapseExample" />
		<ControlIcon class="btn-refs" icon="quote" name="refs" data-bs-toggle="collapse" data-bs-target="#para-refs-{id}" aria-expanded="false" aria-controls="collapseExample" />
	</div>
</div>
