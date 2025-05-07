'use client';

import {DataGrid, GridActionsCellItem, GridColDef, GridValueFormatter} from "@mui/x-data-grid";
import {Stack} from "react-bootstrap";
import {CustomerAppointment} from "@/app/lib/zod-schemas";
import dayjs from "dayjs";
import {PencilFill, TrashFill} from "react-bootstrap-icons";

export default function AppointmentsAdminDataGrid(
  {appointments}: {appointments: CustomerAppointment[]}
) {

  const dateFormatter: GridValueFormatter<any, any, any, Date> =
    (value) => dayjs(value).format("MMMM DD h:mm A");

  const columns: GridColDef<CustomerAppointment>[] = [
    {
      field: 'fullName',
      headerName: 'Full Name',
      width: 150,
    },
    {
      field: 'contactEmail',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'contactPhone',
      headerName: 'Phone',
      type: 'string',
      width: 150,
      sortable: false
    },
    {
      field: 'appointmentStart',
      type: 'dateTime',
      headerName: 'Start',
      sortable: true,
      width: 150,
      valueFormatter: dateFormatter
    },
    {
      field: 'appointmentEnd',
      type: 'dateTime',
      headerName: 'End',
      sortable: true,
      width: 150,
      valueFormatter: dateFormatter
    },
    {
      field: 'submittedDate',
      type: 'dateTime',
      headerName: 'Submitted',
      sortable: true,
      width: 150,
      valueFormatter: dateFormatter
    },
    {
      field: 'message',
      type: 'string',
      headerName: 'Message',
      sortable: false,
      width: 150
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      hideable: false,
      getActions: ({id}) => {

        return [
          <GridActionsCellItem
            icon={<PencilFill/>}
            label="Edit"
            className="textPrimary"
            onClick={() => {
            }}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<TrashFill color={"red"}/>}
            label="Delete"
            onClick={() => {}}
            color={"inherit"}
          />,
        ];
      }
    }
  ];

  return (
    <Stack direction={"vertical"} gap={2}>
      <h3>Appointments</h3>
      <DataGrid
        rows={appointments}
        columns={columns}
        disableColumnResize
        autoPageSize
        showToolbar
        rowCount={10}
        paginationMode={"server"}/>

    </Stack>
  );
}