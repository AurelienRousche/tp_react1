import Photo from './Photo.jsx'

function Gallery() {
    return(
        <div>
            <h1>Galerie de photo</h1>
            <Photo size={{width:500, height:300}} id={1}/><Photo size={{width:400, height:250}} id={2}/>
        </div>
    );
}

export default Gallery;