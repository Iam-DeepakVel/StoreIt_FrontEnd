import React from "react";

class InfoTable extends React.Component
{
    render()
    {
        return(
<table className="table">
    <thead>
      <tr>
        <th className="text-white">Name</th>
        <th className="text-white">City</th>
        <th className="text-white">Age</th>
        <th className="text-white">Edit</th>
        <th className="text-white">Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        this.props.getData.length > 0 ?
        (
          this.props.getData.map(e => 
          <tr key={e._id}>
            <td className="text-white">{e.Name}</td>
            <td className="text-white">{e.Age}</td>
            <td className="text-white">{e.City}</td>
            <td><button className="btn btn-primary "
            onClick={event => {
              this.props.setData(e)
            }}
            >Edit</button></td>
            <td><button className="btn btn-primary"
            onClick={event => {
              this.props.del(e)
            }}
            >Delete</button></td>

          </tr>
          )
        )
        :
        (
          <tr>
            <td className="text-white font-semibold text-2xl">No Data</td>
          </tr>
        )

      }
    </tbody>
  </table>
        )
    }
}
export default InfoTable;