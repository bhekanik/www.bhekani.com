<script context="module">
	import SubscribeForm from '$lib/components/SubscribeForm/SubscribeForm.svelte';
	import axios from 'axios';

	export const load = async () => {
		const { data } = await axios.get('/just-reflections/issues', {});
		return {
			props: {
				issues: data
			}
		};
	};
</script>

<script lang="ts">
	export let issues: any[];
</script>

<section class="page-header">
	<h1>Just Reflections Newsletter</h1>
	<SubscribeForm />
</section>

<ul>
	{#each issues as issue (issue.id)}
		<li>
			<a href={`just-reflections/${issue.id}`}>
				<h2>
					{issue.title}
				</h2>
				<p>{@html issue.description}</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	.page-header {
		position: sticky;
		top: 80px;
		background-color: white;
		z-index: 998;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		margin: 0;
		padding: 0;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 0;
	}

	li {
		border: 1px solid lightgray;
		border-radius: 5px;
		padding: 1rem 2rem;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>
