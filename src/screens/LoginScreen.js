import {useContext, useState} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import {login} from '../util/auth';
import {Alert, View} from 'react-native';
import {AuthContext} from '../components/store/auth-context';
import {Text} from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
      // authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication Failed');
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message={'Logging you In...'} />;
  }
  //return <LoadingOverlay message={'Logging you In...'} />;

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
