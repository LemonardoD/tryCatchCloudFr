<script>
    import { goto } from '$app/navigation';
    import githubIcon from '../lib/icons/github.png'
    const { VITE_GITHUB_ID } = import.meta.env
</script>


<div class="page"> 
    <div class="header">
        <p class="headerTittle">Try Catch Cloud</p>
    </div>
   
    <div class="info">
        <p class="signinTitle">Sign In to Try Catch Cloud</p>
        <button  class="btn" on:click= {() =>{goto(`https://github.com/login/oauth/authorize?client_id=${VITE_GITHUB_ID}`)}}>
            <div class="signIn">
                <img  class="gitIcons"src={githubIcon} alt="GitHub"/>
                <span class="iconTag">Continue with GitHub</span>
            </div>
        </button> 
    </div>
</div>

<style>
    .signinTitle{
        margin: 20px 0px 40px;
    }
    .header{
        padding: 20px 0px 10px 50px;
        height: 49px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-color: #191919;
        border-bottom: 1.5px solid #2a2929;
    }
    .signIn{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .info {
        margin-top: 60px;
        align-content: center;
        flex-wrap: wrap;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column; 
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
    
    .headerTittle{
        font-size: 34px;
        font-weight: 700;
    }
    
    p {
        color: #949494;
        font-family: sans-serif, "Open Sans";
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
    
    .btn {
        background-color: #858585;
        color: #fff;
        padding: 12px 100px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
            &:hover {
            opacity: 0.5;
        }
    }
    .page{
        background-color: #191919;
        border: 2px solid #2a2929;
        width: 600px;
        height: 400px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        top: 20%;
        padding: 0;
        margin: 0;
        border-radius: 10px;
    }


    @media (max-width: 1099px) {
        .page{
            width: 90%;
        }
    }
</style>