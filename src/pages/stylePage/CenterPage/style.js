import styled from 'styled-components';

const CenterWrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: aqua;
    display: flex;
    /* flex-direction: row-reverse;
    flex-wrap: wrap; */
    flex-flow: row wrap;
    justify-content: flex-start;
    
    /* align-content: space-around;
    align-items: center; */
    &.items {
        align-items: center;
    }
    &.content {
        align-content: center;
    }
    &.around {
        align-content: space-around;
    }
    &.baseline {
        align-items: baseline;
    }
    &.center {
        justify-content: space-around;
        align-content: center;
    }
    &.flexGrow {
        flex-wrap: nowrap;
        div {
            width: 100px;
            flex: 1 1 auto;
        }
        .flex1 {
            width: 100px;
            flex: 2 0 auto;
        }
    }
    div {
        width: 50px;
        height: 20px; 
        background-color: beige;
        margin-right: 5px;
    }
    .h30 {
        height: 30px; 
    }
    .f30 {
        font-size: 30px;
        height: 50px; 
    }
`;

const Remark = styled.p`
    font-size: 18px;
    line-height: 36px;
`;

const ContentWrapper = styled.div`
    float: left;
    margin-right: 10px;
`;

export {
    CenterWrapper,
    Remark,
    ContentWrapper,
}