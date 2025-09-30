<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { TreeElement } from '../../scripts/treeElement.js';

	onMount(() => {
		TreeElement.init();
	});
</script>

<h3>Table of contents</h3>
<ul class="table-of-contents" data-element="tree" role="tree" aria-label="Table of contents navigation">
	<li>
		<a href="{base}/document/view">Viewpoint in linguistic cognition</a>
	</li>
	<li>
		<a href="{base}/document/view">Imprint</a>
	</li>
	<li><a href="{base}/document/view">1. Introduction</a>
	</li>
	<li class="content-list expanded">
		<div class="content-list-title">
			<button type="button" class="tree-toggle" aria-label="Toggle tree section">
				<span class="wk-icon-chevron-right"></span>
			</button><a href="{base}/document/view">2. The perspectivity of linguistic activity: the pragmatics of construction</a>
		</div>
		<ul>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a href="{base}/document/view">2.1. The adaptability of social cognition</a>
				</div>
				<ul>
					<li>
						<a href="{base}/document/view">2.1.1. Alternative conceptualization as choice and negotiation</a>
					</li>
					<li>
						<a href="{base}/document/view">2.1.2. Embodiment and discursivity – the biocultural process of adaptation</a>
					</li>
				</ul>
			</li>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a href="{base}/document/view">2.2. The intersubjectivity of attention management</a>
				</div>
				<ul>
					<li><a href="{base}/document/view">2.2.1. Discourses as joint attentional scenes</a>
					</li>
					<li><a href="{base}/document/view">2.2.2. Utterances as attention-directing events</a>
					</li>
				</ul>
			</li>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">2.3. The context-dependence of construction</a>
				</div>
				<ul>
					<li>
						<a href="{base}/document/view">2.3.1. Context and contextualization</a>
					</li>
					<li>
						<a href="{base}/document/view">2.3.2. Context-dependent starting points of construction</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="{base}/document/view">2.4. Summary</a>
			</li>
		</ul>
	</li>
	<li class="content-list">
		<div class="content-list-title">
			<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
			<a href="{base}/document/view">3. The perspectivity of context: deictic and reflexive contextualization</a>
		</div>
		<ul>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">3.1. The deixis of contextualization</a>
				</div>
				<ul>
					<li class="content-list">
						<div class="content-list-title">
							<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
							<a class="m-hover-box-sm" href="{base}/document/view">3.1.1. Spatial and temporal marking</a>
						</div>
						<ul>
							<li><a href="{base}/document/view">3.1.1.1. The operation of spatial deixis</a>
							</li>
							<li><a href="{base}/document/view">3.1.1.2. The operation of temporal deixis</a>
							</li>
							<li><a href="{base}/document/view">3.1.1.3. Deictic relation based on spatial and temporal contiguity</a>
							</li>
						</ul>
					</li>
					<li class="content-list">
						<div class="content-list-title">
							<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
							<a class="m-hover-box-sm" href="{base}/document/view">3.1.2. The deixis of person marking and social attitude marking</a>
						</div>
						<ul>
							<li><a href="{base}/document/view">3.1.2.1. The operation of person deixis</a>
							</li>
							<li><a href="{base}/document/view">3.1.2.2. Social attitude deixis</a>
							</li>
							<li><a href="{base}/document/view">3.1.2.3. The deixis of social cognition and relationship building</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">3.2. Metapragmatic awareness of contextualization</a>
				</div>
				<ul>
					<li><a href="{base}/document/view">3.2.1. Reflexivity and awareness</a>
					</li>
					<li><a href="{base}/document/view">3.2.2. Metapragmatic signals as contextualizers</a>
					</li>
				</ul>
			</li>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">3.3. Contextualizing constructions within and beyond the sentence</a>
				</div>
				<ul>
					<li><a href="{base}/document/view">3.3.1. Deictic contextualizers</a>
					</li>
					<li><a href="{base}/document/view">3.3.2. Reflexive contextualizers</a>
					</li>
				</ul>
			</li>
			<li><a href="{base}/document/view">3.4. Summary</a>
			</li>
		</ul>
	</li>
	<li class="content-list">
		<div class="content-list-title">
			<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
			<a href="{base}/document/view">4. The perspectivity of discourse: attention management in narrative and lyric texts</a>
		</div>
		<ul>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">4.1. Referential interpretation of stories</a>
				</div>
				<ul>
					<li class="content-list">
						<div class="content-list-title">
							<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
							<a class="m-hover-box-sm" href="{base}/document/view">4.1.1. And that will be good</a>
						</div>
						<ul>
							<li><a href="{base}/document/view">4.1.1.1. The unique narrative pattern of the interplay between explicitness and implicitness</a>
							</li>
							<li><a href="{base}/document/view">4.1.1.2. Perspectivization and irony</a>
							</li>
							<li><a href="{base}/document/view">4.1.1.3. Summary statements</a>
							</li>
						</ul>
					</li>
					<li class="content-list">
						<div class="content-list-title">
							<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
							<a class="m-hover-box-sm" href="{base}/document/view">4.1.2. School at the Border</a>
						</div>
						<ul>
							<li><a href="{base}/document/view">4.1.2.1. Reconfiguration of discursive schemes of narrative fiction</a>
							</li>
							<li><a href="{base}/document/view">4.1.2.2. Mutually relativizing behavioral patterns in the social world of the story</a>
							</li>
							<li><a href="{base}/document/view">4.1.2.3. Summary statements</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">4.2. Genre and viewpoint in narratives</a>
				</div>
				<ul>
					<li class="content-list">
						<div class="content-list-title">
							<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
							<a class="m-hover-box-sm" href="{base}/document/view">4.2.1. Esti</a>
						</div>
						<ul>
							<li><a href="{base}/document/view">4.2.1.1. Genre as discursive scheme</a>
							</li>
							<li><a href="{base}/document/view">4.2.1.2. Reconfiguration of genre schemes</a>
							</li>
							<li><a href="{base}/document/view">4.2.1.3. Summary statements</a>
							</li>
						</ul>
					</li>
					<li class="content-list">
						<div class="content-list-title">
							<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
							<a class="m-hover-box-sm" href="{base}/document/view">4.2.2. The Story of My Burn</a>
						</div>
						<ul>
							<li><a href="{base}/document/view">4.2.2.1. The pragmatics of computer-mediated narratives</a>
							</li>
							<li><a href="{base}/document/view">4.2.2.2. Narrative schemes of burn stories</a>
							</li>
							<li><a href="{base}/document/view">4.2.2.3. Summary statements</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">4.3. Viewpoint in song lyrics</a>
				</div>
				<ul>
					<li class="content-list">
						<div class="content-list-title">
							<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
							<a class="m-hover-box-sm" href="{base}/document/view">4.3.1. The lyricism of apostrophe</a>
						</div>
						<ul>
							<li><a href="{base}/document/view">4.3.1.1. Song lyrics as apostrophic fictions</a>
							</li>
							<li><a href="{base}/document/view">4.3.1.2. Apostrophic discourses in song lyrics</a>
							</li>
							<li><a href="{base}/document/view">4.3.1.3. Summary statements</a>
							</li>
						</ul>
					</li>
					<li class="content-list">
						<div class="content-list-title">
							<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
							<a class="m-hover-box-sm" href="{base}/document/view">4.3.2. The lyricism of person marking</a>
						</div>
						<ul>
							<li><a href="{base}/document/view">4.3.2.1. The contextualizing and perspectivizing role of person marking in song lyrics</a>
							</li>
							<li><a href="{base}/document/view">4.3.2.2. Personality and subjectivization in song lyrics</a>
							</li>
							<li><a href="{base}/document/view">4.3.2.3. Summary statements</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li><a href="{base}/document/view">4.4. Summary</a>
			</li>
		</ul>
	</li>
	<li class="content-list">
		<div class="content-list-title">
			<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
			<a href="{base}/document/view">5. The perspectivity of style: attribution of style in everyday and literary discourses</a>
		</div>
		<ul>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">5.1. The sociocultural situatedness of style attribution – theoretical insights</a>
				</div>
				<ul>
					<li><a href="{base}/document/view">5.1.1. Style attribution as a deictic operation</a>
					</li>
					<li><a href="{base}/document/view">5.1.2. Style attribution as activation of style patterns</a>
					</li>
				</ul>
			</li>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">5.2. Sociocultural factors of style attribution – possibilities of empirical investigation</a>
				</div>
				<ul>
					<li><a href="{base}/document/view">5.2.1. Designations reflecting on style attribution</a>
					</li>
					<li><a href="{base}/document/view">5.2.2. Stylistic markedness</a>
					</li>
					<li><a href="{base}/document/view">5.2.3. Sociocultural factors</a>
					</li>
					<li><a href="{base}/document/view">5.2.4. Conclusions</a>
					</li>
				</ul>
			</li>
			<li class="content-list">
				<div class="content-list-title">
					<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
					<a class="m-hover-box-sm" href="{base}/document/view">5.3. The homogeneity and heterogeneity of style in the short stories of Antal Szerb</a>
				</div>
				<ul>
					<li><a href="{base}/document/view">5.3.1. Style – homogenization, polarization and relativization in formulation</a>
					</li>
					<li><a href="{base}/document/view">5.3.2. Irony – formulation, reflexivity and understanding ignorance</a>
					</li>
				</ul>
			</li>
			<li><a href="{base}/document/view">5.4. Summary</a>
			</li>
		</ul>
	</li>
	<li class="content-list">
		<div class="content-list-title">
			<button type="button" class="tree-toggle" aria-label="Toggle tree section"><span class="wk-icon-chevron-right"></span></button>
			<a href="{base}/document/view">6. Summary</a>
		</div>
		<ul>
			<li><a href="{base}/document/view">6.1. The model of context-dependent starting points</a>
			</li>
			<li><a href="{base}/document/view">6.2. The pragmatic approach to construction</a>
			</li>
			<li><a href="{base}/document/view">6.3. (Re)interpretation of contextualization</a>
			</li>
			<li><a href="{base}/document/view">6.4. The perspectivity of narrative and lyric discourses</a>
			</li>
			<li><a href="{base}/document/view">6.5. The pragmatic approach to style attribution</a>
			</li>
		</ul>
	</li>
	<li><a href="{base}/document/view">References</a>
	</li>
</ul>
