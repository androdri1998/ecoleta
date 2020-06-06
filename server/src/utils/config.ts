interface IConfig {
  base_api_url?: string;
}

const config: IConfig = {
  base_api_url: process.env.BASE_API_URL,
};

export default config;
