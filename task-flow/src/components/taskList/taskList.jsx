
// Ce composant est utilisé pour afficher la liste des tâches.
import React from 'react';

import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";
export const TaskList = ({
  incompletedTasks,
  tasksList,
  editTask,
  deleteTask,
}) => {
  const taskList = tasksList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />  
  ));

  if  (taskList && taskList.length > 0) {
    
    return (
      <div className="box">
            <h2 className={styles.title}>
              {incompletedTasks > 0 && (
                  <>📋IL te reste encore  <span className="important">{incompletedTasks}</span>  tâches à accomplir !</>
              )}

              {incompletedTasks === 0 && (
                  <>👏 Bravo, Tu as terminé toutes tes tâches ! </>
              )}
            </h2>
            
              {tasksList && tasksList.length > 0 && (
                <ul className={styles.container}>
                  {taskList}
                </ul>
              )}
          </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.epmtyState}>
        👋 Salut, Tu n'as aucune tâche actuellement ! Profite bien de ton temps libre !
      </h2>
    </div>
          
  ) ;
};
