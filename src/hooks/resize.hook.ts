import {useEffect, useState} from "react";

type Size = {width: number, height: number};
export function useWindowResize() {
    const [size, setSize] = useState<Size>({width: window.innerWidth, height: window.innerHeight});
    useEffect(() => {
        function handleResize() {
            setSize({width: window.innerWidth, height: window.innerHeight});
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
}
