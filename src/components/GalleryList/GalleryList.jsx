import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList({gallery, getGallery}) {

    return (
        <section className="gallery">
            {gallery.map((item => 
                <section key={item.id}>
                    <GalleryItem item={item} getGallery={getGallery}/>
                </section>
            ))}
        </section>
    );

}