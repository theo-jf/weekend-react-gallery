import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList({gallery, getGallery}) {

    return (
        <section className="gallery">
            {gallery.map((item => 
                <section className="item galleryItem" key={item.id}>
                    <div className="polaroid">
                        <GalleryItem item={item} getGallery={getGallery}/>
                    </div>
                </section>
            ))}
        </section>
    );

}