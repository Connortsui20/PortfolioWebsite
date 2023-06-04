<script lang="ts">
    import toast from "svelte-french-toast";
    import socials, { ConnectType } from "../../lib/data/socials";
    import ConnectCard from "../../lib/components/ConnectCard.svelte";

    const copyToClipboard = (link: string) => {
        navigator.clipboard.writeText(link);
        toast.success(`Copied ${link} to clipboard!`);
    };
</script>

<div class="container mx-auto flex-grow">
    <h1 class="text-4xl font-semibold mt-12">Connect With Me</h1>
    <div class="mt-12 grid gap-12 grid-cols-3">
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
