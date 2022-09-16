export default function GalleryItem({item}) {
    return (
        <>
            <img src={item.path} />
            <p className="description">{item.description}</p>
            <p className="likes">{item.likes}</p>   
        </>
    );
}