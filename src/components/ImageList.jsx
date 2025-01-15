const Image = ({image}) => {
    return (
        <img src={image.src} class={image.style}></img>
    );
}

const ImageList = ({images, hide}) => {
    return (
        <div class={`${hide}`}>
            {images.map((image, i) => <Image key={i} image={image}/>)}
        </div>
    );
}

export default ImageList;