

export default function ProductItem({ title, description, images }) {
    const [firstImage] = images;
    return (
        <div className="product-item">
            <img src={firstImage} width={100} height={100} ></img>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>

        </div>
    );
}


