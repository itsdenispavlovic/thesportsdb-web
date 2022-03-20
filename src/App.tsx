import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {getLatestEvents} from "./api/sports";
import {Rings} from 'react-loader-spinner';
import {DefaultContext} from "./context";
import EventsTable from "./components/EventsTable";

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [events, setEvents] = useState<any[]>([]);

    const getEvents = useCallback( () => {
        getLatestEvents().then(response => {
            setIsLoading(true);
            const data = response.data;

            setEvents(data?.events?.map((dataItem: any, idx: number) => {

                return {
                    dateEvent: dataItem.dateEvent,
                    idEvent: dataItem.idEvent,
                    idLeague: dataItem.idLeague,
                    idAwayTeam: dataItem.idAwayTeam,
                    intAwayScore: dataItem.intAwayScore,
                    strAwayTeam: dataItem.strAwayTeam,
                    idHomeTeam: dataItem.idHomeTeam,
                    intHomeScore: dataItem.intHomeScore,
                    strHomeTeam: dataItem.strHomeTeam,
                    strVenue: dataItem.strVenue,
                    strThumb: dataItem.strThumb
                }
            }));

            setIsLoading(false);
        }).catch(error => {})
    }, []);

    useEffect(() => {
        getEvents();
    }, []);


    return (
        <DefaultContext.Provider
            value={{ isLoading, setIsLoading, events, setEvents }}
        >
            <div className="App">
                {
                    isLoading && (
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                zIndex: 999,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#d3d3d3'
                            }}
                        >
                            <Rings
                                height="100"
                                width="100"
                                color='grey'
                                ariaLabel='loading'
                            />
                            <h2>Loading...</h2>
                        </div>
                    )
                }
                <header className="App-content">
                    <EventsTable />
                </header>
            </div>
        </DefaultContext.Provider>
    );
}

export default App;
