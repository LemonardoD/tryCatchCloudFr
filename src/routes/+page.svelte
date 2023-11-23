<script>
    import { goto } from '$app/navigation';
    import githubIcon from '../lib/icons/github.png'
    const { VITE_GITHUB_ID } = import.meta.env
</script>

<div class="page">
    <h1>Welcome</h1>
    <p>You can sing in via GitHub</p>
    <button  class="btn" on:click= {() =>{goto(`https://github.com/login/oauth/authorize?client_id=${VITE_GITHUB_ID}`)}}>
        <div class="signIn"> 
            <img  class="gitIcons"src={githubIcon} alt="GitHub"/>
            <span class="iconTag">Sing in  with GitHub</span>
        </div>
    </button>  
</div>
  
<style>
    .signIn{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .iconTag{
        padding: 2px;
        font-size: 14px;
    }
    .gitIcons{
        height: 28px;
        width: 28px;
        padding-right: 4px;
    }
    .page {
        background-color: #27282c;
        border-radius: 40px;
        padding: 18px;
        text-align: center;
        width: 25%;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
        
        @media(max-width: 1023px){
            width: 90%;
            position: relative;
            margin: 2.5% auto 0 auto;
            left: 0%;
            transform: translate(0%,0%);
        }
    }
    
    h1{
        color: #ffffff;
        font-family: inherit;
        display: block;
        margin: 0;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    p {
        color: #ffffff;
        font-family: inherit;
        font-size: 20px;
        display: block;
        box-shadow:inset 0px 1px 1px fadeout(white, 95%);
        border: 1px solid darken(#2a2a2a, 5%);
        margin: 0;
        font-weight: 300;
        padding-bottom: 30px;
    }
    
    .btn {
        background-color: #140e20;
        color: #fff;
        margin: 0 6px;
        padding: 10px 20px;
        border: none;
        border-radius: 45px;
        cursor: pointer;
        font-family: inherit;
        font-size: 16px;
            &:hover {
            opacity: 0.5;
            }
    }
</style>