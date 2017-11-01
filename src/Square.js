/**
 * Created by Karuppannan.Prabakar on 10/31/2017.
 */
import React  from 'react';

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;