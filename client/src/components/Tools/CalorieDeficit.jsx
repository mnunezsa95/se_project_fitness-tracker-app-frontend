import PropTypes from "prop-types";
import ToolModal from "./ToolModal";

const CalorieDeficit = ({ isOpen, onClose, tool }) => {
  return (
    <ToolModal isOpen={isOpen} onClose={onClose} tool={tool}>
      <div>2</div>
    </ToolModal>
  );
};

CalorieDeficit.propTypes = {
  isOpen: PropTypes.object,
  onClose: PropTypes.func,
  tool: PropTypes.object,
};

export default CalorieDeficit;
