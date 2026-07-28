interface Props {
    children: React.ReactNode;
    onClick: () => void;
}


export default function ActionButton({
    children,
    onClick
}: Props) {

    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}