import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { toast } from 'react-toastify';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = () => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setSize(product.sizes[0]);
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    if (productData && size) {
      addToCart(productData._id, size);
      toast.success('Item added to cart');
    } else {
      console.error('Product data or size is missing');
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='border-t-2 border-gray-400 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img 
                  onClick={() => setImage(item)} 
                  src={item} 
                  key={index} 
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                  alt="" 
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  onClick={() => setSize(item)} 
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} 
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button 
            onClick={handleAddToCart} 
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Products Are Imported From Its Origin.</p>
            <p>Easy Returns And Exchange Policy.</p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className='mt-14'>
        <h1 className='font-medium text-xl mb-4'>Related Products</h1>
        <RelatedProducts subCategory={productData.subCategory} currentProductId={productData._id} />
      </div>
    </div>
  );
}

export default Product;
