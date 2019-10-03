import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import { GlobalStyle } from "../styles/globalStyle"

import HeaderMain from "./Headers/HeaderMain"
import HeaderMinor from "./Headers/HeaderMinor"

const PageWrapper = styled.div`
  width: 95vw;
  margin: 0 auto;
`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: right;
  background-color: #8dd4bd;

  @media (max-width: 600px) {
    text-align: center;
  }
`
const ExternalLink = styled.a`
  color: #c59fc5;
`

class Layout extends React.Component {
  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure("show_continue_shopping", true)
    }
  }

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const siteName = "A Little Cattywampus"
    let header

    if (location.pathname === rootPath) {
      header = <HeaderMain shopName={siteName}></HeaderMain>
    } else {
      header = <HeaderMinor shopName={siteName}></HeaderMinor>
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            {header}
            <MainSection>{children}</MainSection>
            <FooterStyled>
              <strong>
                A Little Cattywampus - Made by{" "}
                <ExternalLink
                  href="https://www.roseapplemedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RoseApple Media
                </ExternalLink>
              </strong>
            </FooterStyled>
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
