import Photo from './Photo.jsx'

function Gallery(props) {
    return(
        <div>
            <h1>Galerie de photo</h1>
            {/*}<Photo size={{width:500, height:300}} id={1}/><Photo size={{width:400, height:250}} id={2}/>
            {*/}
            {props.photo_list.map((photo) => (
                <>
                    <h2>{photo.author+' (#'+photo.id+')'}</h2>
                    <Photo size={{height:500, width:800}} source={photo.download_url}/>
                </>
            ))}
        </div>
    );
}
export default Gallery;