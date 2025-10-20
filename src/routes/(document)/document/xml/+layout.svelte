<script>
	import { onMount } from 'svelte';
	import { Sidebar } from '$lib/scripts/sidebar';
	import { ClassToggle } from '$lib/scripts/classToggle';
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import DocumentToolbar from '$lib/components/Documents/DocumentToolbar.svelte';
	import NavLink from '$lib/components/NavLink.svelte';

	let { children } = $props();

	onMount(() => {
		Sidebar.init();
		ClassToggle.init();
	});
</script>

<div class="document-view">
	<div class="document-content">
		<div class="document-header">
			<div class="header-toolbar site-indent">
				<div class="header-toolbar-nav">
					<NavLink icon="arrow-left" title="Back" class="gap-1" />
					<nav class="breadcrumbs small">
						<div class="wk-icon-filled-book"></div>
						<NavLink title="Book Title" href="/document/xml/book-title" />
						<span class="separator wk-icon-chevron-right"></span>
						<NavLink title="Chapter Title" href="/document/xml/book-title" />
						<span class="separator wk-icon-chevron-right"></span>
						<NavLink title="Sub-Chapter Title" active={false} />
					</nav>
					<div class="header-toolbar-tools" data-active-toggle=".active-toggle">
						<ControlIcon icon="info" title="Info" class="hover-text-bg-primary" />
						<ControlIcon icon="heart" title="Add to favorites" class="hover-text-bg-primary" />
						<ControlIcon icon="folder" title="Add to folder" class="hover-text-bg-primary" />
						<ControlIcon
							icon="layout"
							title="Toggle toolbar"
							class="active-toggle ms-3 hover-text-bg-primary"
							data-toggle="#documentToolbar"
							data-toggle-class="d-none"
						/>
					</div>
				</div>
				<div class="header-toolbar-end"></div>
			</div>
			<div class="ms-auto d-md-none">
				<ControlIcon icon="filled-funnel" data-sidebar-target="#document-toolbar" aria-label="Toggle sidebar" />
			</div>
		</div>
		<div class="document-body">
			{@render children()}
		</div>
		<div class="document-footer">
			<div class="footer-toolbar site-indent">
				<div class="footer-toolbar-nav">
					<div class="col-auto"><ControlIcon icon="chevron-left" title="Previous Chapter" class="hover-text-bg-primary" /></div>
					<div class="col nav-slider" id="navSlider">
						<div class="nav-slider-timeline"></div>
						<div class="nav-slider-button"></div>
					</div>
					<div class="col-auto"><ControlIcon icon="chevron-right" title="Next Chapter" class="hover-text-bg-primary" /></div>
				</div>
				<div class="footer-toolbar-end"></div>
			</div>
		</div>
	</div>
	<div class="sidebar sidebar-collapse-md document-toolbar border-start shadow" id="documentToolbar">
		<div class="sidebar-header d-md-none">
			<h4>Toolbar</h4>
			<ControlIcon icon="close" data-sidebar-close="#document-toolbar" aria-label="Close sidebar" />
		</div>
		<div class="sidebar-body">
			<DocumentToolbar />
		</div>
	</div>
</div>
