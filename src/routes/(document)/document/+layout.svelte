<script>
	import { onMount } from 'svelte';
	import { Sidebar } from '$lib/scripts/sidebar.js';
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import DocumentToolbar from '$lib/components/Documents/DocumentToolbar.svelte';

	let { children } = $props();

	onMount(() => {
		Sidebar.init();
	});
</script>

<div class="document-view">
	<div class="document-content">
		<div class="document-header">
			<div class="site-indent">Header</div>
			<div class="ms-auto d-md-none">
				<ControlIcon icon="filled-funnel" data-sidebar-target="#document-toolbar" aria-label="Toggle sidebar" />
			</div>
		</div>
		<div class="document-body">
			{@render children()}
		</div>
		<div class="document-footer">
			<div class="site-indent">Footer</div>
		</div>
	</div>
	<div class="sidebar sidebar-collapse-md document-toolbar border-start shadow" id="document-toolbar">
		<div class="sidebar-header d-md-none">
			<h4>Toolbar</h4>
			<ControlIcon icon="close" data-sidebar-close="#document-toolbar" aria-label="Close sidebar" />
		</div>
		<div class="sidebar-body">
			<DocumentToolbar />
		</div>
	</div>
</div>
