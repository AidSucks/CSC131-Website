'use client';

import {AuthorizedUser} from "@/app/lib/zod-schemas";
import {DataGrid, GridActionsCellItem, GridColDef} from "@mui/x-data-grid";
import {TrashFill} from "react-bootstrap-icons";
import {removeAuthorizedUser} from "@/app/lib/actions";

export default function AuthorizedUserAdminDataGrid(
  {authorizedUsers}: {authorizedUsers: AuthorizedUser[]}
) {
  const columns: GridColDef<AuthorizedUser>[] = [
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'role',
      headerName: 'Role',
      type: 'string',
      width: 150,
      sortable: false
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      hideable: false,
      getActions: ({row}) => {

        return [
          <GridActionsCellItem
            icon={<TrashFill color={"red"}/>}
            label="Delete"
            onClick={async () => await removeAuthorizedUser(row.email)}
            color={"inherit"}
          />,
        ];
      }
    }
  ];

  const getRowId = (row: AuthorizedUser) => {
    return row.email;
  }

  return (
    <div className={"d-flex h-50"}>
      <DataGrid
        rows={authorizedUsers}
        getRowId={getRowId}
        columns={columns}
        disableColumnResize
        autoPageSize
        showToolbar
        rowCount={10}
        paginationMode={"server"}/>
    </div>
  );
}