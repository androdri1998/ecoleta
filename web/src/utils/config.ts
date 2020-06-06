interface IConfig {
  base_api_url?: string;
}

const config: IConfig = {
  base_api_url: process.env.REACT_APP_BASE_API_URL,
};

export default config;
