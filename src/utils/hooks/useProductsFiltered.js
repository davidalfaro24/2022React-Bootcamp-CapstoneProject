import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductsFiltered(filters, currentPage) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [featuredProducts, setfeaturedProducts] = useState(() => ({
        dataFeaturedProducts: {},
        isLoadingfeaturedProducts: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getFeaturedProducts() {
            try {
                setfeaturedProducts({ dataFeaturedProducts: {}, isLoadingfeaturedProducts: true });
                
                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        `[[at(document.type, "product")][any(my.product.category,${
                            JSON.stringify(filters)})]]`
                    )}&lang=en-us&pageSize=12&page=${Number(currentPage)}`,
                    {
                        signal: controller.signal,
                    }
                );
                const dataFeaturedProducts = await response.json();
                
                setfeaturedProducts({ dataFeaturedProducts, isLoadingfeaturedProducts: false });
            } catch (err) {
                setfeaturedProducts({ dataFeaturedProducts: {}, isLoadingfeaturedProducts: false });
                console.error(err);
            }
        }

        getFeaturedProducts();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, filters, currentPage]);
    
    return featuredProducts;
}
