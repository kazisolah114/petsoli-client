import Link from 'next/link';
import useCategories from '../../../../hooks/useCategories';
import { LuCat, LuDog, LuPill } from "react-icons/lu";
import { usePathname } from 'next/navigation';

const ShopCategories = () => {
    const categories = useCategories();
    const pathname = usePathname();
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center gap-8 text-center'>
            {categories.map((category) => <Link href={{
                pathname: `${pathname.slice(1, pathname.length)}/${category.category_slug}`,
                query: {
                    title: `${category.category_name.toLowerCase()}`
                }
            }} key={category.category_slug} className='border rounded-md hover:shadow-lg duration-200'>
                <div className='bg-gray-300 bg-opacity-10 flex items-center justify-center py-7'>
                    <LuDog className='text-5xl text-gray-800' />
                </div>
                <h3 className='py-5 font-semibold text-gray-900'>{category.category_name}</h3>
            </Link>
            )}
        </div>
    );
};

export default ShopCategories;
