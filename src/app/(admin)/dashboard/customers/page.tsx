'use client';
import { Table } from 'react-bootstrap';

export default function DashboardCustomersPage() {
    return (
        <div>
            <h1 className="mb-4">Customers</h1>
            <Table style={{ backgroundColor: '#5c5c5c', color: '#fff', border: '1px solid #444' }}>
                <thead style={{ backgroundColor: '#353535', color: '#fafafa' }}>
                <tr>
                    <th></th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Selected Services</th>
                    <th>Inquiry</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>emailaddress@gmail.com</td>
                    <td>(111) 111-1111</td>
                    <td>Life Insurance</td>
                    <td>Additional details. Here is a message.</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Doe John</td>
                    <td>differentemail@gmail.com</td>
                    <td>(333) 333-3333</td>
                    <td>Health Insurance, Roth Ira</td>
                    <td>Entering additional details and a message. Hello.</td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>Joe Dohn</td>
                    <td>randomemail@gmail.com</td>
                    <td>(777) 777-7777</td>
                    <td>Retirement Planning, Rollover401(k), Setup College Plans</td>
                    <td>This is a random message. This is where the inquiry would go. Entering additional details.</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Adam Sandler</td>
                    <td>sandlersemail@gmail.com</td>
                    <td>(123) 456-7890</td>
                    <td>Roth Ira</td>
                    <td>Entering additional details and a message. Hello.</td>

                </tr>
                <tr>
                    <td>5</td>
                    <td>Stephen A. Smith</td>
                    <td>stephenasmith@espn.com</td>
                    <td>(111) 222-3333</td>
                    <td>Long Term Care</td>
                    <td>Hello, I am entering a message here. Bye !</td>

                </tr>
                <tr>
                    <td>6</td>
                    <td>Mark Walburg</td>
                    <td>markwalburg@gmail.com</td>
                    <td>(828) 348-9814</td>
                    <td>Comprehensive Plan, Traditional Ira</td>
                    <td>Additional details. Here is a message.</td>

                </tr>
                </tbody>
            </Table>

        </div>
    );
}
