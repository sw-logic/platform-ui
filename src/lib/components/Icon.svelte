<script>
	let props = $props();
	let type = props.type || 'wk'; // Default to 'line' if not specified
</script>

{#if type === 'wk'}
	<span title={props.title} class="wk-icon-{props.icon} m-0 {props.class}"></span>
{:else}
	<i title={props.title} class="{props.type} fa-{props.icon} m-0 {props.class}"></i>
{/if}

