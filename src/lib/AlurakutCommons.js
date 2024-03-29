import React from "react";
import styled, { css } from "styled-components";
import NextLink from "next/link";

const BASE_URL = "http://alurakut.vercel.app/";
const v = "1";

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}

export function AlurakutMenu({ gitHubUser }) {
  const [isMenuOpen, setMenuState] = React.useState(false);
  return (
    <AlurakutMenu.Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <AlurakutMenu.Logo src={`${BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {[
            { name: "Inicio", slug: "/" },
            { name: "Amigos", slug: "/amigos" },
            { name: "Comunidades", slug: "/comunidades" },
          ].map((menuItem) => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>Sair</a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && (
            <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </button>
      </div>
      <AlurakutMenuProfileSidebar gitHubUser={gitHubUser} />
    </AlurakutMenu.Wrapper>
  );
}

AlurakutMenu.Wrapper = styled.header`
  width: 100%;
  background-color: #308bc5;

  .alurakutMenuProfileSidebar {
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    right: 0;
    top: 48px;

    background: white;
    padding: 46px;
    transition: 0.3s;

    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? "all" : "none")};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateY(0)" : "translateY(calc(-100% - 48px))"};

    @media (min-width: 860px) {
      display: none;
    }

    > div {
      max-width: 400px;
      margin: auto;
    }

    a {
      font-size: 18px;
    }

    .boxLink {
      font-size: 18px;
      color: #2e7bb4;
      font-weight: 800;

      -webkit-text-decoration: none;
      text-decoration: none;
    }

    hr {
      border-color: transparent;
      border-bottom-color: #ecf2fa;

      margin-top: 12px;
      margin-bottom: 8px;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 101;

    max-width: 1110px;
    background-color: #308bc5;

    padding: 7px 16px;
    margin: auto;

    @media (min-width: 860px) {
      justify-content: flex-start;
    }

    button {
      display: inline-block;
      align-self: center;

      background: transparent;
      border: 0;

      @media (min-width: 860px) {
        display: none;
      }
    }

    nav {
      display: none;

      @media (min-width: 860px) {
        display: flex;
      }

      a {
        position: relative;

        font-size: 12px;
        color: white;
        text-decoration: none;

        padding: 10px 16px;

        &:after {
          content: " ";

          display: block;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;

          background-color: #5292c1;

          width: 1px;
          height: 12px;
          margin: auto;
        }
      }
    }

    input {
      background-image: url(${`${BASE_URL}/icons/search.svg`});
      background-position: 15px center;
      background-repeat: no-repeat;
      background: #5579a1;
      color: #ffffff;

      font-size: 12px;
      padding: 10px 42px;

      border: 0;
      border-radius: 1000px;

      ::placeholder {
        color: #ffffff;
        opacity: 1;
      }
    }
  }
`;

AlurakutMenu.Logo = styled.img`
  background-color: #ffffff;
  border-radius: 1000px;

  height: 34px;
  padding: 9px 14px;
`;

function AlurakutMenuProfileSidebar({ gitHubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img
          src={`https://github.com/${gitHubUser}.png`}
          style={{ borderRadius: "8px" }}
        />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${gitHubUser}`}>
            @{gitHubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  );
}

export function AlurakutProfileSidebarMenuDefault() {
  return (
    <AlurakutProfileSidebarMenuDefault.Wrapper>
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
          Perfil
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
          Recados
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
          Fotos
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
          GitHub Trends
        </a>
        <a href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} />
          Sair
        </a>
      </nav>
    </AlurakutProfileSidebarMenuDefault.Wrapper>
  );
}

AlurakutProfileSidebarMenuDefault.Wrapper = styled.div`
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    color: #2e7bb4;
    font-size: 12px;
    text-decoration: none;

    margin-bottom: 16px;

    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
`;

export function OrkutNostalgicIconSet(props) {
  return (
    <OrkutNostalgicIconSet.List>
      {[
        { name: "Recados", slug: "recados", icon: "book" },
        { name: "Fotos", slug: "fotos", icon: "camera" },
        { name: "Videos", slug: "videos", icon: "video-camera" },
        { name: "Fãs", slug: "fas", icon: "star" },
        { name: "Mensagens", slug: "mensagens", icon: "email" },
      ].map(({ name, slug, icon }) => (
        <li key={`orkut__icon_set__${slug}`}>
          <span
            style={{ gridArea: "title" }}
            className="OrkutNostalgicIconSet__title"
          >
            {name}
          </span>
          <span
            className="OrkutNostalgicIconSet__number"
            style={{ gridArea: "number" }}
          >
            <img
              key={`orkut__icon_set__${slug}_img`}
              className="OrkutNostalgicIconSet__iconSample"
              src={`https://alurakut.vercel.app/icons/${icon}.svg`}
            />
            {props[slug] ? props[slug] : 0}
          </span>
        </li>
      ))}
      {[
        { name: "Confiável", slug: "confiavel", icon: "smile" },
        { name: "Legal", slug: "legal", icon: "cool" },
        { name: "Sexy", slug: "sexy", icon: "heart" },
      ].map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;
        return (
          <li key={`orkut__icon_set__${slug}`}>
            <span className="OrkutNostalgicIconSet__title">{name}</span>
            <span
              className="OrkutNostalgicIconSet__iconComplex"
              className="OrkutNostalgicIconSet__number"
              style={{ gridArea: "number" }}
            >
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= total - 1;
                return (
                  <img
                    key={`orkut__icon_set__${slug}_img_${index}`}
                    src={`https://alurakut.vercel.app/icons/${icon}.svg`}
                    style={{
                      marginRight: "2px",
                      opacity: isHeartActive ? 1 : "0.5",
                    }}
                  />
                );
              })}
            </span>
          </li>
        );
      })}
    </OrkutNostalgicIconSet.List>
  );
}

