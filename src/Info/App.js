import React from "react";
import InfoForm from "./form";
import InfoTable from "./table";
import axios from "axios";
import bg from "../assets/bg.jpg";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      editData: [],
    };
  }

  create = (data) => {
    if (!data.isEdit) {
      axios.post("http://localhost:5000/info", data).then((res) => {
        this.getAll();
      });
    } else {
      axios.put("http://localhost:5000/info/update", data).then((res) => {
        this.getAll();
      });
    }
  };

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios.get("http://localhost:5000/info").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  update = (data) => {
    console.log(data);
    this.setState({
      editData: data,
    });
  };

  del = (data) => {
    var option = window.confirm(`Are you sure want to Delete`);
    if (option) {
      axios.delete(`http://localhost:5000/info/del/${data._id}`).then((res) => {
        console.log(res);
        this.getAll();
      });
    }
  };

  render() {
    return (
        <div className="w-full h-screen">
        <Header/>
        <img src={bg} alt="Background" className="relative w-full h-full object-cover" />
        <div className="absolute top-0 w-full h-auto justify-evenly flex flex-col md:flex-row pt-32">
          <div>
            <h1 className="text-4xl mb-6 font-Raleway font-bold  text-red-400">Enter Details</h1>
            <InfoForm myData={this.create} setForm={this.state.editData} />
          </div>

          <div>
          <h1 className="text-4xl mb-6 font-Raleway font-bold  text-red-400">Your Details</h1>
            <InfoTable
              getData={this.state.data}
              setData={this.update}
              del={this.del}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
