import App from 'next/app'
import React, { FunctionComponent, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { styledTheme, GlobalStyle } from '../themes/styled-theme'
import { Reset } from 'styled-reset'
import Head from 'next/head'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import { lightTheme } from '../themes/material-theme'


const ContextProvider: FunctionComponent = ({ children }) => {
    return (<Fragment>{children}</Fragment>)
}

class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props
        return (
            <ContextProvider>
                <MaterialThemeProvider theme={lightTheme}>
                    <ThemeProvider theme={styledTheme}>
                        <Head>
                        </Head>
                        <Reset />
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </MaterialThemeProvider>
            </ContextProvider>
        )
    }
}

export default MyApp
