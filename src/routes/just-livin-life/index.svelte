<script context="module">
	import { parse } from 'rss-to-json';

	export const load = async () => {
		const podcast = await parse('https://anchor.fm/s/3d49d1c/podcast/rss', {});
		return {
			props: {
				podcast
			}
		};
	};
</script>

<script lang="ts">
	export let podcast: {
		title: string;
		description: string;
		image: string;
		items: { enclosures: any[]; link: string; description: string; title: string }[];
	};
</script>

<section class="page-header">
	<img src={podcast.image} alt="podcast profile" />
	<div>
		<h1>{podcast.title}</h1>
		<p>{podcast.description}</p>
	</div>
</section>

<ul>
	{#each podcast.items as episode (episode.link)}
		<li>
			<img src={podcast.image} alt="podcast profile" />
			<div>
				<h2>
					<a href={episode.link}>
						{episode.title}
					</a>
				</h2>
				<p>{@html episode.description}</p>
				<audio controls>
					{#each episode.enclosures as src}
						<source src={src.url} type={src.type} />
					{/each}
				</audio>
			</div>
		</li>
	{/each}
</ul>

<style>
	.page-header {
		display: flex;
		gap: 1rem;
		position: sticky;
		top: 80px;
		background-color: white;
		z-index: 998;
		border: 1px solid lightgray;
		margin-bottom: 1rem;
	}

	img {
		width: 200px;
		height: 200px;
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
		display: flex;
		gap: 1rem;
	}

	li img {
		width: 100px;
		height: 100px;
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>
