<script lang="ts">
    import Background from "$lib/components/background.svelte";
    import Background2 from "$lib/components/background2.svelte";
    import Background3 from "$lib/components/background3.svelte";
</script>

<svelte:head>
    <title>I am Efim</title>
</svelte:head>

<div class="scroll">
    <div class="wrapper">
        <Background />
        <header>
            <p class="heading">I am Efim, ...</p>
            <span style="flex: 1;" />
            <a class="contact" href="#contact">Contact me</a>
        </header>
        <main>
            <p class="text">An 18 year old russian developer.</p>
            <p class="text">Currently I am only learning how to do stuff.</p>
            <p class="text">Some technologies I am learning:</p>
            <img alt="Rust" src="https://img.shields.io/badge/-Rust-black?logo=rust"/>
            <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-black?logo=typescript"/>
            <img alt="Svelte" src="https://img.shields.io/badge/-Svelte-black?logo=svelte"/>
        </main>
    </div>
    <div class="wrapper">
        <Background2 />
        <header>
            <p class="heading">My Projects:</p>
        </header>
        <main>
            <p class="text">This website 🤯</p>
        </main>
    </div>
    <div class="wrapper" id="contact">
        <Background3 />
        <header>
            <p class="heading">Contact me</p>
        </header>
        <main>
            <p class="text">Email: <a href="mailto:example@gmail.com">example@gmail.com</a></p>
            <p class="text">Phone: <a href="tel:+70000000000">+7 (000) 000 00-00</a></p>
            <p class="text">Github: <a href="https://github.com/Efimish">Efimish</a></p>
        </main>
    </div>
</div>

<style>
    .scroll {
        height: 100%;
        overflow-x: hidden;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
    }
    .wrapper {
        height: 100%;
        scroll-snap-align: center;
        position: relative;
    }
    header {
        display: flex;
        align-items: center;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(0.5rem);
    }
    .heading {
        font-size: 2rem;
    }
    .text {
        font-size: 1.4rem;
        text-shadow: 2px 2px 2px black;
    }
    .contact {
        font-size: 1.2rem;
        color: greenyellow;
        text-decoration: none;
        background-color: green;
        padding: 0.5rem 0.8rem;
        border-radius: 0.8rem;
    }
    main {
        padding: 2rem;
    }
    a {
        color: greenyellow;
    }
</style>