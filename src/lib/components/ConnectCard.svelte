<script lang="ts">
    import Fa from "svelte-fa";
    import type { SocialType } from "../../lib/data/socials";

    export const social = $$props as SocialType;
    let cssVarStyles = `--card-color:${social.color}; --card-bg-color:${social.bgColor}`;
</script>

<div
    class="flex flex-col overflow-hidden border-[1px] border-t-[#dddddd] border-x-[#cccccc] border-b-[#bbbbbb] rounded-lg"
    style={cssVarStyles}
>
    <div class="flex-1 my-card p-16 flex flex-col items-center justify-between">
        <Fa icon={social.icon} size="2x" />
        <p class="mt-3">{social.name}</p>
    </div>
</div>

<style>
    .my-card {
        background-color: var(--card-bg-color);
        color: var(--card-color);
    }
</style>
