"use client";
import React from "react";
import {
    TextReveal,
    TextRevealDescription,
    TextRevealTitle,
} from "../ui/TextReveal";

const TextRevealCard = () => {
    return (
        <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
            <TextReveal
                text="You know the business"
                revealText="I know the chemistry "
            >
                <TextRevealTitle>
                    Sometimes, you just need to see it.
                </TextRevealTitle>
                <TextRevealDescription>
                    This is a text reveal card. Hover over the card to reveal the hidden
                    text.
                </TextRevealDescription>
            </TextReveal>
        </div>
    )
}

export default TextRevealCard