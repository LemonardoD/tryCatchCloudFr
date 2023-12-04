<script>
    import { goto } from '$app/navigation';
    import githubIcon from '../lib/icons/github.png'
    const { VITE_GITHUB_ID } = import.meta.env
</script>

 
<div class="page"> 
    <div class="header">
        <p class="headerTitle">Welcome,<br/>
            <span class="subheading">
                sign in via GitHub<br/>
                to continue to Try Catch Cloud.
            </span>
        </p>
    </div>
    <button  class="sigiInBtn" on:click= {() =>{goto(`https://github.com/login/oauth/authorize?client_id=${VITE_GITHUB_ID}`)}}>
        <div class="signIn">
            <img  class="gitIcons"src={githubIcon} alt="GitHub"/>
            <span class="iconTag">Continue with GitHub</span>
        </div>
    </button> 
    <div class="footer">
        <p class="footerTittle">Try Catch Cloud</p>
    </div>
</div>

<style>
    .headerTitle{
        font-family: inherit;
        font-size: 28px;
        color: #eae6de
    }
    .subheading{
        font-family: inherit;
        font-size: 16px;
        color: #a3a19b;
    }
    .header{
       margin: 0;
       padding: 55px 55px 10px 55px;
    }
    .footer{
        z-index: 4;
        vertical-align: middle;
        text-align: center;
        top: 480px;
        border-radius: 50%;
        left: -50%;
        bottom: 0px;
        width: 200%;
        height: 140px;
        position: absolute;
        background-color: #a3a19b;
    }
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
    
    .footerTittle{
        font-size: 24px;
        font-weight: 600;
        font-family: inherit;
        color: 	#3e3e3e;
        padding-top: 28px;
        margin: 0;
    }
    
    .sigiInBtn {
        position: relative;
        left: 55px;
        background-color: #a3a19b;
        color: #eae6de;
        padding: 8px 21px;
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
        align-items: center;
        font-family:  sans-serif, "Open Sans";
        background-color: #191919;
        border: 1px solid #2a2929;
        height: 550px;
	    width: 400px;
        left: 50%;
        transform: translate(-50%);
        position: absolute;
        top: 20%;
        padding: 0;
        margin: 0;
        border-radius: 30px;
        overflow: hidden;
    }


    @media (max-width: 1099px) {
        .page{
            width: 90%;
        }
    }
</style>