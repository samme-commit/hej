interface Props {
    action: string;
    onContinue: () => void;
}


export default function ActionFeedback({
    action,
    onContinue
}: Props) {

    return (

        <div className="action-feedback">

            <p>
                Your choice echoes...
            </p>


            <p className="selected-action">
                &gt; {action}
            </p>


            <button
                className="continue-button"
                onClick={onContinue}
            >
                Continue
            </button>


        </div>

    );
}