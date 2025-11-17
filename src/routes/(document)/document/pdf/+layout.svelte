<script>
	import { onMount } from 'svelte';
	import { Sidebar } from '$lib/scripts/sidebar';
	import { ClassToggle } from '$lib/scripts/classToggle';
	import ControlIcon from '$lib/components/ControlIcon.svelte';
	import DocumentToolbar from '$lib/components/Documents/DocumentToolbar.svelte';
	import NavLink from '$lib/components/NavLink.svelte';
	import DocumentHeaderToolbar from '$lib/components/Documents/DocumentHeaderToolbar.svelte';
	import DocumentFooterPDF from '$lib/components/Documents/DocumentFooterPDF.svelte';

	let { children } = $props();

	onMount(() => {
		Sidebar.init();
		ClassToggle.init();
	});
</script>

<div class="document-view">
	<div class="document-content">
		<div class="document-header">
			<DocumentHeaderToolbar docType="pdf" />
		</div>
		<div class="document-body">
			{@render children()}
		</div>
		<div class="document-footer">
			<DocumentFooterPDF />
		</div>
	</div>
	<div class="sidebar sidebar-collapse-md document-toolbar border-start shadow" id="documentToolbar">
		<div class="sidebar-header d-md-none">
			<h4>Toolbar</h4>
			<ControlIcon icon="close" data-sidebar-close="#documentToolbar" aria-label="Close sidebar" />
		</div>
		<div class="sidebar-body">
			<DocumentToolbar />
		</div>
	</div>
</div>
