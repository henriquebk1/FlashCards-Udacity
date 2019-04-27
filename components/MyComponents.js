import {View} from 'react-native';
import styled from "styled-components";
import {Button, Paragraph, Title} from "react-native-paper";


export const MyView = styled(View)`
    margin: 4px;
`;

export const MyButton = styled(Button)`
    background-color: ${props => props.backColor || 'green'};
    margin: 4px;
`;

export const SuccessButton = styled(Button)`
    background-color: green;
    color: #fff;
    margin: 4px;
    width: ${props => props.width || '50%'};
`;

export const ErrorButton = styled(Button)`
    background-color: red;
    color: #fff;
    margin: 4px;
    width: ${props => props.width || '50%'};
`;

export const MyTitle = styled(Title)`
    margin: 4px;
    text-align: center;
    font-weight: bold;
`;

export const MyText = styled(Paragraph)`
    margin: 4px;
    text-align: justify;
`;