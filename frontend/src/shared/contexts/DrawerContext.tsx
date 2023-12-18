import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerOption {
    label: string;
    path: string;
}
interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOption[];
    toggleDrawerOpen: ()=>void;
    setIsDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}
interface IAppDrawerProviderprops {
    children: React.ReactNode;
}
const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () =>{
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IAppDrawerProviderprops> = ({children}) =>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setIsDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(()=>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[])=>{
        setIsDrawerOptions(newDrawerOptions);
    }, []);
    return(
        <DrawerContext.Provider value={{isDrawerOpen, drawerOptions, toggleDrawerOpen, setIsDrawerOptions: handleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    )
}