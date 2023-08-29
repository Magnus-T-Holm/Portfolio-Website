import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UpdateTitle() {
    let isDanish;

    if (localStorage.getItem("isDanish") === "true") {
        isDanish = true
    } else {
        isDanish = false
    }
    const titles = {
        "/": "Portfolio",
        "/projects/card-draw": isDanish ? "Projekter - Spillekort" : "Projects - Playing card",
        "/projects/tarot": isDanish ? "Projekter - Tarot" : "Projects - Tarot",
        "/projects/memory-game": isDanish ? "Projekter - Huskespil" : "Projects - Memory Game"
    };

    const { pathname } = useLocation();
    useEffect(() => { document.title = titles[pathname] })
}