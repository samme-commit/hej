import { useState } from "react";
import type { FormEvent } from "react";

import GameLayout from "./GameLayout";


interface Props {

    onSubmit: (name: string) => void;

}


export default function NameEntry({
    onSubmit
}: Props) {

    const [name, setName] = useState("");


    function submitName(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();


        const trimmedName = name.trim();


        if (!trimmedName) {

            return;

        }


        onSubmit(trimmedName);

    }


    return (

        <GameLayout title="THE FORGOTTEN ROAD">

            <section className="name-entry">

                <p>
                    Before the road, a question returns.
                </p>


                <p>
                    What name answers when the world calls?
                </p>


                <form onSubmit={submitName}>

                    <label
                        className="name-entry-label"
                        htmlFor="player-name"
                    >
                        Your name
                    </label>


                    <input
                        id="player-name"
                        className="name-entry-input"
                        value={name}
                        maxLength={24}
                        autoComplete="off"
                        autoFocus
                        onChange={(event) => {

                            setName(event.target.value);

                        }}
                    />


                    <button
                        className="continue-button"
                        type="submit"
                    >
                        Begin
                    </button>

                </form>


                <p className="name-entry-hint">
                    Some names are harder for the world to forget.
                </p>

            </section>

        </GameLayout>

    );

}
