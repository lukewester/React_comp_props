export default function Person(props) {
return (
    <>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    {props.children}
    </>
)
};
