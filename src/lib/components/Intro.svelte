<script lang="ts">
    export let title: string;
    export let subTitle: string;
</script>

<div class="flex flex-col h-screen bg-introImage bg-cover bg-center">
    <div class="flex flex-col m-auto items-center justify-self-center">
        <img
            class="rounded-full h-80"
            src="/images/avatar.png"
            alt="Connor's Face"
        />
        <h2
            class="text-6xl font-bold mt-24 text-white text-center stroke-current"
        >
            {title}
        </h2>
        <h3 class="text-3xl mt-10 text-white text-center">{subTitle}</h3>
    </div>
</div>
