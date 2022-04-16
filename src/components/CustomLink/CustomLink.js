import { LinkContainer } from "react-router-bootstrap";
import { useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <LinkContainer className={match ? "active-link" : "not-active"} to={to}>
            {children}
        </LinkContainer>
    );
}

export default CustomLink;
