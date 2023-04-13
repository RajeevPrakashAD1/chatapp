import { useParams } from 'react-router-dom';

function useCurrentParam() {
	const { roomname } = useParams();

	return roomname;
}

export default useCurrentParam;
