<script lang="ts">
	import ItemCover from '$lib/components/Item/ItemCover.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { getItems } from '$lib/scripts/getItems';
	import Item from '$lib/components/Item/Item.svelte';

	const seriesBooks = getItems(10, { type: 'collection' });
</script>

<div class="container py-3 py-md-4 py-lg-5">
	<div class="d-flex flex-column flex-sm-row gap-0 gap-sm-3 gap-md-5">
		<div class="col-sm-4 col-md-3 max-width-sm">
			<ItemCover type="collection" />
		</div>
		<div class="col mt-3 mt-sm-0">
			<h1 class=" mb-1">This is the very long title of the collection</h1>
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
	</div>
	<hr>
	<div class="mt-3">
		<h2>Issues</h2>
		<div class="items item-grid item-grid-6">
			{#each seriesBooks as book, index (index)}
				<Item
					type={book.type}
					cover={book.cover}
					author={book.author}
					title={book.title}
					subtitle={book.subtitle}
					categories={book.categories}
					access={book.access}
					trial={book.trial}
					tag={book.tag}
					link="book-details/series"
				/>
			{/each}
		</div>
	</div>
</div>
