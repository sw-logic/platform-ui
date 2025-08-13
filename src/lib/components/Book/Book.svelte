<script>
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import BookCover from '$lib/components/Book/BookCover.svelte';
	import { base } from '$app/paths';

	export let cover = 'book-1.png';
	export let author = 'Dr. John Doe';
	export let title = 'Title of the book';
	export let subtitle = 'Subtitle of the book';
	export let type = 'book';
	export let tag = '';
</script>

<div class="hover-lift-up">
	<BookCover {cover} {type} {tag} />
	<div class="d-flex flex-row mt-1 mb-2">
		<ControlIcon icon="heart" title="Add to favorites" />
		<ControlIcon icon="folder" title="Add to folder" />
		<ControlIcon icon="quote" title="Show reference" />
		<ControlIcon icon="download-line" title="Download to device" />
		<ControlIcon icon="info" title="Show information" data-bs-toggle="modal" data-bs-target="#infoModal" class="ms-auto" />
	</div>
	<h6 class="text-muted mb-1">{author}</h6>
	<a class="text-decoration-none" href="{base}/book-details">
		<h4 class="mb-1">{title}</h4>
	</a>
	<div class="small text-muted">{subtitle}</div>
</div>

