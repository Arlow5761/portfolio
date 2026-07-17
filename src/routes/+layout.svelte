<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	import '@fontsource/baloo-2/500.css';
    import '@fontsource/baloo-2/600.css';
    import '@fontsource/nunito/400.css';
    import '@fontsource/nunito/600.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Arlow5761 — Portfolio</title>
</svelte:head>

{@render children()}
