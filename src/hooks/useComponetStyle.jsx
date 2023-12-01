import { useState, useEffect, useCallback } from "react";
import usePageSize from "./usePageSize";

export default function useComponetStyle(page) {

    const pageSize = usePageSize();
    const [componentStyle, setComponentStyle] = useState();

    const handleComponentSize = useCallback(() => {
        if (pageSize.width < page.responsive.xl.size && pageSize.width > page.responsive.l.size) {
            console.log(pageSize.width)
            return pageSize.width / page.responsive.xl.columns;
        } else if (pageSize.width < page.responsive.l.size && pageSize.width > page.responsive.m.size) {
            console.log(pageSize.width)
            return pageSize.width / page.responsive.l.columns;
        } else if (pageSize.width < page.responsive.m.size && pageSize.width > page.responsive.s.size) {
            console.log(pageSize.width)
            return pageSize.width / page.responsive.m.columns;
        } else if (pageSize.width < page.responsive.s.size && pageSize.width > page.responsive.xs.size) {

            return pageSize.width / page.responsive.s.columns;
        } else if (pageSize.width <= page.responsive.xs.size) {

            return pageSize.width / page.responsive.xs.columns;
        }
        else{

            return page.responsive.max.componentSize;
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
