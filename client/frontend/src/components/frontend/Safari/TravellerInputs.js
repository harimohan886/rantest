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
                <option>Male</option>
                <option>Female</option>
            </select>
        </td>
        <td className='border border-slate-300 text-center'>
            <select className="form-control" name="nationality" value={user.nationality} onChange={this.handleChange}>
                <option>Please Select</option>
                <option>Indian</option>
                <option>Foreigner</option>
            </select>
        </td>
        <td className='border border-slate-300 text-center'>
            <select className="form-control" name="idProof" value={user.idProof} onChange={this.handleChange}>
                <option>Please Select</option>
                <option>Aadhar Card</option>
                <option>Voter ID</option>
                <option>Driving License</option>
                <option>Passport</option>
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