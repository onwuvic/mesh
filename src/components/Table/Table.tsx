import React from 'react';
import { usePagination, useTable } from 'react-table'

const Table = ({ columns, data, linkToPage}: any) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 0, pageSize: 20 },
        },
        usePagination
      )

    return (
        <>
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
                        page.map((row: any)=> {
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

            <div className="pagination">
                
                <span> Go to page:{' '}
                    <input
                        className="input is-small"
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}

                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>

                <div className="select">
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                        >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                <button 
                    className="pagination-previous button" 
                    onClick={() => previousPage()} 
                    disabled={!canPreviousPage}>Previous
                </button>
                <button 
                    onClick={() => nextPage()} 
                    disabled={!canNextPage} 
                    className="pagination-next button">Next page
                </button>
                <ul className="pagination-list">
                    <li>
                        <button 
                            onClick={() => gotoPage(0)} 
                            disabled={!canPreviousPage} 
                            className={`pagination-link button ${pageIndex === 0 ? 'is-primary' : '' }`} 
                            aria-label="Goto page 1">1
                        </button>
                    </li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li>
                        <button
                            onClick={() => gotoPage((Math.round(pageCount/2) - 1) - 1)} 
                            className={`pagination-link button ${pageIndex === ((Math.round(pageCount/2) - 1) - 1) ? 'is-primary' : '' }`}
                            aria-label="Goto page before middle">{ Math.round(pageCount/2) - 1 }
                        </button>
                    </li>
                    <li>
                        <button 
                            onClick={() => gotoPage((Math.round(pageCount/2)) - 1)} 
                            className={`pagination-link button ${pageIndex === ((Math.round(pageCount/2)) - 1) ? 'is-primary' : '' }`}
                            aria-label="Page middle" 
                            aria-current="page">{ Math.round(pageCount/2)}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => gotoPage((Math.round(pageCount/2) + 1) - 1)} 
                            className={`pagination-link button ${pageIndex === ((Math.round(pageCount/2) + 1) - 1) ? 'is-primary' : '' }`}
                            aria-label="Goto page after middle">{ Math.round(pageCount/2) + 1 }
                        </button>
                    </li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li>
                        <button 
                            onClick={() => gotoPage(pageCount - 1)} 
                            disabled={!canNextPage} 
                            className={`pagination-link button ${pageIndex === (pageCount - 1) ? 'is-primary' : '' }`}
                            aria-label="Goto last page">{ pageCount }
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Table;
