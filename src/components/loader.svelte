<div class="Page">
    <div class="loader">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <div class="loaderInner">
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        <label>●</label>
        </div>
    </div>
</div>

<style>
    .Page{
        margin: 0;
        padding: 0;
    }

    .loader {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .loaderInner {
        transform: translateY(-50%);
        top: 50%;
        position: absolute;
        width: calc(100% - 200px);
        color: #FFF;
        padding: 0 100px;
        text-align: center;
    }

    .loaderInner label {
        font-size: 20px;
        opacity: 0;
        display:inline-block;
    }

    @keyframes lol {
        0% {
            opacity: 0;
            transform: translateX(-300px);
        }
        33% {
            opacity: 1;
            transform: translateX(0px);
        }
        66% {
            opacity: 1;
            transform: translateX(0px);
        }
        100% {
            opacity: 0;
            transform: translateX(300px);
        }
    }

    .loaderInner label:nth-child(6) {
        animation: lol 3s infinite ease-in-out;
    }

    .loaderInner label:nth-child(5) {
        animation: lol 3s 100ms infinite ease-in-out;
    }

    .loaderInner label:nth-child(4) {
        animation: lol 3s 200ms infinite ease-in-out;
    }

    .loaderInner label:nth-child(3) {
        animation: lol 3s 300ms infinite ease-in-out;
    }

    .loaderInner label:nth-child(2) {
        animation: lol 3s 400ms infinite ease-in-out;
    }

    .loaderInner label:nth-child(1) {
        animation: lol 3s 500ms infinite ease-in-out;
    }
</style>