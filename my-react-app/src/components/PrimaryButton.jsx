export const PrimaryButton = (props) => {
    console.log(props);

    return (<>
        <button onClick={props.onClick}>{props.children}</button>
    </>)
}