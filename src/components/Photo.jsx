function Photo(props){
    console.log(props.id);
    return(
        <>
            <img style={props.size} src={'/pic'+props.id+'.jpg'} alt='hello' />
        </>
    );
}

export default Photo;