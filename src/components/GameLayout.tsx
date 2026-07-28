import Divider from "./Divider";
import GameHud from "./GameHud";
import Hotbar from "./Hotbar";

import { useGameStore } from "../stores/gameStore";


interface Props {

    title: string;

    children: React.ReactNode;

}


export default function GameLayout({
    title,
    children
}: Props) {

    const hasUnlockedHud =
        useGameStore(
            (state) => state.playerPath !== null
        );


    return (

        <main
            className={`game-layout${
                hasUnlockedHud
                    ? ""
                    : " game-layout--intro"
            }`}
        >

            <Divider />


            <h1 className="game-title">
                {title}
            </h1>


            <Divider />


            {
                hasUnlockedHud && (

                    <GameHud />

                )
            }


            <section className="game-content">
                {children}
            </section>


            {
                hasUnlockedHud && (

                    <Hotbar />

                )
            }


            <Divider />

        </main>

    );

}
