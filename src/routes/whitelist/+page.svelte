<script lang="ts">
	import { enhance } from '$app/forms';
	import { m } from '../../paraglide/messages';
	let { data, form } = $props();
</script>

<form
	class="card card-md bg-base-300 mb-2 shadow-lg"
	method="POST"
	use:enhance={() => {
		return async ({ update }) => {
			update({ reset: false });
		};
	}}
>
	<div class="card-body">
		<span class="card-title">{m.whitelist_title()}</span>
		<label>
			<input
				name="mcName"
				oninput={form != null ? () => (form = null) : void 0}
				type="text"
				class="input"
				placeholder={m.whitelist_playername()}
				value={data.mcName}
			/>
		</label>
		<label>
			<input type="submit" class="btn btn-primary" value={m.whitelist_save()} />
		</label>
		<p>
			{m.whitelist_noteNumber()}
		</p>
		<p>{m.whitelist_noteMsg()}</p>

		{#if form?.errorMessage}
			<div class="alert alert-error">
				<span class="">Error: {form.errorMessage}</span>
			</div>
		{/if}
		{#if form?.successMessage}
			<div class="alert alert-success">
				<span class="hide">{form.successMessage}</span>
			</div>
		{/if}
	</div>
	<input type="text" hidden name="userId" value={data.session.user.userId} />
</form>
