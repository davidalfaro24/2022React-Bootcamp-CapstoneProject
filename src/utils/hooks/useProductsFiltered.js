/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductsFiltered() {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [ productsFiltered, setProductsFiltered] = useState(() => ({
        dataProductsFiltered: {},
        isLoadingProductsFiltered: true,
        datafilterCategories:[],
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => { };
        }

        const controller = new AbortController();

        async function getProductsFiltered() {
            try {
                setProductsFiltered({ dataProductsFiltered: {}, isLoadingProductsFiltered: true,datafilterCategories:[] });
                //console.log(productsFiltered.datafilterCategories)
                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        `[[at(document.type, "product")][any(my.product.category, [])]]`
                    )}&lang=en-us&pageSize=16`,
                    {
                        signal: controller.signal,
                    }
                );
                const dataProductsFiltered = await response.json();
                //console.log(productsFiltered.datafilterCategories)
                //console.log(dataProductsFiltered)
                setProductsFiltered({ dataProductsFiltered, isLoadingProductsFiltered: false, datafilterCategories:[] });
            } catch (err) {
                setProductsFiltered({ dataProductsFiltered: {}, isLoadingProductsFiltered: false, datafilterCategories:[] });
                console.error(err);
            }
        }

        getProductsFiltered();

        return () => {
            controller.abort();
        };
    }, [apiRef, isApiMetadataLoading]);


    // const getProductsFiltered = useCallback( async function (filters) {
    //     if (!apiRef || isApiMetadataLoading) {
    //         return () => { };
    //     }

    //     const controller = new AbortController();
    //     console.log(`FILTROS EN HOOK ${filters}`)
    //     try {
    //         setProductsFiltered({ dataProductsFiltered: {}, isLoadingProductsFiltered: true, datafilterCategories:[] });
    
    //         const response = await fetch(
    //             `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
    //                 `[[at(document.type, "product")][any(my.product.category, [${filters}])]]`
    //             )}&lang=en-us&pageSize=12&page=1`,
    //             {
    //                 signal: controller.signal,
    //             }
    //         );
    //         const dataProductsFiltered = await response.json();
    
    //         setProductsFiltered({ dataProductsFiltered, isLoadingProductsFiltered: false, datafilterCategories:filters });
    //     } catch (err) {
    //         setProductsFiltered({ dataProductsFiltered: {}, isLoadingProductsFiltered: false,  datafilterCategories:[] });
    //         console.error(err);
    //     }
    //     return () => {
    //         controller.abort();
    //     };
    // }, [apiRef, isApiMetadataLoading ])

    // useEffect(() => {
    //     console.log(productsFiltered.datafilterCategories)
    //     getProductsFiltered( productsFiltered.datafilterCategories);

    // }, [getProductsFiltered]);

    return { productsFiltered, setProductsFiltered}
}


