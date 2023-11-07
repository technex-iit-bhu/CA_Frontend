import { useState } from 'react';
import styles from '../styles/adminPage.module.css';
import TaskList from '@/components/AdminPage/TaskList';
function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>('login');
  const options = ['login','All Tasks', 'Add Task', 'Edit task'];

  return (
    <div className={styles.container}>
      <Navbar
        options={options}
        selected={selected}
        setSelected={setSelected}
      ></Navbar>
      {selected === 'login' ? (
        <Login token={token} setToken={setToken}></Login>
      ) : selected === 'All Tasks' ? (
        <TaskList token={token}></TaskList>
      ) : selected === 'Add Task' ? (
        <TaskForm token={token}></TaskForm>
      ):selected === 'Edit task' ? (
        <div>Edit task</div>
      ) : (
        <div>Never</div>
      )}
    </div>
  );
}
const BACKEND_URL = 'http://localhost:8000/';//TODO: move to .env
function Login({
  token,
  setToken,
}: {
  token: string | null;
  setToken: Function;
}) {
  const [username, setUsername] = useState<string>('fda');
  const [password, setPassword] = useState<string>('');

  function handleClick() {
    fetch(BACKEND_URL + 'auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '0',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data.access);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.loginContainer}>
      <div>
        <label htmlFor='username' className={styles.label}>
          Username
        </label>
        <input
          type='text'
          className={styles.input}
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password' className={styles.label}>
          Password
        </label>
        <input
          type='password'
          className={styles.input}
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>Status:{token === null ? 'Not logged in' : 'Logged in'}</div>
      <button className={styles.button} onClick={handleClick}>
        Login
      </button>
    </div>
  );
}

function Navbar({
  options,
  selected,
  setSelected,
}: {
  options: string[];
  selected: string;
  setSelected: Function;
}) {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.heading}>Admin Page</h1>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            className={
              styles.button + ' ' + (selected === option ? styles.active : '')
            }
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function TaskForm({ token }: { token: string | null}) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [points, setPoints] = useState<number>(0);

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
        }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTitle('');
        setDescription('');
        setPoints(0);
      })
      .catch((err) => console.log(err));
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
        <button type='submit' className={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}




export default AdminPage;
