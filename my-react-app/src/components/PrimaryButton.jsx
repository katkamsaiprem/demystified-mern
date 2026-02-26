export const PrimaryButton = (props) => {


    return (<>
        <button onClick={props.onClick} disabled={props.disabled ? true : false}
            className="bg-linear-to-br from-[#ce212f] to-rose-500 px-3 py-2 text-white rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-3xl"
        >{props?.children}</button>
    </>)
}
export default PrimaryButton;