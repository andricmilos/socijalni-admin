export default function Table({theadData, tbodyData}) {
    return (
      <table>
          <thead>
             <tr>
              {theadData.map(heading => {
                return <th key={heading}>{heading}</th>
              })}
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
              {tbodyData.map((row, index) => {
                  return <tr key={index}>
                      {theadData.map((key, index) => {
                           return <td key={row[key]}>{row[key]}</td>
                      })}
                    <td><a href="">Obrisi</a></td>
                    <td><a href="">Izmeni</a></td>
                </tr>;
              })}
          </tbody>
      </table>
   );
   }