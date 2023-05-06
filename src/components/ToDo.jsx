import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export const ToDo = ({ toDo, completedTask, setUpdateData, deleteTask }) => {
  return (
    <>
   
      {toDo &&
        toDo
          .sort((a, b) =>
            a.id > b.id && a.completedTask - b.completedTask ? 0 : 0
          )
          .map((task, index) => {
            return (
              
              <React.Fragment key={task.id}>
                <div className={`taskBg ${task.status? ""  : "completed" }`}
                style={{
                backgroundColor: task.status?"black":task.color,
                textDecoration: task.status ? "line-through": "",}}>
                  <div >
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="icons">
                    <span
                      onClick={(e) => completedTask(task.id)}
                      title="Completed / Not Completed"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    {task.status ? null : (
                      <span
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                            color:task.color,
                          })
                        }
                        title="Edit"
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}
                    <span onClick={() => deleteTask(task.id)} title="Delete">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};
