<script>
    import links from "../data/navbar-links";
</script>

<nav
    class="flex flex-wrap items-center justify-between bg-blue-900 px-12 py-6"
>
    <span class="text-white font-semibold text-2xl"> Connor Tsui </span>
    <div class="flex w-auto text-right">
        {#each links as link}
            <a
                href={link.url}
                rel="external"
                class="inline-block text-white hover:text-gray-300 px-6"
            >
                {link.title}
            </a>
        {/each}
    </div>
</nav>
