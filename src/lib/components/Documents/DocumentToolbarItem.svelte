<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	let { children, icon, title, ...props } = $props();
</script>

<div class="toolbar-item {props.class}">
	<div class="toolbar-item-header">
		<h6><Icon icon={icon} /> {title}</h6>
		<Icon icon="chevron-right" class="toolbar-item-header-icon"/>
	</div>
	<div class="toolbar-item-body">
		{@render children()}
	</div>
</div>
