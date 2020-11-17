import React, { PureComponent } from 'react';

export default class layoutIndex extends PureComponent {
    render() {
        return <div>{this.props.children}</div>;
    }
}
