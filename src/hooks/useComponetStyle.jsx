import { useState, useEffect, useCallback } from "react";
import usePageSize from "./usePageSize";

export default function useComponetStyle(page) {

    const pageSize = usePageSize();
    const [componentStyle, setComponentStyle] = useState();

    const handleComponentSize = useCallback(() => {
        if ( pageSize.width > page.l.size) {
            console.log(pageSize.width)
            return pageSize.width / page.xl.columns;
        } else if (pageSize.width < page.l.size && pageSize.width > page.m.size) {
            console.log(pageSize.width)
            return pageSize.width / page.l.columns;
        } else if (pageSize.width < page.m.size && pageSize.width > page.s.size) {
            console.log(pageSize.width)
            return pageSize.width / page.m.columns;
        } else if (pageSize.width < page.s.size && pageSize.width > page.xs.size) {

            return pageSize.width / page.s.columns;
        } else if (pageSize.width <= page.xs.size) {

            return pageSize.width / page.xs.columns;
        }
     
    }, [pageSize, page]);
    useEffect(() => {
        const size = handleComponentSize();
        setComponentStyle(prev => {

            return { ...prev, height: size }
        });

    }, [handleComponentSize])
    useEffect(() => {
        setComponentStyle(prev => {

            return { ...prev, height: handleComponentSize() }
        });

    }, [pageSize, handleComponentSize]);

    return componentStyle;
}
