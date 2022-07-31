import ky from "ky";
import type { Options } from "ky";

export const apiClient = createHttpClient({
  prefixUrl: getApiPrefixUrl(),
  retry: 0,
});

type HTTPMethod = "get" | "post" | "put" | "patch" | "delete" | "head";

export function createHttpClient(options: Options) {
  const instance = ky.create(options);

  function request(method: HTTPMethod) {
    return async <ResponseType>(
      url: Parameters<typeof instance>[0],
      options: Omit<Options, "method"> = {}
    ) => {
      const response = instance(url, {
        method: method,
        ...options,
      });

      return response.json<ResponseType>();
    };
  }

  return {
    instance,
    get: request("get"),
    post: request("post"),
    put: request("put"),
    patch: request("patch"),
    delete: request("delete"),
    head: request("head"),
  };
}

function getApiPrefixUrl() {
  const isLive = process.env.NODE_ENV === "production";

  return isLive
    ? "https://solidw-github-io-server.herokuapp.com"
    : "http://localhost:8080";
}
