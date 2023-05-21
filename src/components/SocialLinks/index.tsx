import { IconLink, SocialLinksWrapper } from './SocialLinks.ts';
import {
    RiGithubFill, RiLinkedinBoxFill, RiTelegramFill
} from 'react-icons/ri';

const SocialLinks = () => {
    return (
        <SocialLinksWrapper>
            <IconLink href="https://github.com/DenisKulik" target="_blank">
                <RiGithubFill />
            </IconLink>
            <IconLink
                href="https://www.linkedin.com/in/denis-kulik"
                target="_blank"
            >
                <RiLinkedinBoxFill />
            </IconLink>
            <IconLink href="https://t.me/kulikdp" target="_blank">
                <RiTelegramFill />
            </IconLink>
        </SocialLinksWrapper>
    );
};

export default SocialLinks;