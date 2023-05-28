<script lang="ts">
    import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa';

    export let name: string;
    export let icon: IconDefinition;
    export let url: string;
    export let bgColor: string;
    export let color: string;

    let cssVarStyles = `--card-color:${color};--card-bg-color:${bgColor}`;
</script>

<a href={url} target="_blank">
    <div
        class="flex flex-col overflow-hidden border-[1px] border-t-[#dddddd] border-x-[#cccccc] border-b-[#bbbbbb] rounded-lg"
        style={cssVarStyles}
    >
        <div class="flex-1 my-card p-16 flex flex-col items-center justify-between">
            <Fa {icon} size="2x" />
            <p class="mt-3">{name}</p>
        </div>
    </div>
</a>

<style>
    .my-card {
        background-color: var(--card-bg-color);
        color: var(--card-color);
    }
</style>
