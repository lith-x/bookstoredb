import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface EntryElementProps {
    entryName: string;
}

export class EntryElement extends React.Component<EntryElementProps> {
    render() {
        return (<p>Hi {this.props.entryName}</p>);
    }
}

export function reacttest() {
    ReactDOM.render(
        <EntryElement entryName="boo"/>,
        document.getElementById('subject-list-root')
    );
}
