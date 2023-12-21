import React, { useState } from 'react';
import styles from '../../styles/adminPage.module.css';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log(BACKEND_URL);
function TaskForm({ token }: { token: string | null }) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [deadline, setDeadline] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleSubmit() {
    fetch(BACKEND_URL + 'tasks/', {
      method: 'POST',
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
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id === undefined) throw new Error(JSON.stringify(data));

        setTitle('');
        setDescription('');
        setPoints(0);
        setDeadline('');
      })
      .catch((err) => {
        console.log(err);
        setMessage('Error: ' + err);
      });
  }

  return (
    <div>
      <div>
        <label>
          Title:
          <input
            type='text'
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Points:
          <input
            type='number'
            className={styles.input}
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Deadline:
          <input
            type='datetime-local'
            className={styles.input}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
        <p
          style={{
            color: 'red',
          }}
        >
          {message}
        </p>
        <button type='submit' className={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
