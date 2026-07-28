interface Props {

    active: boolean;

}


export default function SceneTransition({
    active
}: Props) {


    if (!active) {

        return null;

    }


    return (

        <div className="scene-transition" />

    );

}
