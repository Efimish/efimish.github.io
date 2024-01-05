<script lang="ts">
    import Background from "$lib/components/background.svelte";
    import Background2 from "$lib/components/background2.svelte";
    import Background3 from "$lib/components/background3.svelte";
</script>

<svelte:head>
    <title>I am Efim</title>
</svelte:head>

<div class="scroll">
    <div class="wrapper" id="top">
        <Background />
        <div class="arrow arrow-disabled arrow-up" />
        <a href="#projects" class="arrow arrow-down" />
        <header>
            <p class="heading">I am Efim</p>
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
    <div class="wrapper" id="projects">
        <Background2 />
        <a href="#top" class="arrow arrow-up" />
        <a href="#contact" class="arrow arrow-down" />
        <header>
            <p class="heading">My Projects:</p>
        </header>
        <main>
            <p class="text">This website 🤯</p>
        </main>
    </div>
    <div class="wrapper" id="contact">
        <Background3 />
        <a href="#projects" class="arrow arrow-up" />
        <div class="arrow arrow-disabled arrow-down" />
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
    .text > a {
        color: greenyellow;
    }
    .arrow {
        color: rgba(255, 255, 255, 0.6);
        position: absolute;
        right: 2rem;
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
    }
    .arrow-disabled {
        color: rgba(128, 128, 128, 0.6);
    }
    .arrow-up {
        border-bottom: 25px solid;
        bottom: 50%;
        transform: translateY(-50%);
    }
    .arrow-down {
        border-top: 25px solid;
        top: 50%;
        transform: translateY(50%);
    }
</style>