OrkutNostalgicIconSet.List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 32px;
  list-style: none;

  li {
    display: grid;
    grid-template-areas:
      "title title"
      "number number";

    font-size: 12px;
    color: #5a5a5a;

    &:not(:last-child) {
      margin-right: 5px;
    }

    .OrkutNostalgicIconSet__title {
      display: block;
      font-style: italic;
    }

    .OrkutNostalgicIconSet__number {
      min-width: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .OrkutNostalgicIconSet__iconSample {
        margin-right: 7px;
      }
    }
  }
`;

const AlurakutLoginScreen = css`
  :root {
    --backgroundPrimary: #d9e6f6;
    --backgroundSecondary: #f1f9fe;
    --backgroundTertiary: #ffffff;
    --backgroundQuaternary: #bbcde8;
    --colorPrimary: #2e7bb4;
    --colorSecondary: #388bb0;
    --colorTertiary: #2f4a71;
    --colorQuaternary: #d81d99;
    --textPrimaryColor: #333333;
    --textSecondaryColor: #ffffff;
    --textTertiaryColor: #5a5a5a;
    --textQuaternaryColor: #c5c6ca;
    --commonRadius: 8px;
  }

  .loginScreen {
    --gap: 12px;
    --gutter: 16px;

    display: grid;
    grid-gap: var(--gap);
    grid-template-areas:
      "logoArea"
      "formArea"
      "footerArea";

    padding: 16px;
    max-width: 1110px;

    @media (min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        "logoArea formArea"
        "logoArea formArea"
        "footerArea footerArea";
    }

    .logoArea {
      grid-area: logoArea;

      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      background-color: var(--backgroundTertiary);
      border-radius: var(--commonRadius);

      min-height: 263px;
      text-align: center;
      padding: var(--gutter);

      @media (min-width: 860px) {
        min-height: 368px;
      }

      p {
        font-size: 12px;
        line-height: 1.2;

        &:not(:last-child) {
          margin-bottom: 12px;
        }

        strong {
          color: var(--colorQuaternary);
        }
      }

      img {
        max-height: 45px;
        margin-bottom: 36px;
      }
    }

    .formArea {
      grid-area: formArea;

      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      .box {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        padding: var(--gutter);
        padding-left: 50px;
        padding-right: 50px;

        background-color: var(--backgroundSecondary);
        border-radius: var(--commonRadius);

        &:not(:last-child) {
          margin-bottom: var(--gap);
        }

        &:first-child {
          min-height: 224px;

          @media (min-width: 860px) {
            min-height: 282px;
          }
        }

        p {
          font-size: 14px;
        }

        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }

        input {
          display: block;

          background-color: var(--backgroundTertiary);

          border: 1px solid var(--textQuaternaryColor);
          border-radius: var(--commonRadius);

          width: 100%;
          padding: 12px;
          margin-top: 24px;
          margin-bottom: 16px;
        }

        button {
          display: block;

          background-color: var(--colorPrimary);
          color: var(--textSecondaryColor);

          width: 100%;
          border: 0;
          border-radius: var(--commonRadius);
          padding: 12px;
        }
      }
    }

    .footerArea {
      grid-area: footerArea;

      background-color: var(--backgroundQuaternary);
      border-radius: var(--commonRadius);
      padding: 8px;

      p {
        font-size: 12px;
        text-align: center;

        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
      }
    }
  }
`;

export const AlurakutStyles = css`
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  a,
  button {
    cursor: pointer;
    transition: 0.3s;
    outline: 0;

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  input {
    transition: 0.3s;
    outline: 0;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }

  ${AlurakutLoginScreen}
`;
