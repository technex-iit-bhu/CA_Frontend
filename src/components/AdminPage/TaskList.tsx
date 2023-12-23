import React, { useState, useEffect } from 'react';
import styles from './TaskList.module.css';
type Task = {
  id: number;
  title: string;
  description: string;
  points: number;
  deadline: Date;
};
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
function TaskList({ token }: { token: string | null }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(BACKEND_URL + 'tasks/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.splice === undefined) {
        //there has been an error as data is not an array
        setMessage(data.detail);
        setTasks([]);
      } else {
        //sort data by dataelement.id
        const dataWithDeadline = data.map((task: Task) => ({
          ...task,
          deadline: new Date(task.deadline),
        }));

        dataWithDeadline.sort((a: Task, b: Task) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
        setTasks([...dataWithDeadline]); //handles the case when data is null
        setMessage(data.length + ' tasks found.');
      }
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
    <div  className='h-[60%] overflow-x-hidden'>
      <h2>Click on update button after making changes to a task.</h2>
      <table>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>Points</th>
            <th className={styles.th}>Deadline</th>
            <th className={styles.th}>Update</th>
            <th className={styles.th}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleRefresh={handleRefresh}
              token={token}
            ></TaskItem>
          ))}
          {tasks.length === 0 && !loading && (
            <tr>
              <td colSpan={5}>No tasks found</td>
            </tr>
          )}

          <label
            style={{
              color: 'red',
            }}
          >
            {message}
          </label>
        </tbody>
      </table>
      <button onClick={handleRefresh} className={styles.button}>
        {loading ? 'Loading...' : 'Refresh'}
      </button>
    </div>
  );
}

function TaskItem({
  task,
  handleRefresh,
  token,
}: {
  task: Task;
  handleRefresh: Function;
  token: string | null;
}) {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description);
  const [points, setPoints] = useState<number>(task.points);
  const [deadline, setDeadline] = useState<Date>(task.deadline);

  let edited =
    title !== task.title ||
    description !== task.description ||
    points !== task.points ||
    deadline.getTime() !== task.deadline.getTime();

  async function handleDeleteTask() {
    try {
      const response = await fetch(BACKEND_URL + 'tasks/' + task.id + '/', {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'content-length': '0',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        handleRefresh();
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateTask() {
    try {
      const response = await fetch(BACKEND_URL + 'tasks/' + task.id + '/', {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          'content-length': '0',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          points,
          deadline,
        }),
      });

      if (response.ok) handleRefresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr key={task.id}>
      <td className={styles.td}>{task.id}</td>
      <td>
        <input
          className={styles.textarea}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </td>
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
        <input
          type='date'
          value={deadline.toISOString().split('T')[0]}
          onChange={(e) => setDeadline(new Date(e.target.value))}
        ></input>
      </td>
      <td className={styles.td}>
        <button
          className={styles.button}
          onClick={() => handleUpdateTask()}
          disabled={!edited}
        >
          update
        </button>
      </td>
      <td className={styles.td}>
        <button className={styles.button} onClick={() => handleDeleteTask()}>
          delete
        </button>
      </td>
    </tr>
  );
}

export default TaskList;
