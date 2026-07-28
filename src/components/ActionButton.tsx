interface Props {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    title?: string;
}

export default function ActionButton({
    children,
    onClick,
    disabled = false,
    title
}: Props) {

    return (
        <button
            className="action-button"
            onClick={onClick}
            disabled={disabled}
            title={title}
        >
            [{children}]
        </button>
    );
}
