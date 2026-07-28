interface Props {

    currentHealth: number;

    maxHealth: number;

}


const HEALTH_BAR_SEGMENTS = 12;


export default function HealthBar({
    currentHealth,
    maxHealth
}: Props) {

    const safeMaxHealth = Math.max(maxHealth, 1);

    const filledSegments = Math.round(
        (Math.max(currentHealth, 0) / safeMaxHealth) *
        HEALTH_BAR_SEGMENTS
    );

    const filledBar = "█".repeat(
        Math.min(filledSegments, HEALTH_BAR_SEGMENTS)
    );

    const emptyBar = "░".repeat(
        Math.max(HEALTH_BAR_SEGMENTS - filledSegments, 0)
    );


    return (

        <p
            className="health-bar"
            aria-label={`Health: ${currentHealth} out of ${maxHealth}`}
        >
            <span className="hud-label">
                HP
            </span>

            <span className="health-bar-fill">
                {filledBar}
            </span>

            <span className="health-bar-empty">
                {emptyBar}
            </span>

            <span className="health-bar-value">
                {currentHealth} / {maxHealth}
            </span>
        </p>

    );

}
