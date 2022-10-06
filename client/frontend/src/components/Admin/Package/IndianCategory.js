import React, { Component } from 'react'
import { TreePicker } from 'rsuite';
import CategoryInputs from './CategoryInputs';

export default class IndianCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [
            {
              key: Date.now(),
              adult: "",
              room: "",
              extraBed: "",
              numberOfKids: "",
              perKidPrice: "",
              normalPrice: "",
              festivalPerKidPrice: "",
              festivalPrice: ""
            }
          ]
        };
      }
    
      onChange = (inputUser) => {
        this.setState((prevState) => {
          const newUsers = prevState.users.map((element) => {
            if (element.key === inputUser.key) return inputUser;
            return element;
          });
          return { users: newUsers };
        });
      };
    
      addElement = () => {
        const { adult, room, extraBed, numberOfKids, perKidPrice, normalPrice, festivalPerKidPrice, festivalPrice } = this.state;
        this.setState((prevState) => ({
          users: prevState.users.concat({
            key: Date.now(),
            adult,
            room,
            extraBed,
            numberOfKids,
            perKidPrice,
            normalPrice,
            festivalPerKidPrice,
            festivalPrice
          })
        }));
      };
    
      removeElement = (id) => {
        this.setState((prevState) => ({
          users: prevState.users.filter((user) => user.key !== id)
        }));
      };
  render() {
    const { users } = this.state;
    return (
        <div className='indianForm'>
            <h5 className='mt-8 text-black'>Category Options (For Indian)</h5> &nbsp; 
            <button type="button" onClick={this.addElement} className='text-white float-right bg-success font-medium rounded px-5 py-2.5 text-center mb-4'>Add Slot</button>
            <table className='table bg-white border border-slate-300 mt-2 indianCategory'>
                <thead>
                    <tr>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Adult</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Room</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Extra Bed</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>No of Kids</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Per Kid Price</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Normal Price</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Festival Per Kid Price</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Festival Price</th>
                        <th className='border border-slate-300 text-center bg-hotel-maroon text-white'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.key}>
                            <CategoryInputs
                                key={user.key}
                                value={user}
                                onChange={(inputUser) => this.onChange(inputUser)}
                            />
                            <td className='border border-slate-300 text-center'>
                                <button type="button" onClick={() => this.removeElement(user.key)} disabled={users.length <= 1} className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm p-2.5 text-center items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
  }
}
