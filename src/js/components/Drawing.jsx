import React from 'react'

// eslint-disable-next-line react/prop-types
export const Drawing = ({ drawing, colors }) => {
    return (
        <table cellSpacing="0" className="small">
            <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                {drawing.map((row, y) =>
                    <tr key={y}>
                        {row.map((cell, x) => 
                            <td key={[x, y]} style={{ background: colors[cell] }}></td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    )
}
