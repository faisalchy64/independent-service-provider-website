const { Container } = require("react-bootstrap");

function Blogs() {
    return (
        <Container className="my-5">
            <h1>Difference between Authorization and Authentication</h1>
            <p>Authentication means verifying a person.</p>
            <ul>
                <li>Determines whether users are who they claim to be</li>
                <li>
                    Challenges the user to validate credentials (for example,
                    through passwords, answers to security questions, or facial
                    recognition)
                </li>
                <li>Usually done before authorization</li>
            </ul>

            <p>
                Authorization is the process of verifying what a person has
                access to.
            </p>
            <ul>
                <li>Determines what users can and cannot access</li>
                <li>
                    Verifies whether access is allowed through policies and
                    rules
                </li>
                <li>Usually done after successful authentication</li>
            </ul>

            <h1>
                Why are you using firebase? What other options do you have to
                implement authentication?
            </h1>
            <p>
                Its easy to use. Firebase is a cloud computing system. Its own
                by tech giant google. We can implement firebase authentication
                system in our app or website easily.
            </p>
            <p>
                There are several options to implement authentication. They are
                supabase, auth0, microsoft azure, amazon web services etc.
            </p>

            <h1>
                What other services does firebase provide other than
                authentication?
            </h1>
            <p>Firebase provides many services.</p>
            <ul>
                <li>Realtime Database</li>
                <li>Remote Config</li>
                <li>Firebase Machine Learning</li>
                <li>Cloud Function</li>
                <li>Cloud Messaging</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
            </ul>
        </Container>
    );
}

export default Blogs;
