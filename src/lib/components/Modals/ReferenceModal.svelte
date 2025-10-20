<script>
import ControlIcon from '$lib/components/ControlIcon.svelte';
import Icon from '$lib/components/Icon.svelte';
</script>

<div class="modal fade" id="referenceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">References</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body refs">
				<div class="mb-2">Link: <a href="#">https://mersz.hu/kiadvany/38/dokumentum/info/</a></div>
				<div class="mb-1">Please select a reference format:</div>
				<div class="bg-lighter p-2">
					<table>
						<tbody>
						<tr>
							<td>Harvard:</td>
							<td>
								<div class="reference-link">
									Lakatos Mária (2020): <i>Adózás I.</i>. Budapest: Akadémiai Kiadó. <a target="_blank" href="https://doi.org/10.1556/9789634546504">https://doi.org/10.1556/9789634546504</a>
									Letöltve: <a style="word-break: break-all;" href="https://mersz.hu/hivatkozas/m480adz_28/#m480adz_28">https://mersz.hu/hivatkozas/m480adz_28/#m480adz_28</a> (2025. 10. 09.)
								</div>
							</td>
							<td class="text-end"><ControlIcon icon="files" class="no-hover" /></td>
						</tr>
						<tr>
							<td>Chicago:</td>
							<td>
								<div class="reference-link">
									Lakatos Mária. 2020. <i>Adózás I.</i>. Budapest: Akadémiai Kiadó. <a target="_blank" href="https://doi.org/10.1556/9789634546504">https://doi.org/10.1556/9789634546504</a>
									(Letöltve: 2025. 10. 09. <a style="word-break: break-all;" href="https://mersz.hu/hivatkozas/m480adz_28/#m480adz_28">https://mersz.hu/hivatkozas/m480adz_28/#m480adz_28</a>)
								</div>
							</td>
							<td class="text-end"><ControlIcon icon="files" class="no-hover" /></td>
						</tr>
						<tr>
							<td>APA:</td>
							<td>
								<div class="reference-link">
									Lakatos M. (2020).  <i>Adózás I.</i>. Akadémiai Kiadó. <a target="_blank" href="https://doi.org/10.1556/9789634546504">https://doi.org/10.1556/9789634546504</a>.
									(Letöltve: 2025. 10. 09.<a style="word-break: break-all;" href="https://mersz.hu/hivatkozas/m480adz_28/#m480adz_28">https://mersz.hu/hivatkozas/m480adz_28/#m480adz_28</a>)
								</div>
							</td>
							<td class="text-end"><ControlIcon icon="files" class="no-hover" /></td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="d-flex gap-2 flex-wrap mt-3">
					<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> BibTeX</button>
					<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> EndNote</button>
					<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> Mendeley</button>
					<button class="btn btn-sm btn-outline-dark"><Icon icon="download-line" /> Zotero</button>
				</div>
			</div>
		</div>
	</div>
</div>
