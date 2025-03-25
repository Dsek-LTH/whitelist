<script lang="ts">
	import { enhance } from '$app/forms';
	import { m } from '../../../paraglide/messages';
	let { form } = $props();
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
		<span class="card-title">{m.nav_admin_manual()}</span>
		<div class="flex flex-col gap-4 md:flex-row">
			<span class="floating-label sm:hidden">{m.general_stilid()}</span>
			<label class="input w-48">
				<span class="sm:label hidden">{m.general_stilid()}</span>
				<input
					name="stilId"
					oninput={form != null ? () => (form = null) : void 0}
					type="text"
					placeholder="ab1234cd-s"
				/>
			</label>
			<span class="floating-label sm:hidden">{m.general_minecraftname()}</span>
			<label class="input sm:w-100">
				<span class="sm:label hidden">{m.general_minecraftname()}</span>
				<input
					name="mcName"
					oninput={form != null ? () => (form = null) : void 0}
					type="text"
					placeholder="rosaPantern"
				/>
			</label>
			<label>
				<input type="submit" class="btn btn-primary" value={m.whitelist_save()} />
			</label>
		</div>

		<p>
			{m.whitelist_override()}
		</p>
		<p>
			{m.whitelist_noteMsg()}
		</p>
		{#if form?.errorMessage}
			<div class="alert alert-error">
				<span class="">{m.general_error()}: {form.errorMessage}</span>
			</div>
		{/if}
		{#if form?.successMessage}
			<div class="alert alert-success">
				<span class="hide">{form.successMessage}</span>
			</div>
		{/if}
	</div>
</form>
