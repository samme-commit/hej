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


}


export function rememberAshenGate() {

    const game = useGameStore.getState();


    game.discoverMemory(
        "the_ashen_gate"
    );


    game.updateStats({

        knowledge: game.stats.knowledge + 2

    });

}


export function rememberBlacksmithOath() {

    const game = useGameStore.getState();


    game.discoverMemory(
        "the_blacksmiths_oath"
    );


    game.updateStats({

        strength: game.stats.strength + 2

    });

}
