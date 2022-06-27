/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductDetail(id) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [productDetail, setProductDetail] = useState(() => ({
        dataProduct: {},
        isLoadingProduct: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getProductDetail() {
            try {
                setProductDetail({ dataProduct: {}, isLoadingProduct: true });
                
                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        `[[at(document.id, "${id}")]]`
                    )}&lang=en-us&pageSize=1`,
                    {
                        signal: controller.signal,
                    }
                );
                const dataProduct = await response.json();
                
                setProductDetail({ dataProduct, isLoadingProduct: false });
            } catch (err) {
                //setProductDetail({ dataProduct: {}, isLoadingProduct: false });
                console.error(err);
            }
        }

        getProductDetail();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, id]);
    
    return productDetail;
}
