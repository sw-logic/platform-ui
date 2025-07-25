<script>
	import Icon from '$lib/components/Icon.svelte';
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import BookCover from '$lib/components/Book/BookCover.svelte';

	export let cover = 'book-1.png';
	export let author = 'Dr. John Doe';
	export let title = 'Title of the book';
	export let subtitle = 'Subtitle of the book';
</script>

<div class="g-col-12 g-col-sm-4 g-col-md-2">
	<div>
		<BookCover {cover} />
		<div class="d-flex flex-row mt-1 mb-3">
			<ControlIcon icon="heart" title="Add to favorites" />
			<ControlIcon icon="folder" title="Add to folder" />
			<ControlIcon icon="quote" title="Show reference" />
			<ControlIcon icon="download-line" title="Download to device" />
			<ControlIcon icon="info" title="Show information" data-bs-toggle="modal" data-bs-target="#infoModal" class="ms-auto" />
		</div>
		<h6 class="text-muted">{author}</h6>
		<h4>{title}</h4>
		<div class="small text-muted">{subtitle}</div>
	</div>
</div>
