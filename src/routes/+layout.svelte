<script>
    import Navbar from '../lib/components/Navbar.svelte';
    import '../app.postcss';
</script>

<div class="flex flex-col h-full">
    <Navbar />
    <slot />
</div>
