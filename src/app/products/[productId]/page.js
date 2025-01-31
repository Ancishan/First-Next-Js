

const page = async ({params, searchParams}) => {

    const productId = params.productId;

    console.log( await searchParams);
    return (
        <div>
            <h2>This is PRoduct id : {productId}</h2>
        </div>
    );
};

export default page;