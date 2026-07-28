import { ITEMS } from "../game/data/content";
import { useGameStore } from "../stores/gameStore";


export default function Hotbar() {

    const quickSlots =
        useGameStore(
            (state) => state.quickSlots
        );

    const inventory =
        useGameStore(
            (state) => state.inventory
        );

    const consumeQuickSlot =
        useGameStore(
            (state) => state.useQuickSlot
        );

    const combat =
        useGameStore(
            (state) => state.combat
        );


    return (

        <section
            className="hotbar"
            aria-label="Quick slots"
        >

            {
                quickSlots.map((itemId, index) => {

                    const item = itemId
                        ? ITEMS[itemId]
                        : null;

                    const quantity = itemId
                        ? inventory.find(
                            (entry) => entry.itemId === itemId
                        )?.quantity ?? 0
                        : 0;

                    const canUse = !combat &&
                        item?.kind === "consumable" &&
                        quantity > 0;


                    return (

                        <button
                            className="hotbar-slot"
                            disabled={!canUse}
                            key={index}
                            onClick={() => {

                                if (canUse) {

                                    consumeQuickSlot(index);

                                }

                            }}
                            title={
                                item && combat && item.kind === "consumable"
                                    ? "Use this item through the combat action menu."
                                    : item
                                    ? item.description
                                    : "Empty quick slot"
                            }
                        >

                            <span className="hotbar-key">
                                {index + 1}
                            </span>

                            <span className="hotbar-item">
                                {item?.name ?? "Empty"}
                            </span>

                            {
                                quantity > 1 && (

                                    <span className="hotbar-quantity">
                                        x{quantity}
                                    </span>

                                )
                            }

                        </button>

                    );

                })
            }

        </section>

    );

}
