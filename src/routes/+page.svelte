<script>
    import { goto } from "$app/navigation";
    import Navbar from "../components/navbar.svelte";

    function clickLogin(){
        goto("/sign-in")
    }
</script>

<Navbar />

<div class="center-content" style="flex-direction: column;">
    <h1 class="text-[36px]" >Welcome!</h1>

    <button class="btn btn-primary w-24 py-[12px] mt-8" on:click={clickLogin}> Login </button>
</div>






