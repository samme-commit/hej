interface Props {
    title: string;
    children: React.ReactNode;
}


export default function GameLayout({
    title,
    children
}: Props) {

    return (
        <main className="game-layout">

            <div className="divider">
                ════════════════════════════
            </div>


            <h1 className="game-title">
                {title}
            </h1>


            <div className="divider">
                ════════════════════════════
            </div>


            <section className="game-content">
                {children}
            </section>


            <div className="divider">
                ════════════════════════════
            </div>

        </main>
    );
}