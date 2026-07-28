import { useGameStore } from "../../stores/gameStore";


export function chooseBrokenSword() {

    const game = useGameStore.getState();


    game.setPlayerPath(
        "warrior"
    );


    game.addItem(
        "broken_sword"
    );


    game.discoverMemory(
        "last_battle"
    );


    game.updateStats({

        strength: 10

    });


    console.log(
        "Chosen path: Warrior",
        useGameStore.getState()
    );

}



export function chooseMemoryStone() {

    const game = useGameStore.getState();


    game.setPlayerPath(
        "keeper"
    );


    game.discoverMemory(
        "voice_in_the_dark"
    );


    game.updateStats({

        health: 25,

        knowledge: 10

    });


    console.log(
        "Chosen path: Keeper",
        useGameStore.getState()
    );

}



export function chooseSilentRoad() {

    const game = useGameStore.getState();


    game.setPlayerPath(
        "explorer"
    );


    game.discoverMemory(
        "place_that_should_not_exist"
    );


    game.updateStats({

        awareness: 10

    });


    console.log(
        "Chosen path: Explorer",
        useGameStore.getState()
    );

}