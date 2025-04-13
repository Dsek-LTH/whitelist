<script lang="ts">
	import { m } from '../../../paraglide/messages';
	let { data } = $props();
</script>

<div class="card card-md bg-base-300 mb-2 shadow-lg">
	<div class="card-body">
		<span class="card-title">{m.admin_list_title()}</span>

		<table class="table">
			<thead>
				<tr>
					<th>{m.general_stilid()}</th>
					<th>{m.general_minecraftname()}</th>
				</tr>
			</thead>
			<tbody>
				{#each data.playerList as player, index (index)}
					<tr><td>{player.id}</td><td>{player.mcName}</td></tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
