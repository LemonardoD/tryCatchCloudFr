<script lang="ts">
    import { base } from '$app/paths';
    import goBack from '../lib/icons/back-button.png';
    import { afterNavigate } from '$app/navigation';

    export let backButton: boolean
    export let header: string

    let previousPage : string = base;
    
    afterNavigate(({from}) => {
        previousPage = from?.url.href || previousPage
    }) 
</script>


<div class="cardHeader">
    {#if header}
        <p>{header}</p>
    {/if}
    {#if backButton}
        <a href={previousPage}>
            <img  class="backIcon"src={goBack} alt="Go Back"/>
        </a>
    {/if}
    <slot></slot>
</div>

<style>
    p{
        font-family: inherit;
        color: #949494;
        margin-left: 10px;
        margin-top: 0;
        margin-bottom: 0;
        flex-grow: 1;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding:  16px;
    }
    a {
        cursor: pointer;
        display: flex;
        padding: 16px;
        line-height: 40px;
        align-items: center;
        text-decoration: none;
        justify-content: center;
    }
    .cardHeader{
        margin: 0px auto;
        -webkit-box-align: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 8px 0px;
        height: 50px;
        display: flex;
        align-items: stretch;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: #191919;
        font-family: sans-serif, "Open Sans";
        border-bottom: 2px solid #2a2929;
    }

    @media (max-width: 1100px) {
        .cardHeader{
            width: 100%;
        } 
    }
</style>