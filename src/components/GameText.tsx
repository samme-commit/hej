interface Props {
    children: React.ReactNode;
}


export default function GameText({children}: Props) {
    return (
        <p>
            {children}
        </p>
    );
}