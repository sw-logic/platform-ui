<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	let { children, title, ...props } = $props();
</script>

<div class="toolbar-item {props.class}">
	<div class="toolbar-item-header">
		<h6>{title}</h6>
		<Icon icon="chevron-right" class="toolbar-item-header-icon"/>
	</div>
	<div class="toolbar-item-body">
		{@render children()}
	</div>
</div>