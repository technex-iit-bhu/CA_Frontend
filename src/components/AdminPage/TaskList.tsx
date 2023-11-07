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
    } finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleRefresh = () => {
    fetchTasks();
  };

  function handleDeleteTask(id: number) {
    //todo make fetch request
    handleRefresh();
  }

  return (
    <div>
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
            <tr key={task.id}>
              <td className={styles.td}>{task.id}</td>
              <td className={styles.td}>{task.title}</td>
              <td className={styles.td}>
                <textarea className={styles.textarea} value={task.description} contentEditable={false}>
                </textarea>
              </td>
              <td className={styles.td}>{task.points}</td>
              <td className={styles.td}>
                <button
                  className={styless.button}
                  onClick={() => handleDeleteTask(task.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
          {
            tasks.length === 0 && !loading && <tr><td colSpan={5}>No tasks found</td></tr>
          }
        </tbody>
      </table>
      <button onClick={handleRefresh} className={styless.button}>
        {loading ? 'Loading...' : 'Refresh'}
      </button>
    </div>
  );
}

export default TaskList;
