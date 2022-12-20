import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UpdateTitle() {
    var isDanish;

    if (localStorage.getItem("isDanish") === "true") {
        isDanish = true
    } else {
        isDanish = false
    }
    const titles = {
        "/": isDanish ? "Hjem" : "Home",
        "/projects": isDanish ? "Projekter" : "Projects",
        "/projects/": isDanish ? "Projekter" : "Projects",
        "/projects/card-draw": isDanish ? "Projekter - Spillekort" : "Projects - Playing card",
        "/projects/tarot": isDanish ? "Projekter - Tarot" : "Projects - Tarot",
        "/projects/memory-game": isDanish ? "Projekter - Huskespil" : "Projects - Memory Game",
        "/about-me": isDanish ? "Om mig" : "About me"
    };

    const { pathname } = useLocation();
    useEffect(() => { document.title = titles[pathname] })
}