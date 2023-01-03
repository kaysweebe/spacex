import { gql, useQuery } from "@apollo/client";
import RocketCard from "./RocketCard";

export interface RocketData {
    id: string;
    name: string;
    wikipedia: string;
    description: string;
}

interface RocketsResult {
    rockets: Array<RocketData>;
}

const ROCKETS = gql`
{
    rockets {
      description
      id
      name
      wikipedia
    }
  }
`;

const Rockets = () => {
  const { loading, error, data } = useQuery<RocketsResult>(ROCKETS);

  return (
    <>
      <h1>SpaceX Rockets</h1>
      {loading || !data ? (<p>Loading...</p>) :
        data.rockets.map(rocket => (
          <RocketCard rocket={rocket as RocketData}></RocketCard>
        ))
      }
      { error && <div>Error</div>}
    </>
  );
}

export default Rockets;
