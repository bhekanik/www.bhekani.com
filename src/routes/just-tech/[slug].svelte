<script context="module">
	import axios from 'axios';

	export const load = async ({ page }) => {
		const { data } = await axios.get(`https://dev.to/api/articles/bhekanik/${page.params.slug}`);
		if (data) {
			console.log('data:', data);
			return {
				props: {
					article: data
				}
			};
		}
	};
</script>

<script lang="ts">
	export let article: any;
</script>

<h1>{article.title}</h1>
<img src={article.cover_image} alt="cover" />
<article>
	{@html article.body_html}
</article>
