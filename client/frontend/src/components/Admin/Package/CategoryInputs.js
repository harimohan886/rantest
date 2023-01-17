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
            name="price"
            value={user.price}
            onChange={this.handleChange}
            type="number"
          />
        </td>

        <td className='border border-slate-300 text-center'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="extra_adult_price"
            value={user.extra_adult_price}
            onChange={this.handleChange}
            type="number"
          />
        </td>

        <td className='border border-slate-300 text-center'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="extra_child_price"
            value={user.extra_child_price}
            onChange={this.handleChange}
            type="number"
          />
        </td>

        <td className='border border-slate-300 text-center'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="extra_bed_price"
            value={user.extra_bed_price}
            onChange={this.handleChange}
            type="number"
          />
        </td>

        <td className='border border-slate-300 text-center'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="festival_price"
            value={user.festival_price}
            onChange={this.handleChange}
            type="number"
          />
        </td>

        <td className='border border-slate-300 text-center'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="festival_kid"
            value={user.festival_kid}
            onChange={this.handleChange}
            type="number"
          />
        </td>

        <td className='border border-slate-300 text-center'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="safari_price"
            value={user.safari_price}
            onChange={this.handleChange}
            type="number"
          />
        </td>

        {/* <td className='border border-slate-300 text-center'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="festival_kid"
            value={user.festival_kid}
            onChange={this.handleChange}
            placeholder="Festival Kid Price"
            type="number"
          />
        </td>

        <td className='border border-slate-300 text-center'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="festival_price"
            value={user.festival_price}
            onChange={this.handleChange}
            placeholder="Festival Price"
            type="number"
          />
        </td> */}

      </>
    );
  }
}

export default CategoryInputs;
