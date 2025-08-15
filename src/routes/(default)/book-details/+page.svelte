<script>
	import BookCover from '$lib/components/Book/BookCover.svelte';
</script>

<div class="container py-5">
	<div class="row">
		<div class="col-sm-6">
			<h3 class="text-muted mb-1">Dr. John Doe</h3>
			<h1 class=" mb-1">This is the very long title of the book</h1>
			<div class="small text-muted">Subtitle of the book</div>
		</div>
		<div class="col-sm-6">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis commodi cupiditate, deserunt dolores,
			fuga inventore laudantium natus nisi numquam perferendis recusandae repellat tenetur? Dolore iste rem sint soluta
			voluptate!
		</div>
	</div>
	<div class="row">
		<div class="col-sm-3">
			<BookCover class="mt-3" />
		</div>
		<div class="col-sm-8 offset-sm-1">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis commodi cupiditate, deserunt dolores,
			fuga inventore laudantium natus nisi numquam perferendis recusandae repellat tenetur? Dolore iste rem sint soluta
			voluptate!
		</div>
	</div>
</div>
