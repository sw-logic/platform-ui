<script>
import NavLink from '$lib/components/NavLink.svelte';
import ControlIcon from '$lib/components/ControlIcon.svelte';
import DocumentHeaderBreadcrumbs from '$lib/components/Documents/DocumentHeaderBreadcrumbs.svelte';

export let docType = 'xml';
</script>

<div class="header-toolbar site-indent">
	<NavLink icon="arrow-left" title="Back" class="gap-1" />
	{#if docType==="xml"}
		<DocumentHeaderBreadcrumbs />
	{:else}
		<div class="flex-row-center">
			<span class="wk-icon-filled-book"></span>Name of Document.pdf
		</div>
	{/if}

	<div class="header-toolbar-tools" data-active-toggle=".active-toggle">
		<ControlIcon icon="info" title="Info" class="hover-text-bg-primary" />
		<ControlIcon icon="heart" title="Add to favorites" class="hover-text-bg-primary" />
		<ControlIcon icon="folder" title="Add to folder" class="hover-text-bg-primary" />
		<ControlIcon
			icon="layout"
			title="Toggle toolbar"
			class="active-toggle ms-3 hover-text-bg-primary d-none d-md-flex"
			data-toggle="#documentToolbar"
			data-toggle-class="d-none"
		/>
		<ControlIcon
			icon="layout"
			class="ms-3 d-md-none"
			data-sidebar-target="#documentToolbar"
			aria-label="Toggle sidebar"
		/>
	</div>
</div>
