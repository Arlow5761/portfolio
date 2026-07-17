<script>
    import { page } from '$app/state';

    import '@fontsource/baloo-2/500.css';
    import '@fontsource/baloo-2/600.css';
    import '@fontsource/nunito/400.css';
    import '@fontsource/nunito/600.css';

    import errorimg from '$lib/assets/error.gif'
</script>

<div class="min-w-screen min-h-screen flex flex-col items-center justify-center">
    <img
        src={errorimg}
        alt="Bocchi having a panic attack"
        class="min-w-0 w-96 max-w-[calc(100%-1rem)] aspect-square object-cover" />
    <h1 class="text-9xl font-display">{page.status}</h1>
    <p class="text-3xl">{page.error?.message}</p>
</div>
