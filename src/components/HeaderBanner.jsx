import styled from "styled-components";
import bannerImg from "../assets/banner.webp";
import PropTypes from "prop-types";

const Banner = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;
  height: 12rem;
  width: 95%;
  max-width: 1200px;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function HeaderBanner({ children }) {
  return <Banner className="container">{children}</Banner>;
}

HeaderBanner.propTypes = {
  children: PropTypes.node,
};