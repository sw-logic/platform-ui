<script>
import Icon from '$lib/components/Icon.svelte';
import { settings } from '$lib';

function toggleUserLoggedIn() {
	settings.update(s => ({ ...s, userLoggedIn: !s.userLoggedIn }));
}
</script>

<div class="container py-5">
	<h1 class="text-center">Registration</h1>

	<div class="max-width-md mx-auto mt-5">
		<div class="row gap-5">
			<div class="col">
				<form>
					<div class="mb-3">
						<label for="username" class="form-label">Username</label>
						<input type="text" class="form-control" id="username" name="username" required>
					</div>
					<div class="mb-3">
						<label for="email" class="form-label">Email</label>
						<input type="text" class="form-control" id="email" name="username" required>
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">Password</label>
						<input type="password" class="form-control" id="password" name="password" required>
					</div>
					<div class="mb-3">
						<label for="password2" class="form-label">Password verification</label>
						<input type="password" class="form-control" id="password2" name="password" required>
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="remember" name="remember">
						<label class="form-check-label" for="remember">Please notify me about MeRSZ news and promotions.</label>
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="remember" name="remember">
						<label class="form-check-label" for="remember">Please notify me about Akadémiai Kiadó Zrt. news and promotions.</label>
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="remember" name="remember">
						<label class="form-check-label" for="remember">I acknowledge and accept the contents of the Data Management Policy.</label>
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="remember" name="remember">
						<label class="form-check-label" for="remember">I acknowledge and accept the General Terms and Conditions of Purchase and the contents of the license agreements of the szotar.net and mersz.hu websites.</label>
					</div>
					<button type="submit" on:click={toggleUserLoggedIn} class="btn btn-primary mt-3 w-100">Register</button>
				</form>

				<div class="divider">
					<div class="bg-white px-3">Or</div>
				</div>

				<div class="d-flex align-items-center justify-content-between gap-3">
					<button class="btn btn-outline-primary w-50"><Icon type="fa-brands" icon="google" /> Register with Google</button>
					<button class="btn btn-outline-primary w-50"><Icon type="fa-brands" icon="facebook" /> Register with Facebook</button>
				</div>

				<div class="divider">
					<div class="bg-white px-3">Are you a student?</div>
				</div>

				<div class="d-flex justify-content-center gap-3">
					<button class="btn btn-outline-primary align-self-center w-50">Register with EduID</button>
				</div>
				<div class="mt-5">
					<h5>Important!</h5>
					<p class="small">Akadémiai Kiadó has introduced a unified user identification system on its websites www.szotar.net, mersz.hu and akademiai.hu (AK-ID identification), so the email address and password provided during registration will grant access to all three websites, as well as to the interfaces available to registered users and, in the case of a valid subscription, to the subscribed services.</p>
				</div>
			</div>
			<div class="col">
				<h2>Why to register?</h2>
				<div class="d-flex flex-column gap-2 ps-3">
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Access to the full content of hundreds of publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Marking favorites
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Placing bookmarks and notes
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Intelligent, predictive search
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Filtering results
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Recommendation of similar search terms
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Organize works, images, and excerpts into your own folders
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Customizable navigation within publications
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Text highlighting
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Offline use
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						Search the archives of Akadémiai Kiadó
					</div>
					<div class="d-flex gap-2 align-items-center">
						<Icon icon="check" class="text-success" />
						AI-powered image search
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
