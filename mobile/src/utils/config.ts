import { REACT_APP_BASE_API_URL } from "react-native-dotenv";

interface IConfig {
  base_api_url?: string;
}

const config: IConfig = {
  base_api_url: REACT_APP_BASE_API_URL,
};

export default config;
