import {useEffect, useRef} from 'react';

export function useAutoScroll(dependency){
        const elementRef  = useRef(null);
        useEffect( () => {
          const containerElem = elementRef .current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }

        }, [dependency]);

        return elementRef ;

}
      