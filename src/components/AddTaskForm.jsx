import { ColorRadioButtons } from "./ColorPicker";
export const AddTaskForm = ({ newTask, setNewTask, addTask, setColor }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg inputText"
          />
        </div>
        <ColorRadioButtons setSelectedColor={setColor} />
        <div className="col-auto">
          
          <button onClick={addTask} className="btn btn-lg btn-success addBtn">
            Add New Task
          </button>
          
        </div>
      </div>
      <br></br>
    </>
  );
};
