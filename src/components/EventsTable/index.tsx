import {BsFillCalendarEventFill} from "react-icons/bs";
import moment from "moment";
import TeamDetail from "../TeamDetail";
import React, {useContext} from "react";
import {DefaultContext} from "../../context";

const EventsTable = () => {
    const {events} = useContext(DefaultContext);

    return (
        <table>
            <thead>
            <tr>
                <th>
                    <strong>Latest Results</strong>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                events.map((eventItem: any, idx: number) => (
                    <tr key={idx}>
                        <td>
                            <div style={classes.formGroup}>
                                <BsFillCalendarEventFill />
                                {moment(eventItem.dateEvent).format('D MMM YY')}
                            </div>
                        </td>
                        <td
                            style={{
                                textAlign: 'right'
                            }}
                        >
                            <TeamDetail
                                teamName={eventItem.strHomeTeam}
                                teamId={eventItem.idHomeTeam}
                                imageDirection='right'
                            />
                        </td>
                        <td
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            <strong>
                                {`${eventItem.intHomeScore} - ${eventItem.intAwayScore}`}
                            </strong>
                        </td>
                        <td
                            style={{
                                textAlign: 'left'
                            }}
                        >
                            <TeamDetail
                                teamName={eventItem.strAwayTeam}
                                teamId={eventItem.idAwayTeam}
                                imageDirection='left'
                            />
                        </td>
                        <td>
                            {eventItem.strVenue}
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

const classes = {
    formGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: 5
    }
}

export default EventsTable;