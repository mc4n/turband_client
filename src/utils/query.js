export default function makeQuery(end_point, paramaters) {
  if (!paramaters) return end_point;

  let url_ = end_point;

  if (!Array.isArray(paramaters)) paramaters = Object.entries(paramaters);

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
