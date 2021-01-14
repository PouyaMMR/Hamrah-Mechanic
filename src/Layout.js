import React, {Component} from 'react';
import Styled from 'styled-components';

class Layout extends Component {
    render() {
        let GridContainer = Styled.div`
        width: 500px;
        height: 500px;
        margin: 50px auto  auto 700px;
        display: grid;
        grid-template-rows: repeat(${this.props.rows}, auto);`
        let GridItem = Styled.div`
        background-color: #cfe2f3;
        border: 2px solid #000;`
        let gridInventory = null;
        let gridItems = new Array(this.props.rows).fill([]);
        for (var i = 0; i < this.props.rows; i++) {
            let GridColumnContainer = Styled.div`
            display: grid;
            grid-template-columns: repeat(${this.props.rowDetails[i].columns}, auto);`
            
            for (var j = 0; j < this.props.rowDetails[i].columns; j++) {
                gridItems[i].push(<GridItem></GridItem>);
            }

            gridInventory = <GridColumnContainer>{gridItems[i]}</GridColumnContainer>
        }
        return(
            <GridContainer>
                {gridInventory}
            </GridContainer>
        );
    }
}

export default Layout;