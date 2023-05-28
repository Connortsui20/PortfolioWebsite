<script context="module">
    export const prerender = true;
</script>

<script lang="ts">
    import socials, { ConnectType } from "../../lib/data/socials";
    import ConnectCard from "../../lib/components/ConnectCard.svelte";

    const copyToClipboard = (link: string) => {
        navigator.clipboard.writeText(link);
    };
</script>

<div class="container mx-auto flex-grow px-8">
    <h1 class="text-3xl mt-8 md:mt-16">Connect With Me</h1>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-5 lg:max-w-none">
        {#each socials as social}
            {#if social.connectType === ConnectType.Link}
                <a href={social.link} target="_blank">
                    <ConnectCard {...social} />
                </a>
            {:else}
                <button on:click={() => copyToClipboard(social.link)}>
                    <ConnectCard {...social} />
                </button>
            {/if}
        {/each}
    </div>
</div>
