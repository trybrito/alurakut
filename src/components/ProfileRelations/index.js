import styled from "styled-components";
import Box from "../Box";

export const ProfileRelationsBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;

    max-height: 220px;
    list-style: none;
  }

  img {
    object-fit: cover;
    background-position: center center;

    width: 100%;
    height: 100%;

    position: relative;
  }

  ul li a {
    display: inline-block;
    position: relative;

    height: 102px;
    overflow: hidden;
    border-radius: 8px;

    span {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;

      width: 100%;

      color: #ffffff;
      font-size: 10px;

      padding: 0 4px;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:after {
      content: "";

      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;

      background-image: linear-gradient(0deg, #00000073, transparent);
    }
  }
`;
