import ActionButton from "./ActionButton";

import { ZONES } from "../game/data/content";
import { useGameStore } from "../stores/gameStore";


const MAP_ORDER = [
    "forgotten_road",
    "silent_forest",
    "lost_camp",
    "keepers_cairn",
    "forgotten_city",
    "old_library",
    "empty_palace",
    "memory_archive",
    "ashen_gate"
] as const;


export default function MapPanel() {

    const discoveredZones =
        useGameStore(
            (state) => state.discoveredZones
        );

    const currentZoneId =
        useGameStore(
            (state) => state.currentZoneId
        );

    const playerPath =
        useGameStore(
            (state) => state.playerPath
        );

    const travelToZone =
        useGameStore(
            (state) => state.travelToZone
        );

    const closeOverlays =
        useGameStore(
            (state) => state.closeOverlays
        );


    return (

        <aside
            className="overlay-panel map-panel"
            aria-label="World map"
        >

            <header className="overlay-heading">

                <h2>
                    MAP OF REMEMBERED PLACES
                </h2>

                <button
                    className="overlay-close"
                    onClick={closeOverlays}
                >
                    [Close]
                </button>

            </header>


            <p className="map-intro">
                Only places that remember you can be reached.
            </p>


            <div className="zone-map">

                {
                    MAP_ORDER.filter((zoneId) =>
                        discoveredZones.includes(zoneId) &&
                        (
                            zoneId !== "forgotten_road" ||
                            playerPath === null
                        )
                    ).map((zoneId) => {

                        const zone = ZONES[zoneId];

                        const isCurrentZone =
                            zoneId === currentZoneId;


                        return (

                            <div
                                className={
                                    "map-zone " +
                                    `map-zone--${zone.accent} ` +
                                    (isCurrentZone
                                        ? "map-zone-current"
                                        : "")
                                }
                                key={zoneId}
                            >

                                <pre
                                    aria-hidden="true"
                                    className="map-zone-art"
                                >
                                    {zone.art.join("\n")}
                                </pre>


                                <div>

                                    <p className="map-zone-title">
                                        {isCurrentZone ? "> " : ""}
                                        {zone.name}
                                    </p>

                                    <p className="map-zone-description">
                                        {zone.description}
                                    </p>

                                    {
                                        !isCurrentZone && (

                                            <ActionButton
                                                onClick={() => {
                                                    travelToZone(zoneId);
                                                }}
                                            >
                                                Travel Here
                                            </ActionButton>

                                        )
                                    }

                                </div>

                            </div>

                        );

                    })
                }

            </div>

        </aside>

    );

}
