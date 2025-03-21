import Photo from './Photo.jsx'
import Checkbox from "@/components/Checkbox.jsx";
import {useState} from "react";

function Gallery(props) {

    const photos = props.photo_list.map(photo => (
        <>
            <h2>{photo.author+' (#'+photo.id+')'}</h2>
            <Photo size={{height:500, width:800}} source={photo.download_url}/>
        </>
    ));

    let [photo, setPhoto] = useState(photos);

    const handleCheckbox = (event) => {
        if (!event.target.checked) {
            setPhoto(props.photo_list.map(photo => (
                <>
                    <h2>{photo.author+' (#'+photo.id+')'}</h2>
                    <Photo size={{height:500, width:800}} source={photo.download_url}/>
                </>
            )));
        }
        else{
            setPhoto(props.photo_list.map(photo => (
                <>
                    <h2>{photo.author}</h2>
                    <Photo size={{height:500, width:800}} source={photo.download_url}/>
                </>
            )));
        }
    }

    return(
        <>
            <Checkbox callback={handleCheckbox}/>
            <div>
                <h1>Galerie de photo</h1>
                {photo}
            </div>
        </>
    );
}
export default Gallery;