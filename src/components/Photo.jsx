function Photo(props){
    return(
        <>
            <img style={props.size} src={props.source} alt='hello' />
        </>
    );
}

export default Photo;