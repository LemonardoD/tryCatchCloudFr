<script>
    import NavBar from "../../components/navBar.svelte";
</script>


<div class="page"> 
    <slot> </slot>
</div>
<NavBar/>




<style>
    .page{
        min-height: 100vh;
        width: 800px;
        height: 100%;
        overflow-y: auto;
        background-color: #191919;
        border-left: 0.5px solid #2a2929;
        border-right: 0.5px solid #2a2929;
        left: 50%;
        transform: translate(-50%);
        position: relative;
        padding: 0;
        margin-right: 0;
        font-family: 'JetBrains Mono', monospace;
    }

    @media (max-width: 1099px) {
        .page{
            width: 90%;
        }
    }
    
</style>