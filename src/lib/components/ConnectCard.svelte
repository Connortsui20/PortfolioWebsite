<script lang="ts">
    import Fa from "svelte-fa";
    import type { SocialType } from "../../lib/data/socials";

    export const social = $$props as SocialType;
    let cssVarStyles = `--card-color:${social.color}; --card-bg-color:${social.bgColor}`;
</script>

<style>
    .my-card {
        background-color: var(--card-bg-color);
        color: var(--card-color);
    }
</style>

<div
    class="flex flex-col overflow-hidden rounded-lg"
    style={cssVarStyles}
>
    <div class="flex flex-col flex-1 items-center justify-between my-card p-12 ">
        <Fa icon={social.icon} size="2x" />
        <p class="mt-3">{social.name}</p>
    </div>
</div>