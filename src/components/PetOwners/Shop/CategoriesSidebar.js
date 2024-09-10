"use client";
import GetCategories from "@/utils/GetCategories";
import Link from "next/link";
import { HiChevronRight, HiSquares2X2 } from "react-icons/hi2";
import useCategories from "../../../../hooks/useCategories";

const CategoriesSidebar = () => {
    const categories = useCategories();
    console.log(categories);
    return (
        <aside className="sticky top-28 h-fit overflow-auto ">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-primary"><HiSquares2X2 className="font-bold text-xl" /> Shop By Category</h3>
            <ul>
                {categories.map(({ category_slug, category_name, category_image }, index) => (
                    <Link
                        key={category_slug}
                        href={{
                            pathname: `/shop/${category_slug}`,
                            query: {
                                // title: `${category_name}`,
                            },
                        }}
                    >
                        <li
                            className={` py-4 flex items-center justify-between border-b ${index === categories.length - 1 ? 'border-none' : ''
                                }`}
                        >
                            {category_name} <HiChevronRight />
                        </li>
                    </Link>
                ))}
            </ul>

        </aside>
    );
};

export default CategoriesSidebar;