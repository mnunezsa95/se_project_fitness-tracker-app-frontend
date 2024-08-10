import PropTypes from "prop-types";
import { formatWords } from "../utils/functions";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="mx-auto w-full max-w-xs">
      <img
        src={exercise?.gifUrl}
        alt={exercise?.name}
        className="rounded-2xl w-full"
      />
      <div className="mt-4">
        <h3
          className="text-2xl font-semibold text-content font-Mona-Sans text-wrap"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {formatWords(exercise?.name)}
        </h3>
        <p className="text-content text-lg">
          Target: {formatWords(exercise?.target)}
        </p>
        <p className="text-content text-lg">
          Equipment: {formatWords(exercise?.equipment)}
        </p>
      </div>
    </div>
  );
};

ExerciseCard.propTypes = {
  exercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    bodyPart: PropTypes.string.isRequired,
    gifUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExerciseCard;
