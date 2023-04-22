import React from "react";

export const TopBarComponent = () => {

    const pageStringsSplit = window.location.href.split("/");
    const actualPage = pageStringsSplit[pageStringsSplit.length - 1];

    return (
        <>
            <nav class="navMenu">
                <a class={actualPage === 'home-page' ? 'selected-home-page' : ''} href="/home-page">Home</a>
                <a class={actualPage === 'work' ? 'selected-work' : ''} href="/work">Work</a>
                <a class={actualPage === 'about-me' ? 'selected-about-me' : ''} href="/about-me">About Me</a>
                <div class="dot"></div>
            </nav>
        </>
    )

}