<script>
	import ItemCover from '$lib/components/Item/ItemCover.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">Information</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div class="row">
					<div class="col-6 col-sm-4">
						<ItemCover class="mb-3" />
					</div>
					<div class="col-sm-8">
						<div class="row">
							<div class="col flex-grow-1">
								<h6 class="text-muted">Dr. John Doe</h6>
								<h4>Title of the book</h4>
								<div class="small text-muted">Subtitle of the book</div>
							</div>
							<div class="col-auto">
								<button class="btn btn-primary">Read</button>
							</div>
						</div>
						<div class="tags tag-rounded mt-3">
							<span class="tag hover-bg-light">Cultural History</span>
							<span class="tag hover-bg-light">Cultural History</span>
							<span class="tag hover-bg-light">Cultural History</span>
						</div>
						<div class="mt-3">
							<div><strong>Publisher</strong>: Akadémiai Kiadó</div>
							<div><strong>Date of online publication</strong>: 2025</div>
							<div><strong>ISBN</strong>: 978 963 664 115 3</div>
							<div><strong>DOI</strong>: 10.1556/9789636640118</div>
							<div><strong>ISSN</strong>: 2786-4324</div>
							<div><strong>Link</strong>: <a href="#">This is the info link</a></div>
						</div>
						<div class="d-flex gap-2 flex-wrap mt-3">
							<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> BibTeX</button>
							<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> EndNote</button>
							<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> Mendeley</button>
							<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> Zotero</button>
						</div>
					</div>
				</div>
				<hr>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt mollitia, molestiae error voluptas ipsam
					est nemo consectetur quaerat quos quo eligendi eos vel nesciunt consequuntur a sed accusamus eius fuga? Lorem
					ipsum dolor sit amet, consectetur adipisicing elit. Deserunt mollitia, molestiae error voluptas ipsam
					est nemo consectetur quaerat quos quo eligendi eos vel nesciunt consequuntur a sed accusamus eius fuga?</p>
			</div>
		</div>
	</div>
</div>
