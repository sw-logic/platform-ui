<script lang="ts">
	import ItemCover from '$lib/components/Item/ItemCover.svelte';
	import { settings } from '$lib';
	import Icon from '$lib/components/Icon.svelte';
	import TOC from '$lib/components/Item/TOC.svelte';
	import TrialStartModal from '$lib/components/Modals/TrialStartModal.svelte';
	import type { SvelteComponent } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	function readBook() {
		goto(`${base}/document/xml`);
	}

	let trialStartModal: SvelteComponent;
</script>

<div class="container py-5">
	<div class="row">
		<div class="col-sm-8">
			<h3 class="text-muted mb-1">Dr. John Doe</h3>
			<h1 class=" mb-1">This is the very long title of the book</h1>
			<div class="small text-muted">Subtitle of the book</div>
		</div>
		<div class="col-sm-4 max-width-sm text-sm-end mt-3 mt-sm-0">
			{#if $settings.userLoggedIn && $settings.userSubscription}
				<button class="btn btn-primary" onclick={readBook}>Read the book</button>
			{:else if !$settings.userSubscription && !$settings.userStartedTrial}
				<button class="btn btn-warning" onclick={trialStartModal.show}>Start trial period</button>
				<p class="small text-sm-end m-0 mt-2">Lorem ipsum <strong>trial priod</strong>, consectetur adipisicing elit. Alias blanditiis commodi cupiditate, deserunt dolores,
					fuga inventore.</p>
			{/if}
		</div>
	</div>
	<hr>
	<div class="row gap-md-4">
		<div class="col-sm-4 col-md-3 max-width-sm">
			<ItemCover />
			<div class="item-details">

			</div>
		</div>
		<div class="col mt-3 mt-sm-0">
			<h3>Table of contents</h3>
			<TOC />
		</div>
	</div>
	<hr>
	<div class="item-info">
		<div class="tags tags-rounded mt-3">
			<a href="#" class="tag hover-bg-light">Cultural History</a>
			<a href="#" class="tag hover-bg-light">Cultural History</a>
			<a href="#" class="tag hover-bg-light">Cultural History</a>
		</div>
		<p class="item-excerpt mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis commodi cupiditate, deserunt dolores,
			fuga inventore laudantium natus nisi numquam perferendis recusandae repellat tenetur? Dolore iste rem sint solutabook
			voluptate!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis commodi cupiditate, deserunt dolores,
			fuga inventore laudantium natus nisi numquam perferendis recusandae repellat tenetur? Dolore iste rem sint soluta
			voluptate!
		</p>
		<div class="mt-3">
			<div><strong>Publisher</strong>: Akadémiai Kiadó</div>
			<div><strong>Date of online publication</strong>: 2025</div>
			<div><strong>ISBN</strong>: 978 963 664 115 3</div>
			<div><strong>DOI</strong>: 10.1556/9789636640118</div>
			<div><strong>ISSN</strong>: 2786-4324</div>
			<div><strong>Link</strong>: <a href="#">This is the info link</a></div>
		</div>
		<p class="mt-3 small">Download reference:</p>
		<div class="item-references">
			<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> BibTeX</button>
			<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> EndNote</button>
			<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> Mendeley</button>
			<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> Zotero</button>
		</div>
	</div>
</div>

<TrialStartModal bind:this={trialStartModal} />
