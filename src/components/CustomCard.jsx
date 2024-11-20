import styled from "styled-components";
import PropTypes from "prop-types";

const CtmCard = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: space-between;
  gap: 3rem;
  padding: 2rem;
  align-items: center;
`;

export function CustomCard({children, className}) {
    return (
        <CtmCard className={className}>{children}</CtmCard>
    )
}

CustomCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };