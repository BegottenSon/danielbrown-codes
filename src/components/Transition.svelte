<script>
    import { onMount } from 'svelte';
    import { onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import { blur } from 'svelte/transition';

    onMount(() => {
        fadingIn = true;
        blurIn = true
    });

    onDestroy(() => {
        fadingOut = true;
        blurOut = true;
    });

    let fadingIn = false;
    let fadingOut = false;
    let blurIn = false;
    let blurOut = false
</script>

<style>
    div {
        position: relative;
    }
</style>

    {#if fadingIn || fadingOut}

    <div in:fade={{delay: 300, duration: 300}} out:fade={{duration: 300}} >
        <slot></slot>
    </div>
        
    {/if}
