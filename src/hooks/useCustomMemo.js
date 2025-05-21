import { useEffect, useRef } from "react";

const areEqual = (prevDeps,nextDeps) => {
    if(prevDeps == null) return false;
    if(prevDeps.length !== nextDeps.length) return false;

    for(let i=0;i<prevDeps.length;i++){
        if(prevDeps[i]!==nextDeps[i]){
            return false;
        }
    }
    return true;
}

const useCustomMemo = (cb,deps) =>{
    // 1. variable/ state to store cached value
    const memoizedRef = useRef(null); // value persists thr the lifetime of component
    // 2. compare changes in deps
    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)){
        memoizedRef.current = {
            value: cb(),
            deps
        }
    }
    // 3. cleanup logic
    useEffect(()=>{
        return ()=>{
            memoizedRef.current = null;
        }
    },[])
    
    // 4. return memoized value
    return memoizedRef.current.value;
};

export default useCustomMemo;