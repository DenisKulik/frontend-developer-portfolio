import React from 'react';
import { IconType } from 'react-icons';
import Icon from '../Icon';
import {
    Description, InfoBody, Link, StyledInfoItem, Title
} from './InfoItemStyles.ts';

type InfoItemPropsType = {
    title: string
    icon: IconType
    size: string
    color: string
    description?: string
    linkType?: string
    linkText?: string
}

const InfoItem: React.FC<InfoItemPropsType> = (props) => {
    const { title, icon, size, color, ...restProps } = props;

    return (
        <StyledInfoItem>
            <Icon icon={icon} size={size} color={color} />
            <InfoBody>
                <Title>{title}</Title>
                {
                    restProps.linkType ? (
                        <Link
                            href={`${restProps.linkType}:${restProps.linkText}`}>
                            {restProps.linkText}
                        </Link>
                    ) : (
                        <Description>{restProps.description}</Description>
                    )
                }
            </InfoBody>
        </StyledInfoItem>
    );
};

export default InfoItem;