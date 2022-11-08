function ulepsaj(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1)).replaceAll("_"," ");
}

function ulepsajDatum(string,key) {
  if (!key.includes("dat"))
  {
    return string;
  }
  var novi=new Date(string);
  return novi.toDateString();
}

export default function Table({theadData, tbodyData}) {
    return (
      <table id="tabela">
          <thead>
             <tr>
              {theadData.map(heading => {
                return <th key={heading}>{ulepsaj(heading)}</th>
              })}
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
              {tbodyData.map((row, index) => {
                  return <tr key={index}>
                      {theadData.map((key, index) => {
                           return <td key={row[key]}>{ulepsajDatum(row[key],key)}</td>
                      })}
                    <td><a href="">Obrisi</a></td>
                    <td><a href="">Izmeni</a></td>
                </tr>;
              })}
          </tbody>
      </table>
   );
   }