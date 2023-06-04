<script lang="ts">
    import ProjectCard from "../../lib/components/ProjectCard.svelte";
    import projects from "../../lib/data/projects";
</script>

<div class="flex justify-center h-screen m-48">
    <ul>
        {#each projects as project}
            <li><ProjectCard {project} /></li>
        {/each}
    </ul>
</div>

