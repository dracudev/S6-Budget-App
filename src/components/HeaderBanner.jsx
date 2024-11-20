import styled from "styled-components";
import bannerImg from "../assets/banner.webp";

const Banner = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;
  height: 12rem;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function HeaderBanner({ children }) {
  return <Banner className="container">{children}</Banner>;
}
