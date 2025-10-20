<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import ItemCover from '$lib/components/Item/ItemCover.svelte';
	import { base } from '$app/paths';
	import ItemInfoDoc from '$lib/components/Item/ItemInfoDoc.svelte';
	import ItemInfoImage from '$lib/components/Item/ItemInfoImage.svelte';

	export let cover = 'book-1.png';
	export let author = 'Dr. John Doe';
	export let title = 'Title of the book';
	export let subtitle = 'Subtitle of the book';
	export let type = 'doc';
	export let tag = '';
	export let categories = [''];
	export let access = true;
	export let trial = false;
	export let search = false;
	export let excerpt = false;
	export let link = 'book-details';
	export let ai = false;

</script>

<div class="item item-{type} hover-lift-up {access ? 'accessible' : 'not-accessible'} {trial ? 'trial-available' : ''}">
	<div class="item-cover">
		<ItemCover {cover} {type} {tag} {access} {trial} href="{base}/{link}" {ai}/>
		<div class="item-controls">
			<ControlIcon icon="heart" name="favorite" title="Add to favorites" />
			<ControlIcon icon="folder" name="folder" title="Add to folder" />
			{#if type==="doc" || type==="series" }
				<ControlIcon icon="quote" name="refs" title="Show reference" data-bs-toggle="modal" data-bs-target="#referenceModal" />
				<ControlIcon icon="download-line" name="download" title="Download to device" />
			{/if}
			<ControlIcon icon="info" name="info" title="Show information" data-bs-toggle="modal" data-bs-target="#infoModal" class="ms-auto" />
		</div>
	</div>
	{#if type==="image"}
		<ItemInfoImage {author} {title} {subtitle} {categories} {access} {trial}/>
	{:else}
		<ItemInfoDoc {author} {title} {subtitle} {categories} {excerpt} {search} {access} {trial} />
	{/if}

</div>

