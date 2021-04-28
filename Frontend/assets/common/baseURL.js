import { Platform } from 'react-native';

let baseURL = '';

{Platform.OS === 'android'
? baseURL = 'http://192.168.1.113:5000/'
: baseURL = 'http://localhost:5000/'
}

export default baseURL;