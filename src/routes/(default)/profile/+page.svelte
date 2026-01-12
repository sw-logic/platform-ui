<script>
</script>

<div class="container py-5">
	<h1>Profile</h1>
	<div class="row gx-6 gap-4 gap-lg-0 mt-3">
		<div class="col-lg-6 order-1 order-lg-0">
			<h3>Személyes adataim</h3>
			<form method="post"><input type="hidden" name="mod" value="3">
				<input type="hidden" name="usrpara">
				<div class="mb-2">
					<label for="email" class="form-label m-text-xs">E-mail-cím</label>
					<input type="email" name="email" value="info@smartworks.studio" id="email" class="form-control" disabled="">
					<div id="error_email" class="error-messages">
						<div id="error_email_3" class="error-message"><span class="wk-icon-filled-caution text-red"></span>Hibás e-mail-cím</div>
						<div id="error_email_7" class="error-message"><span class="wk-icon-filled-caution text-red"></span>Ezzel az e-mail-címmel már regisztráltak!</div>
						<div id="error_email_10" class="error-message"><span class="wk-icon-filled-caution text-red"></span>Hiba történt a regisztráció során.</div>
					</div>
				</div>
				<div class="mb-2"><label for="name" class="form-label m-text-xs required">Név</label>
					<input type="text" name="name" value="Lengyel Boldizsár" id="name" class="form-control">
					<div id="error_name" class="error-messages">
						<div id="error_name_1" class="error-message"><span class="wk-icon-filled-caution text-red"></span>A név kitöltése kötelező!</div>
					</div>
				</div>
				<div class="mb-2">
					<label for="oldpassword" class="form-label m-text-xs required">Jelenlegi jelszó</label>
					<input type="password" name="oldpassword" id="oldpassword" class="form-control">
					<div id="error_old_password" class="error-messages">
						<div id="error_old_password_1" class="error-message"><span class="wk-icon-filled-caution text-red"></span>Nem megfelelő jelszó</div>
					</div>
				</div>
				<div class="mb-2">
					<label for="password" class="form-label m-text-xs required">Jelszó</label>
					<input type="password" name="password" id="password" class="form-control" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="A jelszó minimum 8 karakter hosszú legyen, és tartalmazzon legalább 1&nbsp;kisbetűt, 1&nbsp;nagybetűt és 1&nbsp;számot." aria-label="A jelszó minimum 8 karakter hosszú legyen, és tartalmazzon legalább 1&nbsp;kisbetűt, 1&nbsp;nagybetűt és 1&nbsp;számot.">
					<div id="error_password" class="error-messages">
						<div id="error_password_4" class="error-message"><span class="wk-icon-filled-caution text-red"></span>A jelszó minimum 8 karakter hosszú legyen, és tartalmazzon legalább 1&nbsp;kisbetűt, 1&nbsp;nagybetűt és 1&nbsp;számot.</div>
						<div id="error_password_10" class="error-message"><span class="wk-icon-filled-caution text-red"></span>Hiba történt a művelet során.</div>
					</div>
				</div>
				<div class="mb-2">
					<label for="retypePassword" class="form-label m-text-xs required">Jelszó újra</label>
					<input type="password" name="retypePassword" id="retypePassword" class="form-control">
					<div id="error_retype_password" class="error-messages">
						<div id="error_retype_password_1" class="error-message"><span class="wk-icon-filled-caution text-red"></span>A megadott jelszavak nem egyeznek meg.</div>
					</div>
				</div>
				<div class="mt-4 mb-3">
					<button type="submit" name="adatmodositas_submit" class="btn btn-primary">Save</button>
				</div>
			</form>
		</div>
		<div class="col-lg-6">
			<h3 class="mb-lg-4">Előfizetéseim</h3>
			<div class="card p-3">
				<table class="table bg-lighter">
					<thead>
					<tr>
						<th>Előfizetés</th>
						<th>Érvényes</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Magyar Elektronikus Referenciamű Szolgáltatás</td>
						<td class="text-nowrap">2029. 01. 07.</td>
					</tr>
					</tbody>
				</table>
				<div>
					<a href="/egyeb/elofizetes/" class="btn btn-primary mt-2 mb-4 mb-lg-0">Előfizetés</a>
				</div>
			</div>
		</div>
	</div>
</div>
