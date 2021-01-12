import React from 'react';
import { useTable } from 'react-table'

const Table = ({ columns, data, linkToPage}: any) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <table className="table is-fullwidth is-hoverable is-striped u-margin-top" { ...getTableProps() }>
            <thead>
                { // Loop over the header rows
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {   // Render the header
                                            column.render('Header')
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row: any)=> {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr className="is-clickable" {...row.getRowProps()} onClick={() => { linkToPage(row.original.id)}}>
                                {
                                    row.cells.map((cell: any) => {
                                        
                                        return (
                                            <td {...cell.getCellProps()}>
                                              {// Render the cell contents
                                                cell.render('Cell')
                                              }
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;
