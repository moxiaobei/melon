/**
 * @file melon/TableCell
 * @author leon(ludafa@outlook.com)
 */

import React, {Component, PropTypes} from 'react';
import {create} from '../common/util/cxBuilder';

const cx = create('TableCell');

export default class TableCell extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.cellRenderer || nextProps.cellData !== this.props.cellData;
    }

    getCellContent() {

        const {props} = this;
        const {cellRenderer, cellData} = this.props;

        const content = cellRenderer ? cellRenderer(props) : cellData;

        return (
            <div className={cx().part('content').build()}>
                {content}
            </div>
        );
    }

    render() {

        const props = this.props;

        const style = {
            textAlign: props.align,
            width: props.width,
            height: props.height
        };

        return (
            <div className={cx(props).build()}>
                <div className={cx().part('wrap1').build()} style={style}>
                    <div className={cx().part('wrap2').build()}>
                        <div className={cx().part('wrap3').build()}>
                            {this.getCellContent()}
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

TableCell.displayName = 'TableCell';

TableCell.propTypes = {

    part: PropTypes.oneOf(['header', 'body', 'footer']),

    columnData: PropTypes.any,
    rowData: PropTypes.any,
    columnIndex: PropTypes.number,
    rowIndex: PropTypes.number,
    cellData: PropTypes.any,
    cellKey: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    minWidth: PropTypes.number,
    maxWidth: PropTypes.number,

    cellRenderer: PropTypes.func

};

TableCell.defaultProps = {
    align: 'left'
};
