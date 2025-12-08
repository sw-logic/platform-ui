<script lang="ts">
	import { base } from '$app/paths';
	import EditFolderModal from '$lib/components/Modals/EditFolderModal.svelte';
	import CreateFolderModal from '$lib/components/Modals/CreateFolderModal.svelte';
</script>

<div class="d-flex flex-column flex-grow-1">
	<div class="flex-center text-center">
		<img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/icons/assets/illustrated/light/large/something-went-wrong.svg" alt="Navigate back to home" />
		<h1 class="mt-3">Something went wrong!</h1>
		<h3>The page is missing or moved.</h3>
		<p class="mt-3">Navigate back to <a href="{base}/" title="Navigate back to home" aria-label="Navigate back to home">home</a>.</p>
	</div>

</div>

<EditFolderModal />
<CreateFolderModal />
