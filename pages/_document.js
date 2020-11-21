import React, {Fragment} from 'react'
import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument  extends Document {

    static async getInitialProps (ctx) {

        const initialProps = await Document.getInitialProps(ctx)

        return {
        ...initialProps
        }
    }

    setGoogleTags() {
    return {
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-165269619-2');
        `
    };
    }


    render(){
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <Fragment>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-165269619-2"
                    />
                    <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                    </Fragment>
                </body>
            </html>
        )
    }
    
}