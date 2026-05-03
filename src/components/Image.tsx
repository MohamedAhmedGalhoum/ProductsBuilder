interface IProps {
    imageURL: string;
    alt: string;
    ClassName?: string;
}

const Image = ({ imageURL, alt, ClassName }: IProps) => {
    return (
        <div>
            <img src={imageURL} alt={alt} className={ClassName} />
        </div>
    )
}

export default Image;