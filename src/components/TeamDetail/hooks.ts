import {useContext, useEffect, useState} from "react";
import {DefaultContext} from "../../context";
import {getTeamDetails} from "../../api/sports";

export const useTeamDetail = (teamId: any, teamName: string) => {
    const [teamDetail, setTeamDetail] = useState<any>(null);
    const { setIsLoading } = useContext(DefaultContext);

    useEffect(() => {
        getTeamDetails(teamId).then(response => {
            setIsLoading(true);
            const data = response.data;

            if(data?.teams[0]) {
                setTeamDetail({
                    name: teamName,
                    image: data?.teams[0].strTeamBadge
                });
            } else {
                setTeamDetail({
                    name: teamName,
                });
            }

            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        })
    }, [setIsLoading, teamId, teamName]);

    return {
        teamDetail
    }
}