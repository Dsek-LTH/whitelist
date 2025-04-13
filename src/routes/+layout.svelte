<script lang="ts">
	import '../app.css';
	import { m } from '../paraglide/messages';
	import { getLocale, setLocale } from '../paraglide/runtime';
	let { children, data } = $props();
</script>

<div class="navbar bg-base-300 mb-5">
	<div class="navbar-start">
		<a class="btn btn-ghost" href="/">{m.nav_home()}</a>
		<a class="btn btn-ghost" href="/whitelist">{m.nav_whitelist()}</a>
		{#if data.admin}
			<div class="dropdown dropdown-hover">
				<div tabindex="0" role="button" class="btn-ghost btn m-1">
					{m.nav_admin()}<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" /></svg
					>
				</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul
					tabindex="0"
					class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
				>
					<a class="btn" href="/admin/manual">{m.nav_admin_manual()}</a>
					<a class="btn" href="/admin/list">{m.nav_admin_list()}</a>
				</ul>
			</div>
		{/if}
	</div>

	<div class="navbar-end">
		<div class="dropdown dropdown-end sm:hidden">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul class="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
				<div class="flex">
					<button
						class="btn btn-circle m-1"
						onclick={() => (getLocale() == 'sv' ? setLocale('en') : setLocale('sv'))}
						>{getLocale() == 'sv' ? 'EN' : 'SV'}</button
					>
				</div>
				<span class="m-3"
					>{data.session ? m.nav_signedin() + data.session?.user?.userId : m.nav_signedout()}</span
				>
			</ul>
		</div>
		<span class="m-3 hidden sm:inline"
			>{data.session ? m.nav_signedin() + data.session?.user?.userId : m.nav_signedout()}</span
		>

		<button
			class="btn btn-circle m-1 hidden sm:inline-flex"
			onclick={() => (getLocale() == 'sv' ? setLocale('en') : setLocale('sv'))}
			>{getLocale() == 'sv' ? 'EN' : 'SV'}</button
		>
		<!--button onclick={()) => signIn()}>Signin</button>-->
	</div>
</div>
<main class="mx-auto w-11/12 sm:w-10/12 lg:w-8/12">
	{@render children()}
</main>
<!--
<footer class="center absolute bottom-0 left-[50vw]">
	<a href="https://dsek.se/committees/cpu" class="text-center text-sm">
		<img
			src="https://raw.githubusercontent.com/Dsek-LTH/grafik/refs/heads/main/committee_logos/cpu/SVG/symbol/dark.svg"
			width="24px"
			height="24px"
			alt="CPU Committee logo"
			class="mb-2 inline"
		/>
	</a>
</footer>
-->
