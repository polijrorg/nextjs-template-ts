// import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

export const MainBody: React.FC = () => {
    const Router = useRouter();
    return (
        <S.MainDiv>
            <S.Div1>
                <S.Div11>
                    <S.TextDiv1>
                        Enconte o advogado certo, online e com garantia
                    </S.TextDiv1>
                    <S.ButtonDiv1
                        onClick={() => {
                            Router.push('/Advogados');
                        }}
                    >
                        Contrate agora!
                    </S.ButtonDiv1>
                </S.Div11>
                <S.Div12>
                    <S.ImgDiv1 src="/Downloads/Ellipse 9.png" />
                </S.Div12>
            </S.Div1>
            <S.Div2>
                <S.TextDiv2>Qual a sua demanda?</S.TextDiv2>
                <S.Div21>
                    <S.ButtonDiv2>
                        <S.ButtonDiv2Img src="/Downloads/Group3.png" />
                        <S.ButtonDiv2Text>Família</S.ButtonDiv2Text>
                    </S.ButtonDiv2>
                    <S.ButtonDiv2>
                        <S.ButtonDiv2Img src="/Downloads/Group3.png" />
                        <S.ButtonDiv2Text>Família</S.ButtonDiv2Text>
                    </S.ButtonDiv2>
                    <S.ButtonDiv2>
                        <S.ButtonDiv2Img src="/Downloads/Group3.png" />
                        <S.ButtonDiv2Text>Família</S.ButtonDiv2Text>
                    </S.ButtonDiv2>
                    <S.ButtonDiv2>
                        <S.ButtonDiv2Img src="/Downloads/Group3.png" />
                        <S.ButtonDiv2Text>Família</S.ButtonDiv2Text>
                    </S.ButtonDiv2>
                    <S.ButtonDiv2>
                        <S.ButtonDiv2Img src="/Downloads/Group3.png" />
                        <S.ButtonDiv2Text>Família</S.ButtonDiv2Text>
                    </S.ButtonDiv2>
                    <S.ButtonDiv2>
                        <S.ButtonDiv2Img src="/Downloads/Group3.png" />
                        <S.ButtonDiv2Text>Família</S.ButtonDiv2Text>
                    </S.ButtonDiv2>
                    <S.ButtonDiv2>
                        <S.ButtonDiv2Img src="/Downloads/Group3.png" />
                        <S.ButtonDiv2Text>Família</S.ButtonDiv2Text>
                    </S.ButtonDiv2>
                </S.Div21>
            </S.Div2>
            <S.Div3>
                <S.TextDiv3>Enconte o advogado certo para você</S.TextDiv3>
                <S.Div31>
                    <S.ButtonDiv3>
                        <S.ButtonDiv3Img src="/Downloads/Frame 242.png" />
                    </S.ButtonDiv3>
                    <S.ButtonDiv3>
                        <S.ButtonDiv3Img src="/Downloads/Frame 242.png" />
                    </S.ButtonDiv3>
                    <S.ButtonDiv3>
                        <S.ButtonDiv3Img src="/Downloads/Frame 242.png" />
                    </S.ButtonDiv3>
                    <S.ButtonDiv3>
                        <S.ButtonDiv3Img src="/Downloads/Frame 242.png" />
                    </S.ButtonDiv3>
                    <S.FinalButtonDiv3 />
                </S.Div31>
            </S.Div3>
            <S.Div4 />
            <S.Div5>
                <S.TextDiv5>Perguntas Frequentes</S.TextDiv5>
                <S.Div51>
                    <S.ButtonDiv5>Quem é a Lide?</S.ButtonDiv5>
                    <S.ButtonDiv5>O que a Lide faz?</S.ButtonDiv5>
                    <S.ButtonDiv5>Como a Lide funciona?</S.ButtonDiv5>
                    <S.ButtonDiv5>Quais são os produtos da Lide?</S.ButtonDiv5>
                    <S.ButtonDiv5>Como investir na Lide?</S.ButtonDiv5>
                    <S.ButtonDiv5>Quais são os riscos da Lide?</S.ButtonDiv5>
                    <S.ButtonDiv5>
                        Quais são as vantagens de investir na Lide?
                    </S.ButtonDiv5>
                    <S.ButtonDiv5>
                        Como entrar em contato com a Lide?
                    </S.ButtonDiv5>
                    <S.ButtonDiv5>
                        Qual é o prazo de pagamento dos empréstimos?
                    </S.ButtonDiv5>
                </S.Div51>
            </S.Div5>
            <S.Div6>
                <S.TextDiv6>Conheça os nossos conteúdos</S.TextDiv6>
                <S.Div61>
                    <S.ButtonDiv6>
                        <S.ButtonDiv6Img src="/Downloads/Frame 643.png" />
                        <S.ButtonDiv6Div>
                            <S.ButtonDiv6DivType>
                                Direito Familiar
                            </S.ButtonDiv6DivType>
                            <S.ButtonDiv6DivTitle>
                                Dicas processuais: Principais conselhos para
                                seguir um processo
                            </S.ButtonDiv6DivTitle>
                            <S.ButtonDiv6DivLegenda>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur pulvinar lorem sed
                                nulla pulvinar, tristique.
                            </S.ButtonDiv6DivLegenda>
                        </S.ButtonDiv6Div>
                    </S.ButtonDiv6>
                    <S.ButtonDiv6>
                        <S.ButtonDiv6Img src="/Downloads/Frame 643.png" />
                        <S.ButtonDiv6Div>
                            <S.ButtonDiv6DivType>
                                Direito Familiar
                            </S.ButtonDiv6DivType>
                            <S.ButtonDiv6DivTitle>
                                Dicas processuais: Principais conselhos para
                                seguir um processo
                            </S.ButtonDiv6DivTitle>
                            <S.ButtonDiv6DivLegenda>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur pulvinar lorem sed
                                nulla pulvinar, tristique.
                            </S.ButtonDiv6DivLegenda>
                        </S.ButtonDiv6Div>
                    </S.ButtonDiv6>
                    <S.ButtonDiv6>
                        <S.ButtonDiv6Img src="/Downloads/Frame 643.png" />
                        <S.ButtonDiv6Div>
                            <S.ButtonDiv6DivType>
                                Direito Familiar
                            </S.ButtonDiv6DivType>
                            <S.ButtonDiv6DivTitle>
                                Dicas processuais: Principais conselhos para
                                seguir um processo
                            </S.ButtonDiv6DivTitle>
                            <S.ButtonDiv6DivLegenda>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur pulvinar lorem sed
                                nulla pulvinar, tristique.
                            </S.ButtonDiv6DivLegenda>
                        </S.ButtonDiv6Div>
                    </S.ButtonDiv6>
                </S.Div61>
            </S.Div6>
        </S.MainDiv>
    );
};

export default MainBody;
