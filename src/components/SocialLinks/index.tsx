import { IconLink, SocialLinksWrapper } from './SocialLinks.ts';
import { useTheme } from 'styled-components';
import {
    RiGithubFill, RiLinkedinBoxFill, RiTelegramFill
} from 'react-icons/ri';
import Icon from '../Icon';

const SocialLinks = () => {
    const theme = useTheme();

    return (
        <SocialLinksWrapper>
            <IconLink href="https://github.com/DenisKulik" target="_blank">
                <Icon
                    icon={RiGithubFill}
                    size="2.2rem"
                    color={theme?.colors.primaryLight}
                />
            </IconLink>
            <IconLink
                href="https://www.linkedin.com/in/denis-kulik"
                target="_blank"
            >
                <Icon
                    icon={RiLinkedinBoxFill}
                    size="2.2rem"
                    color={theme?.colors.primaryLight}
                />
            </IconLink>
            <IconLink href="https://t.me/kulikdp" target="_blank">
                <Icon
                    icon={RiTelegramFill}
                    size="2.2rem"
                    color={theme?.colors.primaryLight}
                />
            </IconLink>
        </SocialLinksWrapper>
    );
};

export default SocialLinks;