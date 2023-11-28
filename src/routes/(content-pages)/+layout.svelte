<script>
    import NavBar from "../../components/navBar.svelte";
</script>

<div class="page"> 
    <slot></slot>
</div>


<NavBar/>

<style>
    ::-webkit-scrollbar {
		width: 10px;
        right: 0;
	}
	::-webkit-scrollbar-track {
		background: #f9fafb;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
    .page{
        width: 800px;
        height: 100%;
        overflow-y: auto;
        flex: 1 1 0%;
        background-color: #191919;
        border-left: 0.5px solid #2a2929;
        border-right: 0.5px solid #2a2929;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        padding: 0;
        margin: 0;
        font-family: 'JetBrains Mono', monospace;
    }

@media (max-width: 1099px) {
    .page{
        width: 90%;
    }
}
    
</style>