
export function ProfileCard(props) {
    return (
        <>
            <article>
                <h1>{props.id}</h1>
                <p>{props.name}</p>
                <p>{props.designation}</p>
            </article>

        </>
    )
}