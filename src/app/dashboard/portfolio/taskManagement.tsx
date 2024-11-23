import React from "react";
import { Plus, ChevronRight } from "lucide-react";


export const TaskManagement = () => {
    const tasks = [
      {
        name: 'Apply Fertilizer to Corn',
        assignedTo: 'Bisi Olaide',
        dueDate: '29-Aug-24',
        status: 'Pending'
      },
      {
        name: 'Harvest Wheat',
        assignedTo: 'Micheal John',
        dueDate: '02-Sep-24',
        status: 'In Progress'
      }
    ];
  
    return (
      <div className="w-full mt-6 shadow-md rounded-xl p-8">
        <div className="flex flex-row items-center justify-between mb-4">
          <p className='text-sm text-black font-semibold'>Farm Task</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center px-4 py-2 text-[10px] text-white bg-green-500 rounded-lg">
            Add New Task
              <Plus className="w-4 h-4 mr-2" />
        
            </button>
            <button className="flex border px-4 py-2 rounded-lg items-center font-medium text-gray-600 text-[12px]">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
        <div>
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm ">
                  <th className="py-2 font-thin">Task Name</th>
                  <th className="py-2 font-thin">Assigned To</th>
                  <th className="py-2 font-thin">Due Date</th>
                  <th className="py-2 font-thin">Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-4 text-xs">{task.name}</td>
                    <td className="py-4 text-xs">{task.assignedTo}</td>
                    <td className="py-4 text-xs">{task.dueDate}</td>
                    <td className="py-4 text-xs">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        task.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };