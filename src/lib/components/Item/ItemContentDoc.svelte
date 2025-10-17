<script>
import { base } from '$app/paths';

let {author, title, subtitle, excerpt, search, access, trial } = $props();

</script>

<div class="item-info">
	<a href="{base}/book-details" class="item-link">
		<div class="item-author">{author}</div>
		<div class="item-title">{title}</div>
		<div class="item-subtitle">{subtitle}</div>
	</a>
	<div class="item-details">
		{#if excerpt}
			<div class="item-excerpt mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aspernatur
				assumenda dignissimos, eligendi fugiat in modi molestias necessitatibus nemo neque non omnis perspiciatis
				quaerat quos sed voluptate voluptatem. Eius.
			</div>
		{/if}
		{#if search}
			<div class="item-results mt-3"><strong>125 találat</strong> a kiadványban</div>
			<ul class="list-items bullets mt-2">
				<li class="list-item">
					<a href="#" class="list-item-link" data-post="true">
						2.1. Beszerzési <em>marketing</em>
					</a>
				</li>
				<li class="list-item">
					<a href="#" class="list-item-link" data-post="true">
						2. A <em>marketing</em> eszközrendszere a kereskedelemben
					</a>
				</li>
				<li class="list-item">
					<a href="#" class="list-item-link" data-post="true">Kelemen Z. (2009): A kereskedelmi márkázás stratégiai lehetőségei. „Új <em>marketing</em> kihívások a XXI</a>
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
