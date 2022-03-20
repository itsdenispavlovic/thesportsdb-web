import React from "react";

const defaultValues = {
    isLoading: false,
    setIsLoading: () => {},
    events: [],
    setEvents: () => {}
};

export type DefaultState = {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void,
    events: any,
    setEvents: any
}

export const DefaultContext = React.createContext<DefaultState>(defaultValues);
