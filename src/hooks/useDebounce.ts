import { useEffect, useState } from 'react';

type DebouncedFn<T> = (...args: T[]) => void;

function useDebounce<T>(callback: DebouncedFn<T>, delay: number): DebouncedFn<T> {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return (...args: T[]) => {
        if (timer) {
            clearTimeout(timer);
        }

        const newTimer = setTimeout(() => {
            callback(...args);
        }, delay);

        setTimer(newTimer);
    };
}

export default useDebounce;
