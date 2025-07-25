<script>
import NavLink from '$lib/components/NavLink.svelte';
</script>

<footer class="bg-light py-3 mt-auto">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-sm-6 d-flex gap-3">

				<nav class="navbar py-0 navbar-expand-md">
					<div class="container">
						<ul class="navbar-nav gap-3">
							<li class="nav-item small"><NavLink title="Disclaimer" /></li>
							<li class="nav-item small"><NavLink title="Privacy statement" /></li>
							<li class="nav-item small"><NavLink title="Terms & conditions" /></li>
						</ul>
					</div>
				</nav>
			</div>
			<div class="col-sm-6">
				<p class="text-end text-muted mb-0 small">©{new Date().getFullYear()} Wolters Kluwer N.V. and/or its affiliates. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
