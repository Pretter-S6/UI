import { GoogleLogin } from 'react-google-login'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login(){

    const onSucces = (res) => {
        console.log("Succes" +res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Failed" +res.profileObj);
    }

    return(
        <div id="signInButton">
            <GoogleLogin>
                clientId={clientId}
                buttonText="Google Login"
                onSucces={onSucces}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn=
            </GoogleLogin>
        </div>
    )
}