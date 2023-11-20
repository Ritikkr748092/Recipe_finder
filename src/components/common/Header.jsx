

const Header = (props) =>{
    return (
        <div className={props.bgClass}>
            <div className="text-content">
                <h1>{props.title}</h1>
                {props.children}
            </div>
        </div>
    )
}
export default Header