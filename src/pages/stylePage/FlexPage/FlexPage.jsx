import * as React from 'react';
import * as Styled from './style';

export default function FlexPage() {
    return (
        <>
            <Styled.ContentWrapper>
                <Styled.Remark>
                    flex-direction: 主轴方向 row column row-reverse column-reverse<br />
                    flex-wrap: 是否换行 wrap nowrap wrap-reverse<br />
                    justify-content: 对齐方式 flex-start flex-end center space-around space-between<br />
                    align-items: 项目在交叉轴上如何对齐 flex-start flex-end center baseline（第一行文字对齐）stretch（默认值）<br />
                    align-content: 多根轴线的对齐方式(多行) flex-start flex-end center space-around space-between
                </Styled.Remark>
                <Styled.FlexWrapper>
                    <div>1</div>
                    <div className="g30">2</div>
                </Styled.FlexWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
                <Styled.Remark>
                    align-items: center;
                </Styled.Remark>
                <Styled.FlexWrapper className="items">
                    <div>1</div>
                    <div className="h30">2</div>

                    <div className="f30">2</div>
                    <div>3</div>
                    <div className="f30">4</div>
                </Styled.FlexWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
                <Styled.Remark>
                    align-items: baseline;
                </Styled.Remark>
                <Styled.FlexWrapper className="baseline">
                    <div>1</div>
                    <div className="h30">2</div>

                    <div className="f30">2</div>
                    <div>3</div>
                    <div className="f30">4</div>
                </Styled.FlexWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
                <Styled.Remark>
                    align-content: center;
                </Styled.Remark>
                <Styled.FlexWrapper className="content">
                    <div>1</div>
                    <div className="h30">2</div>

                    <div className="f30">2</div>
                    <div>3</div>
                    <div>4</div>
                </Styled.FlexWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
                <Styled.Remark>
                    align-content: space-around;
                 </Styled.Remark>
                <Styled.FlexWrapper className="around">
                    <div>1</div>
                    <div className="h30">2</div>

                    <div className="f30">2</div>
                    <div>3</div>
                    <div>4</div>
                </Styled.FlexWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
                <Styled.Remark>
                    垂直居中
                 </Styled.Remark>
                <Styled.FlexWrapper className="center">
                    <div>1</div>
                </Styled.FlexWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
                <Styled.Remark>
                    项目属性 <br />
                    flex: 0 1 auto  <br />
                    flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。 <br />
                    flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 <br />
                    flex-basis属性定义了在分配多余空间之前。默认为auto   <br />
                 </Styled.Remark>
                <Styled.FlexWrapper className="flexGrow">
                    <div className="flex1">1</div>
                    <div>1</div>
                </Styled.FlexWrapper>
            </Styled.ContentWrapper>
        </>
    )
}