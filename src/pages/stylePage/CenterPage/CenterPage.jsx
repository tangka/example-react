import * as React from 'react';
import * as Styled from './style';

export default function CenterPage() {
    return (
        <>
        高度，宽度未知情况
            <Styled.ContentWrapper>
                <Styled.Remark>
                    flex<br />

                    display: flex;<br />
                    justify-content: center;<br />
                    align-items: center;<br />

                    or <br />

                    align-content: center;<br />
                    flex-wrap: wrap;<br />
                </Styled.Remark>
                <Styled.CenterWrapper className="flex">
                    <div>

                    </div>
                </Styled.CenterWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
                <Styled.Remark>
                    position<br />

                    position: absolute;<br />
                    left: 50%;<br />
                    top: 50%;<br />
                    transform: translate(-50%, -50%);<br /> 坐标轴 右下
                </Styled.Remark>
                <Styled.CenterWrapper className="position">
                    <div>

                    </div>
                </Styled.CenterWrapper>
            </Styled.ContentWrapper>
        </>
    )
}