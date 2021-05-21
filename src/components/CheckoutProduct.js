import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';

function CheckoutProduct({ product }) {
    const { id, title, price, rating, description, category, image, hasPrime } = product;

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))

                    }
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="USD" />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img src="/prime.png" alt="Prime" loading="lazy" className="w-12" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button mt-auto">Add to Basket</button>
                <button className="button mt-auto">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
