import React from 'react';
import { IconLink, SocialLinksWrapper } from './SocialLinks.ts';
import { useTheme } from 'styled-components';
import {
    RiGithubFill, RiLinkedinBoxFill, RiTelegramFill
} from 'react-icons/ri';
import Icon from '../Icon';

type SocialLinksPropsType = {
    iconSize: string
}

const SocialLinks: React.FC<SocialLinksPropsType> = ({ iconSize }) => {
    const theme = useTheme();

    return (
        <SocialLinksWrapper>
            <IconLink href="https://github.com/DenisKulik" target="_blank">
                <Icon
                    icon={RiGithubFill}
                    size={iconSize}
                    color={theme?.colors.primaryLight}
                />
            </IconLink>
            <IconLink
                href="https://www.linkedin.com/in/denis-kulik"
                target="_blank"
            >
                <Icon
                    icon={RiLinkedinBoxFill}
                    size={iconSize}
                    color={theme?.colors.primaryLight}
                />
            </IconLink>
            <IconLink href="https://t.me/kulikdp" target="_blank">
                <Icon
                    icon={RiTelegramFill}
                    size={iconSize}
                    color={theme?.colors.primaryLight}
                />
            </IconLink>
        </SocialLinksWrapper>
    );
};

export default SocialLinks;