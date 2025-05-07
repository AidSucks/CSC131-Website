'use client';

import {CustomerInquiry} from "@/app/lib/zod-schemas";
import {DataGrid, GridActionsCellItem, GridColDef} from "@mui/x-data-grid";
import {EnvelopeArrowUpFill, TrashFill} from "react-bootstrap-icons";
import {Stack} from "react-bootstrap";
import {removerCustomerInquiry} from "@/app/lib/actions";

export default function CustomersAdminDataGrid(
  {inquiries}: {inquiries: CustomerInquiry[]}
) {
  const columns: GridColDef<CustomerInquiry>[] = [
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
      field: 'servicesRequested',
      type: 'custom',
      headerName: 'Services Requested',
      sortable: false,
      width: 300,
    },
    {
      field: 'message',
      type: 'string',
      headerName: 'Message',
      sortable: false,
      width: 300
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
            icon={<EnvelopeArrowUpFill color={"green"}/>}
            label="Send an email"
            className="textPrimary"
            onClick={() => {}}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<TrashFill color={"red"}/>}
            label="Delete"
            onClick={async () => await removerCustomerInquiry(row.id)}
            color={"inherit"}
          />,
        ];
      }
    }
  ];

  return (
    <Stack direction={"vertical"} gap={2}>
      <h3>Customer Inquiries</h3>
      <DataGrid
        rows={inquiries}
        columns={columns}
        disableColumnResize
        autoPageSize
        showToolbar
        rowCount={10}
        paginationMode={"server"}/>

    </Stack>
  );
}