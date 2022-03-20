import {myApp} from "./client";

export const getLatestEvents = (): Promise<any | null> => {
    return new Promise((resolve, reject) => {
        myApp.get(`/get-last-events`)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
}

export const getTeamDetails = (teamId: any): Promise<any | null> => {
    return new Promise((resolve, reject) => {
        myApp.post('/get-team-details', {
            teamId: teamId
        })
            .then(response => resolve(response))
            .catch(error => reject(error));
    })
}