<script>
    import { Toaster } from "svelte-french-toast";
    import Navbar from "../lib/components/Navbar.svelte";
    import "../app.postcss";
</script>

<div class="flex flex-col h-full">
    <Toaster />
    <Navbar />
    <slot />
</div>
