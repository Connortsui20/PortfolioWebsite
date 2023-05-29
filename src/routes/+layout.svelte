<script>
    import { Toaster } from "svelte-french-toast";
    import Navbar from "../lib/components/Navbar.svelte";
    import "../app.postcss";
</script>

<div class="flex flex-col min-h-screen bg-zinc-900 text-white">
    <Toaster />
    <Navbar />
    <slot />
</div>
