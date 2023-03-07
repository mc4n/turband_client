export default function make(paramaters, end_point) {
  const makeQueryURL = (ep) => `${this.context.baseURL}/${ep}`;

  let url_ = end_point ? makeQueryURL(end_point) : this.defaultURL;
  if (paramaters && paramaters.length > 0)
    url_ +=
      "?" +
      paramaters
        .filter((value) => value && value[1] && value[1])
        .map(([key, value]) => {
          if (key === "sort" || key === "page" || key === "include")
            return `${key}=${value}`;
          else if (key.startsWith("_"))
            return `${key.substring(1)}=${encodeURIComponent(value)}`;
          else return `filter[${key}]=${encodeURIComponent(value)}`;
        })
        .join("&");

  return url_;
}
