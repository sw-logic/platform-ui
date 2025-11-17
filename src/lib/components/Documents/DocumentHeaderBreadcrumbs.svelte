<script>
import NavLink from '$lib/components/NavLink.svelte';
</script>

<nav class="breadcrumbs small d-none d-sm-flex">
	<span class="wk-icon-filled-book"></span>
	<NavLink title="Book Title" href="/document/xml/book-title" />
	<span class="separator wk-icon-chevron-right"></span>
	<NavLink title="Very Long Chapter Title" href="/document/xml/book-title" />
	<span class="separator wk-icon-chevron-right"></span>
	<NavLink title="Chapter Title" href="/document/xml/book-title" />
	<span class="separator wk-icon-chevron-right"></span>
	<NavLink title="Another Very Long Chapter Title" href="/document/xml/book-title" />
	<span class="separator wk-icon-chevron-right"></span>
	<NavLink title="Chapter Title" href="/document/xml/book-title" />
	<span class="separator wk-icon-chevron-right"></span>
	<NavLink title="Chapter Title" active={false} />
</nav>
