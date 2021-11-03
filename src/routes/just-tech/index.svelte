<script context="module">
	import axios from 'axios';

	export const load = async () => {
		const { data } = await axios.get('https://dev.to/api/articles?username=bhekanik');
		if (data) {
			return {
				props: {
					articles: data
				}
			};
		}
	};
</script>

<script lang="ts">
	export let articles: any[];
</script>

<h1>Just Tech Blog</h1>

<ul>
	{#each articles as article (article.id)}
		<li>
			<a href={`just-tech/${article.slug}`}>
				<h2>
					{article.title}
				</h2>
				<p>{article.description}</p>
			</a>
		</li>
	{/each}
</ul>

<style>
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
