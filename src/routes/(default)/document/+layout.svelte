<script>
	let { children } = $props();
</script>

<div class="document-view">
	<div class="document-content">
		<div class="document-header">Header</div>
		<div class="document-body">
			{@render children()}
		</div>
		<div class="document-footer">Footer</div>
	</div>
	<div class="document-toolbar border-start shadow"></div>
</div>
