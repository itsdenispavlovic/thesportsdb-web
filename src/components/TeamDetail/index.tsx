import {useTeamDetail} from "./hooks";
import {TeamDetailProps} from "./types";

const TeamDetail = ({ teamName, teamId, imageDirection }: TeamDetailProps) => {

    const {
        teamDetail
    } = useTeamDetail(teamId, teamName);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                justifyContent: `flex-${imageDirection === 'left' ? 'start' : 'end'}`
            }}
        >
            {teamDetail?.image && imageDirection === 'left' && (
                <img
                    src={teamDetail?.image}
                    width={10}
                    height={10}
                    alt={teamDetail?.name}
                />
            )}
            {teamDetail?.name}
            {teamDetail?.image && imageDirection === 'right' && (
                <img
                    src={teamDetail?.image}
                    width={10}
                    height={10}
                    alt={teamDetail?.name}
                />
            )}
        </div>
    );
}

export default TeamDetail;