export default function GalleryList({gallery}) {

    return (
        <section className="gallery">
            {gallery.map(item =>
                <section key={item.id}>
                    <img src={item.path} />
                    <p className="description">{item.description}</p>
                    <p className="likes">{item.likes}</p>
                </section>
            )}
        </section>
    );

}