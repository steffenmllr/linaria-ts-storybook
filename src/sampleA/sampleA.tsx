import React from 'react';
import { css, cx } from 'linaria';
import colors from './../colors';

const styles = {
    sample: css`
        background: ${colors.primary};
    `,
    row: '',
    rowName: '',
    rowList: ''
}

export default class SampleComponent extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <div className={styles.sample}>
                Sample A
            </div>
        );
    }
}
