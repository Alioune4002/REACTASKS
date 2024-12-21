// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
import { useEffect } from 'react';
import { Header } from './header/header';
import { TaskInput } from './taskInput/taskInput';
import { TaskList } from './taskList/taskList';
import { Footer } from './footer/footer';
export const TaskContainer = () => {

  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasksList');
    if (storedTasks) {
      setTasksList(JSON.parse(storedTasks));
    }
  }, []); 

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasksList', JSON.stringify(tasks));
  };

  const addTask = (title) => {
    const newTask = {
        id: tasksList.length ? tasksList[tasksList -1].id + 1 : 1,
        title : title,
        completed: false,
    };
    setTasksList([...tasksList, newTask]);
  };
  const updatedTasks = [...tasksList, newTask]; 
  setTasksList(updatedTasks);
  saveTasksToLocalStorage(updatedTasks)
};

  const editTask = (id, completedValue) => {
      const updatedTasks = tasksList.map((task) => 
      task.id === id ? {...task, completed: completedValue} : task
      );
    setTasksList(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasksList.filter((task) => task.id !== id);
    setTasksList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const incompletedTasks = tasksList.length - completedTasks;
    return { completedTasks, incompletedTasks };
  };
  const { completedTasks, incompletedTasks } = getTaskCounts();


  return(
  <main>
    <Header />
    <TaskInput addTask ={addTask} />
    <TaskList tasksList={tasksList} 
    editTask={editTask} 
    deleteTask = {deleteTask} 
    incompletedTasks = {incompletedTasks}  />
    <Footer completedTasks={completedTasks} />
  </main>
  );
