import { Component } from "react";

class TravellerInputs extends Component {
  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.props.onChange({
      ...this.props.value,
      [name]: value
    });
  };

  render() {
    const { value: user } = this.props;
    return (
      <>
        <td className='border border-slate-300 text-center blNone'>
        <input
          className="form-control"
          name="fullName"
          value={user.fullName}
          onChange={this.handleChange}
          placeholder="Full Name"
          type="text"
        />
        </td>
        <td className='border border-slate-300 text-center'>
            <select className="form-control" name="gender" value={user.gender} onChange={this.handleChange}>
                <option>Please Select</option>
                <option value = "Male">Male</option>
                <option value = "Female">Female</option>
            </select>
        </td>
        <td className='border border-slate-300 text-center'>
            <select className="form-control" name="nationality" value={user.nationality} onChange={this.handleChange}>
                <option>Please Select</option>
                <option value = "Indian">Indian</option>
                <option value = "Foreigner">Foreigner</option>
            </select>
        </td>
        <td className='border border-slate-300 text-center'>
            <select className="form-control" name="idProof" value={user.idProof} onChange={this.handleChange}>
                <option>Please Select</option>
                <option value = "Aadhar Card">Aadhar Card</option>
                <option value = "Voter Id">Voter ID</option>
                <option value = "Driving Licence">Driving License</option>
                <option value = "Passport">Passport</option>
            </select>
        </td>
        <td className='border border-slate-300 text-center brNone'>
            <input
            className="form-control"
            name="idNumber"
            value={user.idNumber}
            onChange={this.handleChange}
            placeholder="ID Number"
            type="text"
            />
        </td>
      </>
    );
  }
}

export default TravellerInputs;