import React from 'react';
import { css, cx } from 'linaria';
import colors from './../colors';

const styles = {
    sample: css`
        background: ${colors.primaryDark};
    `,
    row: '',
    rowList: '',
    rowListItem: '',
}

export default class SampleComponent extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className={styles.sample}>
                Sample B
            </div>
        );
    }
}
