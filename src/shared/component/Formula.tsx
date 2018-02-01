import React, { Component } from "react"
import Katex from "shared/lib/katex"
import "shared/lib/katex.css"
import log from 'shared/util/log';

interface Props {
  content: string
}

export default class Formula extends Component<Props> {

  render() {
    const { content } = this.props

    return (
      <span
        dangerouslySetInnerHTML={{
          __html: Katex.renderToString( content )
        }}
      />
    )
  }
}

