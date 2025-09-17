import { useMemo } from "react";
import { useSelector } from "react-redux"

export const getLanConfig = (keys) => {
    
    const languageConfg = useSelector( store => store.appConfig.language)
   
   return useMemo(() => {

    if (typeof keys === "string") {
      return languageConfg[keys];
    }

    if (Array.isArray(keys)) {
      return keys.reduce((acc, key) => {
        acc[key] = languageConfg[key];
        return acc;
      }, {});
    }

    return {};
  }, [languageConfg, keys]);
    
}

export const getTheme = () => useSelector( store => store.appConfig.theme.mode)
