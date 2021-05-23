import {useEffect, useRef} from 'react'
import {dequal as deepEqual} from 'dequal'
// Based on useDeepCompare by Kent C. Dodds
// https://github.com/kentcdodds/use-deep-compare-effect

let useDeepEffect = (callback, deps) => {
    const cache = useRef()
    const version = useRef(0)

    if (!deepEqual(deps, cache.current)) {
        cache.current = deps
        version.current += 1
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useEffect(callback, [version.current])
};

export default useDeepEffect;
