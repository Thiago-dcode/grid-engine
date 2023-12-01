import { useState, useEffect } from 'react';

export const usePageSize = () => {
    const [pageSize, setPageSize] = useState(getPageSize());

    function getPageSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return pageSize;
};

export default usePageSize;