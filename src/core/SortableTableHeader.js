import { Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import {
  BiSortDown as SortAscIcon,
  BiSortUp as SortDescIcon,
} from "react-icons/bi";

export default function SortableTableHeader({
  sortStr,
  setSortStr,
  headerValues,
  indexed = true,
}) {
  let [sort, desc] = ["", sortStr.startsWith("-")];

  if (sortStr?.trim() !== "") {
    if (desc) sort = sortStr.substring(1);
    else sort = sortStr;
  }

  return (
    <thead>
      <tr>
        {indexed && (
          <th>
            <Form.Text>#</Form.Text>
          </th>
        )}

        {headerValues.map((item) => {
          const fmtID = item.fmtID;
          const columnName = item.columnName;

          return (
            <th
              key={fmtID}
              style={
                columnName && {
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                  userSelect: "none",
                }
              }
            >
              <Form.Text
                onClick={
                  columnName &&
                  (() => {
                    const prefix = sort === columnName && desc ? "" : "-";
                    setSortStr(prefix + columnName);
                  })
                }
              >
                <FormattedMessage id={fmtID} />
                {sort === columnName &&
                  (desc ? (
                    <>
                      {" "}
                      <SortDescIcon />
                    </>
                  ) : (
                    <>
                      {" "}
                      <SortAscIcon />
                    </>
                  ))}
              </Form.Text>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
