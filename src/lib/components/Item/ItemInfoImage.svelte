<script lang="ts">
	let { author, title, subtitle, categories, access, trial } = $props();
</script>

<div class="item-info">
	<div class="">
		<a href="#" class="item-link ai-result">
			<div>
				<strong>77. ábra.</strong>
				<span class="">Átmenet a 4P-<em>marketingből</em> a relationship <em>marketingbe</em></span>
			</div>
			<div class="item-details">
				<div>„...A relationship <em>marketing</em> egyik kiterjesztő felfogása Gummesson (1995a) koncepciója volt. Gummesson...”</div>
			</div>
			<div class="mt-3 small">
				<div class="item-author">{author}</div>
				<div class="item-title">{title}</div>
				<div class="item-subtitle">{subtitle}</div>
			</div>
		</a>
		<div class="item-details mt-3">
			<div class="tags tags-rounded">
				{#each categories.sort() as category, index (index)}
					<a href="#" class="tag hover-bg-light">{category}</a>
				{/each}
			</div>
		</div>
	</div>
</div>
