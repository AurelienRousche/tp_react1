function Checkbox(props) {
    const handleChange = (event) => {
        props.callback(event);
    }
    return (
        <div>
            <label>Hide ID</label>
            <input type="checkbox" onChange={handleChange} />
        </div>
    );
}
export default Checkbox;