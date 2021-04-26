import { Platform } from 'react-native';

let baseURL = '';

{Platform.OS === 'android'
? baseURL = 'http://localhost:5000/'
: baseURL = 'http://localhost:5000/'
}

export default baseURL;