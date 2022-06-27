import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useSearch(search, currentPage) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [searchFound, setSearchFound] = useState(() => ({
        dataSearch: {},
        isLoadingSearch: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getFeaturedProducts() {
            try {
                setSearchFound({ dataSearch: {}, isLoadingSearch: true });
                
                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        `[[at(document.type, "product")][fulltext(document, "${search}")]]`
                    )}&lang=en-us&pageSize=20&page=${currentPage}`,
                    {
                        signal: controller.signal,
                    }
                );
                const dataSearch = await response.json();
                
                setSearchFound({ dataSearch, isLoadingfeaturedProducts: false });
            } catch (err) {
                setSearchFound({ dataSearch: {}, isLoadingfeaturedProducts: false });
                console.error(err);
            }
        }

        getFeaturedProducts();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, search, currentPage]);
    
    return searchFound;
}
