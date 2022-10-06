import { Component } from "react";

class CategoryInputs extends Component {
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
        <td className='border border-slate-300 text-center'>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="adult"
          value={user.adult}
          onChange={this.handleChange}
          placeholder="Adult"
          type="number"
        />
        </td>
        
        <td className='border border-slate-300 text-center'>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="email"
          value={user.room}
          onChange={this.handleChange}
          placeholder="Room"
          type="number"
        />
        </td>
        
        <td className='border border-slate-300 text-center'>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="phone"
          value={user.extraBed}
          onChange={this.handleChange}
          placeholder="Extra Bed"
          type="number"
        />
        </td>

        <td className='border border-slate-300 text-center'>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="phone"
          value={user.numberOfKids}
          onChange={this.handleChange}
          placeholder="No of Kids"
          type="number"
        />
        </td>
        
        <td className='border border-slate-300 text-center'>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="phone"
          value={user.perKidPrice}
          onChange={this.handleChange}
          placeholder="Per Kid Price"
          type="number"
        />
        </td>

        <td className='border border-slate-300 text-center'>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="phone"
          value={user.normalPrice}
          onChange={this.handleChange}
          placeholder="Normal Price"
          type="number"
        />
        </td>

        <td className='border border-slate-300 text-center'>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="phone"
          value={user.festivalPerKidPrice}
          onChange={this.handleChange}
          placeholder="Festival Kid Price"
          type="number"
        />
        </td>

        <td className='border border-slate-300 text-center'>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="phone"
          value={user.festivalPrice}
          onChange={this.handleChange}
          placeholder="Festival Price"
          type="number"
        />
        </td>

      </>
    );
  }
}

export default CategoryInputs;
