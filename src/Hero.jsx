import React from "react";
import group from "./images/group.png"

export default function Hero() {
    return (
        <section className="hero">
        <img src={group} alt="logo" className="hero--photo"/>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by onoe-if-kind hosts-all without leavng home.</p>
        </section>
    )
}