<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { settings } from '$lib';
	import FolderItem from '$lib/components/FolderItem.svelte';
	import EditFolderModal from '$lib/components/Modals/EditFolderModal.svelte';

	let editFolderModalElement: EditFolderModal;
</script>

<div class="d-flex flex-column flex-grow-1">
	{#if $settings.userLoggedIn === true}
		{#if $settings.userHasContent}
			<div class="container py-5">
				<h1>Folders</h1>
				<div class="folders grid grid-cols-2 grid-cols-sm-3 grid-cols-md-4 grid-cols-md-6 grid-cols-lg-8 mt-5">
					<FolderItem onclick={() => editFolderModalElement.show()} />
					<FolderItem onclick={() => editFolderModalElement.show()} />
					<FolderItem onclick={() => editFolderModalElement.show()} />
					<FolderItem onclick={() => editFolderModalElement.show()} />
					<FolderItem onclick={() => editFolderModalElement.show()} />
					<FolderItem onclick={() => editFolderModalElement.show()} />
					<FolderItem onclick={() => editFolderModalElement.show()} />
					<FolderItem onclick={() => editFolderModalElement.show()} />
				</div>
			</div>
		{:else}
			<div class="flex-center text-center">
				<img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/icons/assets/illustrated/light/large/add-folder.svg" alt="Add folder" />
				<h1 class="mt-3">Opps!</h1>
				<h3>You don't have any folders yet...</h3>
				<p class="mt-3">Please select a document, image or archive<br/>and click on the folder icon (<Icon icon="folder" />)<br/>next to the item.</p>
			</div>
		{/if}
	{:else}
		<div class="flex-center text-center">
			<img src="https://cdn.wolterskluwer.io/wk/fundamentals/2.x.x/icons/assets/illustrated/light/large/add-folder.svg" alt="Add folder" />
			<h1 class="mt-3">Opps!</h1>
			<h3>You are not logged in...</h3>
			<p class="mt-3">You need to be logged in<br/>to use this feature!</p>
		</div>
	{/if}
</div>

<EditFolderModal bind:this={editFolderModalElement} />
