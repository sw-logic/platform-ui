<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import ItemCover from '$lib/components/Item/ItemCover.svelte';
	import { base } from '$app/paths';

	export let cover = 'book-1.png';
	export let author = 'Dr. John Doe';
	export let title = 'Title of the book';
	export let subtitle = 'Subtitle of the book';
	export let type = '';
	export let tag = '';
	export let access = true;
	export let trial = false;
	export let search = false;
	export let exerpt = false;

</script>

<div class="item hover-lift-up {access ? 'accessible' : 'not-accessible'} {trial ? 'trial-available' : ''}">
	<div class="item-cover">
		<ItemCover {cover} {type} {tag} {access} {trial} href="{base}/book-details" />
		<div class="book-controls d-flex flex-row mt-1 mb-2">
			<ControlIcon icon="heart" title="Add to favorites" />
			<ControlIcon icon="folder" title="Add to folder" />
			<ControlIcon icon="quote" title="Show reference" />
			<ControlIcon icon="download-line" title="Download to device" />
			<ControlIcon icon="info" title="Show information" data-bs-toggle="modal" data-bs-target="#infoModal"
									 class="ms-auto" />
		</div>
	</div>
	<div class="item-info">
		<div class="item-titles">
			<h6 class="text-muted mb-1">{author}</h6>
			<a class="text-decoration-none" href="{base}/book-details">
				<h4 class="mb-1">{title}</h4>
			</a>
			<div class="small text-muted">{subtitle}</div>
		</div>
		<div class="book-details">
			{#if exerpt}
				<div class="item-excerpt mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aspernatur
					assumenda dignissimos, eligendi fugiat in modi molestias necessitatibus nemo neque non omnis perspiciatis
					quaerat quos sed voluptate voluptatem. Eius.
				</div>
			{/if}
			{#if search}
				<ul class="list-items">
					<li class="list-item">
						<a href="#" class="list-item" data-post="true">
							2.1. Beszerzési <em>marketing</em>
						</a>
					</li>
					<li class="list-item">
						<a href="#" class="list-item" data-post="true">
							2. A <em>marketing</em> eszközrendszere a kereskedelemben
						</a>
					</li>
					<li class="list-item">
						<a href="#" class="list-item" data-post="true">
							Kelemen Z. (2009): A kereskedelmi márkázás stratégiai lehetőségei. „Új <em>marketing</em> kihívások a XXI
						</a>
					</li>
				</ul>
			{:else}
				<div class="book-meta mt-2">
					<div><strong>Publisher</strong>: Akadémiai Kiadó</div>
					<div><strong>Online publication</strong>: 2025</div>
					<div><strong>ISBN</strong>: 978 963 664 115 3</div>
					<div><strong>DOI</strong>: 10.1556/9789636640118</div>
					<div><strong>ISSN</strong>: 2786-4324</div>
				</div>
			{/if}
		</div>
		<div class="item-tags mt-2">
			{#if !access}
				{#if trial}
					<span class="info-tag bg-warning text-white">Trial available</span>
				{:else}
					<span class="info-tag bg-light text-middle">Not accessible</span>
				{/if}
			{/if}
		</div>
	</div>
</div>

