<script lang="ts">
	import { base } from '$app/paths';
</script>

<a class="navbar-brand" href="{base}/" aria-label="Platform Logo">
	<div class="logo-desktop d-none d-sm-block fw-bold">
		<img src="/images/misc/ASPI_logo.svg" height="auto" width="200" />
	</div>
	<div class="logo-mobile d-sm-none">
		<img src="/images/misc/ASPI_logo_mobile.svg" height="auto" width="100" />
	</div>
</a>

<style lang="scss">
	.logo-mobile span {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #000;
		color: #fff;
		border-radius: 1rem;
	}
</style>
