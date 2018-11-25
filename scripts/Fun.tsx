import * as React from "react";

export interface Props {
}

interface State {
    info: string;
    result: string;
}

export default class Fun extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { info: '', result: '' };
    }

    render(): React.ReactNode {
        return (
            <div>
                <div>
                    <p>Info: {this.state.info}</p>
                    <p>Result: {this.state.result}</p>
                </div>
            </div>
        );
    }
}
