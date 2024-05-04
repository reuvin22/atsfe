import React, { useContext } from 'react'
import { TableContext } from '../utils/context'

function Table() {
    const context = useContext(TableContext)
  return (
    <div>
        <table>
            {context?.tableHeader((tblHeader, tblHeaderIndex) => (
                <tr key={tblHeaderIndex}>
                    {tblHeader}
                </tr>
            ))}
            <tbody>
                {context?.tableData((tblData) => (
                    <tr key={tblData.id}>
                        {tblData}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table