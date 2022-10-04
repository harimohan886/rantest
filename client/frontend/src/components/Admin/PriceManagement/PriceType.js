import React from 'react'
import DateRange from './DatePicker'

export default function PriceType() {
  return (
    <>
    <DateRange/>
    <div className="tab-content" id="tabs-tabContent">
        <div className="tab-pane fade show active" id="tabs-indian" role="tabpanel" aria-labelledby="tabs-indian-tab">
            <div className="grid grid-cols-6 gap-4">
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 1</label>
                <input type="number" id="adult1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="4000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 2</label>
                <input type="number" id="adult2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="8000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 3</label>
                <input type="number" id="adult3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="12000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 4</label>
                <input type="number" id="adult4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="16000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 5</label>
                <input type="number" id="adult5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="20000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 6</label>
                <input type="number" id="adult6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="24000"/>
            </div>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-2">
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 1</label>
                <input type="number" id="child1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="400"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 2</label>
                <input type="number" id="child2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="800"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 3</label>
                <input type="number" id="child3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="1600"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 4</label>
                <input type="number" id="child4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="1600"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 5</label>
                <input type="number" id="child5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="2000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 6</label>
                <input type="number" id="child6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="1200"/>
            </div>
            </div>
            <div className="mt-2">
            <button type="button" className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Update</button>
            </div>
        </div>

        <div className="tab-pane fade" id="tabs-foreigner" role="tabpanel" aria-labelledby="tabs-foreigner-tab">
            <div className="grid grid-cols-6 gap-4">
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 1</label>
                <input type="number" id="adult1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="4000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 2</label>
                <input type="number" id="adult2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="8000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 3</label>
                <input type="number" id="adult3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="12000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 4</label>
                <input type="number" id="adult4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="16000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 5</label>
                <input type="number" id="adult5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="20000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Adult 6</label>
                <input type="number" id="adult6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="24000"/>
            </div>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-2">
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 1</label>
                <input type="number" id="child1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="400"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 2</label>
                <input type="number" id="child2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="800"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 3</label>
                <input type="number" id="child3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="1600"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 4</label>
                <input type="number" id="child4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="1600"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 5</label>
                <input type="number" id="child5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="2000"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Child 6</label>
                <input type="number" id="child6" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" defaultValue="1200"/>
            </div>
            </div>
            <div className="mt-2">
            <button type="button" className="text-white bg-hotel-maroon font-medium rounded text-sm max-w-xs sm:w-auto px-5 py-2.5 text-center">Update</button>
            </div>
        </div>
    </div>
    </>
  )
}
