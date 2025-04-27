import {ReactElement} from "react";
import {Table} from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

export function AdminDataTable(
  {headers, data}: {headers: string[], data: (string | number | ReactElement[] | null)[][]}
) {

  const tableSize = headers.length;

  data = data.map(
    (entry) => {
      if(entry.length <= tableSize) return entry;

      return entry.slice(0, tableSize);
    }
  );

  return(
    <div>
      <Table bordered border={2}>
        <thead>
        <tr className={"text-center"}>
          {headers.map(
            (header, index) => <th key={index}>{header}</th>
          )}
        </tr>
        </thead>

        <tbody>
          {data.map(
            ((entry, index) => {
              return (
                <tr key={index}>
                  {entry.map((value, index) => {

                    if(Array.isArray(value)) return (
                      <td valign={"middle"} align={"center"} key={index}>
                        <Stack direction={"horizontal"} gap={2} className={"justify-content-start"}>
                          {value.map((b, index) => <div key={index}>{b}</div>)}
                        </Stack>
                      </td>
                    );

                    return (
                      <td valign={"middle"} align={"center"} key={index}>{value}</td>
                    );
                  }
                  )}
                </tr>
              )}
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}