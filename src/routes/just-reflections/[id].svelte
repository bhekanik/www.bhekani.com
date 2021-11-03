<script context="module">
	import axios from 'axios';

	export const load = async ({ page }) => {
		const { data } = await axios.get('/just-reflections/issues', {});
		const issue = data.find((issue) => issue.id === +page.params.id);

		return {
			props: {
				issue
			}
		};
	};
</script>

<script lang="ts">
	export let issue: any;
</script>

<h1>{issue?.title}</h1>
<article>
	{@html issue?.html}
</article>
