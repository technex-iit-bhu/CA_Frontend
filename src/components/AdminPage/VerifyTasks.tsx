import React, { useState, useEffect } from 'react';
import styles from './TaskList.module.css';

type TaskSubmission = {
  id: number;
  verified: boolean;
  timestamp: string;
  user: {
    id: number;
    user_name: string;
    first_name: string;
    last_name: string;
  };
  task: {
    id: number;
    title: string;
    description: string;
    points: number;
    deadline: string;
  };
  link: string | null;
  image: string | null;
  admin_comment: string;
};

type UserWiseTaskSubmission = {
  user: string;
  submissions: TaskSubmission[];
};

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  'https://ca-api.technex.co.in';

function VerifyTasks({ token }: { token: string | null }) {
  const [submissions, setSubmissions] = useState<UserWiseTaskSubmission[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [adminComments, setAdminComments] = useState<{ [key: number]: string }>(
    {}
  );

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/tasks/verify/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch submissions');
      const data = await response.json();
      setSubmissions(data);
      console.log(data);
      setMessage(
        `${data.reduce((acc: number, k: UserWiseTaskSubmission) => {
          return (k.submissions?.length ?? 0) + acc;
        }, 0)} submissions found.`
      );
    } catch (error) {
      console.error('Error fetching submissions:', error);
      setMessage('Error fetching submissions');
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchSubmissions();
  }, [token]);

  const handleVerify = async (id: number) => {
    try {
      const response = await fetch(`${BACKEND_URL}/tasks/verify/${id}/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to verify submission');
      setMessage('Submission verified successfully');
      fetchSubmissions();
    } catch (error) {
      console.error('Error verifying submission:', error);
      setMessage('Error verifying submission');
    }
  };

  const handleCommentChange = (id: number, comment: string) => {
    setAdminComments((prevComments) => ({
      ...prevComments,
      [id]: comment,
    }));
  };

  const handleAdminComment = async (id: number) => {
    const comment = adminComments[id] || '';
    try {
      const response = await fetch(`${BACKEND_URL}/tasks/verify/${id}/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ admin_comment: comment }),
      });
      if (!response.ok) throw new Error('Failed to add admin comment');
      setMessage('Admin comment added successfully');
      setAdminComments((prevComments) => ({
        // Clear the comment for this task
        ...prevComments,
        [id]: '',
      }));
      fetchSubmissions();
    } catch (error) {
      console.error('Error adding admin comment:', error);
      setMessage('Error adding admin comment');
    }
  };

  return (
    <div className='overflow-y-scroll'>
      <h2>Submissions awaiting verification</h2>
      {submissions.map(({ user, submissions }) => {
        return (
          <>
            <table>
              <thead>
                <h1 className={styles.header}>{'Username: ' + user}</h1>
                <tr>
                  <th className={styles.th}>ID</th>
                  <th className={styles.th}>User</th>
                  <th className={styles.th}>Task Title</th>
                  <th className={styles.th}>Submitted On</th>
                  <th className={styles.th}>Link</th>
                  <th className={styles.th}>Admin Comment</th>
                  <th className={styles.th}>Verify</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission.id}>
                    <td className={styles.td}>{submission.id}</td>
                    <td className={styles.td}>{submission.user.user_name}</td>
                    <td className={styles.td}>{submission.task.title}</td>
                    <td className={styles.td}>
                      {new Date(submission.timestamp).toLocaleString()}
                    </td>
                    <td className={styles.td}>
                      <a
                        href={submission.link || ''}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={
                          !submission.link ? styles.disabledlink : styles.link
                        }
                      >
                        View Submission
                      </a>
                      <a
                        href={submission.image || ''}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={
                          !submission.image ? styles.disabledlink : styles.link
                        }
                      >
                        View Image
                      </a>
                    </td>
                    <td className={styles.td}>
                      <input
                        type='text'
                        value={adminComments[submission.id] || ''}
                        onChange={(e) =>
                          handleCommentChange(submission.id, e.target.value)
                        }
                        placeholder='Enter admin comment'
                      />
                      <button
                        className={styles.button}
                        onClick={() => handleAdminComment(submission.id)}
                      >
                        Add Comment
                      </button>
                    </td>
                    <td className={styles.td}>
                      <button
                        className={styles.button}
                        onClick={() => handleVerify(submission.id)}
                        disabled={submission.verified}
                      >
                        Verify
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        );
      })}

      <p style={{ color: 'red' }}>{message}</p>
      <button onClick={fetchSubmissions} className={styles.button}>
        {loading ? 'Loading...' : 'Refresh'}
      </button>
    </div>
  );
}

export default VerifyTasks;
