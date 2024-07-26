"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Button = ({ isLoading }) => {
  return (
    <div>
      <button className="button">
        {isLoading ? (
          <FontAwesomeIcon
            icon={faCircleNotch}
            color="white"
            size="xl"
            className="animate-spin"
          />
        ) : (
          "Send"
        )}
      </button>
    </div>
  );
};

export default Button;
