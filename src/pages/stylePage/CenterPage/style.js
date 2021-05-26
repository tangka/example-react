import styled from 'styled-components';

const CenterWrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: aqua;
    &.flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div {
        width: 50px;
        height: 20px; 
        background-color: beige;
    }
    &.position {
        position: relative;
        div {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    &.table {
        display: table;
        div {
            display: table-cell;
            vertical-align: middle;
        }
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