<script>
import Icon from '$lib/components/Icon.svelte';
let props = $props();
</script>

<div class="para-note {props.note ? 'show' : ''}">
	<div class="para-note-content">
		<div class="para-note-content-label"><Icon icon="chat-box" /></div>
		<div class="para-note-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque consectetur cumque eius enim eveniet, fugiat fugit impedit iusto ullam! Adipisci ipsa natus neque, nostrum odit omnis possimus repudiandae sit!</div>
	</div>
	<div class="para-note-input collapse" id={props.id}>
		<form>
			<div class="form-group position-relative">
				<textarea class="form-control" placeholder="Write a note here..." maxlength="2500" rows="5" id="{props.id}_pnjszoveg"></textarea>
				<span class="para-character-counter">2488 / 2500</span>
			</div>
			<div class="form-group d-flex justify-content-between mt-2">
				<button type="button" class="btn btn-sm btn-outline-dark me-1 note-btn-delete" value="Törlés" data-click="1">Delete</button>
				<div>
					<button type="button" class="btn btn-sm btn-outline-dark me-1 note-btn-cancel" value="Mégsem" data-click="1">Cancel</button>
					<button type="button" class="btn btn-sm btn-primary note-btn-save" value="Mentés" data-click="1">Save</button>
				</div>
			</div>
		</form>
	</div>
</div>
