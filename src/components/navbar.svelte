<script>
    import appLogo from "$lib/assets/icon_alt.png";
    import { goto } from "$app/navigation";

    function redirectToHome(){
        goto("/");
    }
</script>

<div class="navbar bg-secondary/95 rounded-b-2xl px-4 fixed">
    <a href="/" class="text-[36px] font-bold">
        <img src={appLogo} class="w-[72px]" alt="icon_alt"/>
    </a>
</div>