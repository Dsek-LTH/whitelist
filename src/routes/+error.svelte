<script>
	import { page } from '$app/state';
	import { m } from '../paraglide/messages';
</script>

<div class="card text-center">
	<h1 class="text-4xl font-bold">{page.status}</h1>
	<span class="text-lg">{page.error?.message}</span>
	<p class="mt-3">
		{m.errorpage()} <a class="link" href="https://github.com/Dsek-LTH/whitelist">GitHub</a>.
	</p>
</div>
