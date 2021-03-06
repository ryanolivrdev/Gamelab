import styled from "styled-components";

export const Container = styled.div`
  main {
    overflow-x: hidden;
    font-family: "Roboto", sans-serif;
  }

  @media only screen and (max-width: 1200px) {
    main {
      margin-left: 0;
    }

    nav {
      bottom: 0;
      width: 100vw;
      height: 5rem;
      z-index: 999;

      ul {
        flex-direction: row;

        li {
          display: flex;
          place-content: center;
          font-size: 18px;
        }
      }
    }
  }
`;

export const IntroductionContent = styled.div`
  display: flex;
  min-height: calc(100vh - 54px);
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  flex-wrap: wrap;
`;

export const IntroductionContentContainer = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: calc(54px + 2rem);

  img {
    max-width: 100%;
  }

  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const LeftHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;

  font-family: "Roboto";
  font-weight: 400;

  span {
    font-weight: 700;
    color: var(--text-font);
    font-size: 6rem;
    text-shadow: 2px 2px 8px #00000081;
  }

  h1 {
    font-weight: 700;
    font-size: 6rem;

    text-shadow: 2px 2px 8px #00000099;
  }

  h2 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 8px #00000099;
    width: 24ch;
  }

  button {
    width: 11.3rem;
    height: 3rem;
    background: var(--button);
    border-radius: 1.563rem;
    border: none;

    font-weight: 700;
    font-size: 0.875rem;
    color: #fff3f3;
    text-shadow: 2px 2px 8px #00000099;
  }

  .aTag {
    text-decoration: underline;
    text-underline-offset: 0.2rem;
    color: var(--text-secondary);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.5rem;
  }

  @media screen and (max-width: 1203px) {
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    h1 {
      font-weight: 700;
      font-size: 5rem;

      text-shadow: 2px 2px 8px #00000099;
      width: auto;
    }

    span {
      font-weight: 700;
      color: var(--text-font);
      font-size: 5rem;
      text-shadow: 2px 2px 8px #00000081;
    }

    h2 {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 2rem;
      text-shadow: 2px 2px 8px #00000099;
      width: auto;
    }
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    270deg,
    #14213d 0%,
    rgba(21, 168, 202, 0.34) 50%,
    #14213d 100%
  );
  transform: matrix(-1, 0, 0, 1, 0, 0); ;
`;
