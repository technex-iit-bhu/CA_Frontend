import React, { useState, useEffect } from 'react';
import styles from './TaskList.module.css';
import styless from '../../styles/adminPage.module.css';
type Task = {
  id: number;
  title: string;
  description: string;
  points: number;
};
const BACKEND_URL = 'http://localhost:8000/'; //TODO: move to .env
function TaskList({ token }: { token: string | null }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(BACKEND_URL + 'tasks/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTasks([...data]); //handles the case when data is null
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleRefresh = () => {
    fetchTasks();
  };

  return (
    <div>
        <h2>Click on update button after making changes to a task.</h2>
      <table>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>Points</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleRefresh={handleRefresh}
            ></TaskItem>
          ))}
          {tasks.length === 0 && !loading && (
            <tr>
              <td colSpan={5}>No tasks found. Try logging in again.</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={handleRefresh} className={styless.button}>
        {loading ? 'Loading...' : 'Refresh'}
      </button>
    </div>
  );
}

function TaskItem({
  task,
  handleRefresh,
}: {
  task: Task;
  handleRefresh: Function;
}) {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [points, setPoints] = useState<number>(task.points);

  let edited=title!==task.title || description!==task.description || points!==task.points;

  function handleDeleteTask(id: number) {
    //todo make fetch request
    handleRefresh();
  }

  function handleUpdateTask(){
    //todo make fetch request
    handleRefresh();
  }

  return (
    <tr key={task.id}>
      <td className={styles.td}>{task.id}</td>
      <input
        className={styles.td}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <td className={styles.td}>
        <textarea
          className={styles.textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </td>
      <input
        className={styles.td}
        type='number'
        value={points}
        onChange={(e) => setPoints(Number(e.target.value))}
      ></input>
      <td className={styles.td}>
        <button
          className={styless.button}
          onClick={() => handleDeleteTask(task.id)}
          disabled={!edited}
        >
          update
        </button>
      </td>
      <td className={styles.td}>
        <button
          className={styless.button}
          onClick={() => handleDeleteTask(task.id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default TaskList;
