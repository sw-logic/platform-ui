<script>
	import Icon from '$lib/components/Icon.svelte';
	let props = $props();
</script>

<button onclick={props.onclick} {...props} class="btn btn-control {props.class}"><Icon icon={props.icon} class="m-0" /></button>
