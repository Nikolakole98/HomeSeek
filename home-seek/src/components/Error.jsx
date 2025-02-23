export default function Error({title, message1}){
    return(<div className="error">
        <h2>{title}</h2>
       <p>{message1}</p>
    </div>);
}