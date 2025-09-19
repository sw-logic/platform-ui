<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import BookCover from '$lib/components/Book/BookCover.svelte';
	import { base } from '$app/paths';

	export let cover = 'book-1.png';
	export let author = 'Dr. John Doe';
	export let title = 'Title of the book';
	export let subtitle = 'Subtitle of the book';
	export let type = '';
	export let tag = '';
	export let access = true;
	export let trial = false;

	function h
</script>

<div class="book hover-lift-up {access ? 'accessible' : 'not-accessible'} {trial ? 'trial-available' : ''}">
	<div class="book-cover">
		<BookCover {cover} {type} {tag} {access} {trial} href="{base}/book-details" />
		<div class="book-controls d-flex flex-row mt-1 mb-2">
			<ControlIcon icon="heart" title="Add to favorites" />
			<ControlIcon icon="folder" title="Add to folder" />
			<ControlIcon icon="quote" title="Show reference" />
			<ControlIcon icon="download-line" title="Download to device" />
			<ControlIcon icon="info" title="Show information" data-bs-toggle="modal" data-bs-target="#infoModal" class="ms-auto" />
		</div>
	</div>
	<div class="book-info">
		<div class="book-titles">
			<h6 class="text-muted mb-1">{author}</h6>
			<a class="text-decoration-none" href="{base}/book-details">
				<h4 class="mb-1">{title}</h4>
			</a>
			<div class="small text-muted">{subtitle}</div>
		</div>
		<div class="book-details">
			<p class="book-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aspernatur assumenda dignissimos, eligendi fugiat in modi molestias necessitatibus nemo neque non omnis perspiciatis quaerat quos sed voluptate voluptatem. Eius.</p>
		</div>
	</div>
</div>

