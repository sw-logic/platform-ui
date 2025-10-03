<script>
	import { onMount } from 'svelte';
	import { Toolbar } from '$lib/scripts/toolbar';
	import Icon from '$lib/components/Icon.svelte';

	onMount(() => {
		Toolbar.init();
	});
</script>

<div class="toolbar document-toolbar">
	<div class="toolbar-item active">
		<div class="toolbar-item-header">
			<h6>Settings</h6>
			<Icon icon="chevron-right" class="toolbar-item-header-icon"/>
		</div>
		<div class="toolbar-item-body">
			<div class="content">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
				laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
					laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
					laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
					laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
					laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!</p>
			</div>
		</div>
	</div>
	<div class="toolbar-item">
		<div class="toolbar-item-header">
			<h6>Settings</h6>
			<Icon icon="chevron-right" class="toolbar-item-header-icon"/>
		</div>
		<div class="toolbar-item-body">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
			laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!
		</div>
	</div>
	<div class="toolbar-item">
		<div class="toolbar-item-header">
			<h6>Settings</h6>
			<Icon icon="chevron-right" class="toolbar-item-header-icon"/>
		</div>
		<div class="toolbar-item-body">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid asperiores cumque dolorem earum fuga
			laboriosam modi natus nihil possimus quasi sed temporibus unde? Illo illum laborum sunt tempora voluptates!
		</div>
	</div>
</div>
