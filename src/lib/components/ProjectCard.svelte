<script lang="ts">
    import type { ProjectType } from "../data/projects";

    export let project: ProjectType;
</script>

<div class="w-max bg-secondary-dark rounded-lg py-16 px-48">
    {project.title}
</div>
