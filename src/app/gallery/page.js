import Image from "next/image";
import nextJs from "../../assests/next-js.jpg";

const GalleryPage = () => {
    return (
        <div>
            <h2 className="text-center">regular image component</h2>
            <img className="mx-auto" src="https://miro.medium.com/v2/resize:fit:720/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg"  width={500}
                height={600} alt="" srcset="" />
            <h2 className="text-center">next js image</h2>
            <Image className="mx-auto" src="https://miro.medium.com/v2/resize:fit:720/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg" alt="next js image"
                width={500}
                height={600}
            />
            <h2 className="text-center">local image</h2>
            <Image className="mx-auto" src={nextJs } alt="next js image"
                width={500}
                height={600}
            />

        </div>
    );
};

export default GalleryPage;