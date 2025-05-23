import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose, setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const trimmedId = id.trim();
    const trimmedPw = pw.trim();

    if (trimmedId === 'Kim' && trimmedPw === 'Kim') {
      setIsLoggedIn(true);
      localStorage.setItem('id', trimmedId);
      localStorage.setItem('pw', trimmedPw);
      onClose();
      navigate(location.pathname);
    } else {
      setError('올바르지 않은 아이디 또는 비밀번호 입니다.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>
        <div className={styles.left}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 1068.79 689.43"
            width="168"
            height="108"
          >
            <path
              fill="#f2f2f2"
              d="M990.4 597.78 886.71 418.13a3.3 3.3 0 0 0-5.73 0L777.26 597.78a3.3 3.3 0 0 0 2.87 5h30.94a3.32 3.32 0 0 1 3.31 3.31v38.38a3.3 3.3 0 0 0 3.29 3.31h40.37a3.31 3.31 0 0 0 3.31-3.31V625.9a3.3 3.3 0 0 1 3.3-3.3h38.38a3.31 3.31 0 0 1 3.31 3.3v18.53a3.31 3.31 0 0 0 3.31 3.31h40.36a3.34 3.34 0 0 0 3.32-3.31v-38.38a3.31 3.31 0 0 1 3.31-3.31h30.94a3.31 3.31 0 0 0 2.82-4.96Zm-144.57 19.88a3.34 3.34 0 0 1-2.35 1h-14.56a3.31 3.31 0 0 1 0-6.62h14.56a3.3 3.3 0 0 1 3.31 3.31 3.34 3.34 0 0 1-.96 2.31Zm95.27 0a3.29 3.29 0 0 1-2.34 1h-14.55a3.32 3.32 0 0 1-3.31-3.31 3.33 3.33 0 0 1 3.31-3.31h14.55a3.3 3.3 0 0 1 2.34 5.65ZM349.34 599.36 245.63 419.72a3.32 3.32 0 0 0-5.74 0L150.3 574.88a274.22 274.22 0 0 0 37.53 38.71h14.57a3.31 3.31 0 0 1 2.34 5.65 3.25 3.25 0 0 1-2.34 1h-6.16a160.29 160.29 0 0 0 24 14.93v-7.65a3.32 3.32 0 0 1 3.32-3.31h38.37a3.31 3.31 0 0 1 3.31 3.31v18.52a3.08 3.08 0 0 0 .31 1.39 3.28 3.28 0 0 0 3 1.92h40.37a3.27 3.27 0 0 0 2.63-1.33 3.17 3.17 0 0 0 .66-2v-38.38a3.31 3.31 0 0 1 3.31-3.31h30.94a3.3 3.3 0 0 0 2.88-4.97Zm-68.56 15.2a3.33 3.33 0 0 1 2.35-1h14.56a3.31 3.31 0 0 1 3.31 3.31 3.33 3.33 0 0 1-3.31 3.31h-14.56a3.3 3.3 0 0 1-3.31-3.31 3.34 3.34 0 0 1 .96-2.31Zm-65.14-66.48a3.3 3.3 0 0 1-3.31-3.31v-25.14a3.3 3.3 0 0 1 3.31-3.31h54.25a3.31 3.31 0 0 1 3.31 3.31v25.14a3.31 3.31 0 0 1-3.31 3.31ZM759.33 276.64H630.97v-27.76a6.63 6.63 0 0 0-6.64-6.64h-37.69v-29.52a4.18 4.18 0 0 0-4.18-4.18h-48.55a4.18 4.18 0 0 0-4.18 4.18v29.57H485.4a6.64 6.64 0 0 0-6.64 6.64v27.69H356.4a1.35 1.35 0 0 0-1.34 1.35v368.54a1.35 1.35 0 0 0 1.34 1.35h81.34a1.35 1.35 0 0 0 1.35-1.35v-49.58a1.37 1.37 0 0 1 1.36-1.35h34.35a1.36 1.36 0 0 1 1.35 1.35v49.58a1.36 1.36 0 0 0 1.34 1.35h160.74a1.36 1.36 0 0 0 1.35-1.35v-49.58a1.36 1.36 0 0 1 1.34-1.35h34.36a1.36 1.36 0 0 1 1.36 1.35v49.58a1.36 1.36 0 0 0 1.34 1.35h81.35a1.35 1.35 0 0 0 1.34-1.35V277.99a1.35 1.35 0 0 0-1.34-1.35ZM424.52 578.36a1.34 1.34 0 0 1-1.33 1.34h-50.24a1.35 1.35 0 0 1-1.36-1.34V561.2a1.36 1.36 0 0 1 1.36-1.35h50.24a1.35 1.35 0 0 1 1.33 1.35Zm0-44.34a1.34 1.34 0 0 1-1.33 1.35h-50.24a1.35 1.35 0 0 1-1.36-1.35v-17.15a1.35 1.35 0 0 1 1.36-1.35h50.24a1.34 1.34 0 0 1 1.33 1.35Zm0-44.33a1.35 1.35 0 0 1-1.33 1.35h-50.24a1.36 1.36 0 0 1-1.36-1.35v-17.16a1.36 1.36 0 0 1 1.36-1.35h50.24a1.35 1.35 0 0 1 1.33 1.35Zm0-44.34a1.34 1.34 0 0 1-1.33 1.35h-50.24a1.35 1.35 0 0 1-1.36-1.35V428.2a1.35 1.35 0 0 1 1.36-1.35h50.24a1.34 1.34 0 0 1 1.33 1.35Zm0-44.33a1.35 1.35 0 0 1-1.33 1.35h-50.24a1.36 1.36 0 0 1-1.36-1.35v-17.16a1.35 1.35 0 0 1 1.36-1.34h50.24a1.34 1.34 0 0 1 1.33 1.34Zm0-44.33a1.34 1.34 0 0 1-1.33 1.34h-50.24a1.35 1.35 0 0 1-1.36-1.34v-17.16a1.36 1.36 0 0 1 1.36-1.35h50.24a1.35 1.35 0 0 1 1.33 1.35Zm0-44.34a1.34 1.34 0 0 1-1.33 1.35h-50.24a1.35 1.35 0 0 1-1.36-1.35V295.2a1.35 1.35 0 0 1 1.36-1.35h50.24a1.34 1.34 0 0 1 1.33 1.35Zm119.12 266a1.35 1.35 0 0 1-1.36 1.34h-50.24a1.34 1.34 0 0 1-1.34-1.34V561.2a1.35 1.35 0 0 1 1.34-1.35h50.24a1.36 1.36 0 0 1 1.36 1.35Zm0-44.34a1.35 1.35 0 0 1-1.36 1.35h-50.24a1.34 1.34 0 0 1-1.34-1.35v-17.14a1.34 1.34 0 0 1 1.34-1.35h50.24a1.35 1.35 0 0 1 1.36 1.35Zm0-44.33a1.36 1.36 0 0 1-1.36 1.35h-50.24a1.35 1.35 0 0 1-1.34-1.31v-17.19a1.35 1.35 0 0 1 1.34-1.35h50.24a1.36 1.36 0 0 1 1.36 1.35Zm0-44.34a1.35 1.35 0 0 1-1.36 1.35h-50.24a1.34 1.34 0 0 1-1.34-1.35V428.2a1.34 1.34 0 0 1 1.34-1.35h50.24a1.35 1.35 0 0 1 1.36 1.35Zm0-44.33a1.36 1.36 0 0 1-1.36 1.35h-50.24a1.35 1.35 0 0 1-1.34-1.35v-17.15a1.34 1.34 0 0 1 1.34-1.34h50.24a1.35 1.35 0 0 1 1.36 1.34Zm0-44.33a1.35 1.35 0 0 1-1.36 1.34h-50.24a1.34 1.34 0 0 1-1.34-1.3v-17.19a1.35 1.35 0 0 1 1.34-1.35h50.24a1.36 1.36 0 0 1 1.36 1.35Zm0-44.34a1.35 1.35 0 0 1-1.36 1.35h-50.24a1.34 1.34 0 0 1-1.34-1.35V295.2a1.34 1.34 0 0 1 1.34-1.35h50.24a1.35 1.35 0 0 1 1.36 1.35Zm81.38 266a1.34 1.34 0 0 1-1.35 1.34H573.4a1.36 1.36 0 0 1-1.36-1.34V561.2a1.37 1.37 0 0 1 1.36-1.35h50.23a1.35 1.35 0 0 1 1.35 1.35Zm0-44.34a1.34 1.34 0 0 1-1.35 1.35H573.4a1.36 1.36 0 0 1-1.36-1.35v-17.13a1.36 1.36 0 0 1 1.36-1.35h50.23a1.34 1.34 0 0 1 1.35 1.35Zm0-44.33a1.35 1.35 0 0 1-1.35 1.35H573.4a1.37 1.37 0 0 1-1.36-1.35v-17.14a1.37 1.37 0 0 1 1.36-1.35h50.23a1.35 1.35 0 0 1 1.35 1.35Zm0-44.34a1.34 1.34 0 0 1-1.35 1.35H573.4a1.36 1.36 0 0 1-1.36-1.35V428.2a1.36 1.36 0 0 1 1.36-1.35h50.23a1.34 1.34 0 0 1 1.35 1.35Zm0-44.33a1.35 1.35 0 0 1-1.35 1.35H573.4a1.37 1.37 0 0 1-1.36-1.35v-17.14a1.36 1.36 0 0 1 1.36-1.34h50.23a1.34 1.34 0 0 1 1.35 1.34Zm0-44.33a1.34 1.34 0 0 1-1.35 1.34H573.4a1.36 1.36 0 0 1-1.36-1.34v-17.14a1.37 1.37 0 0 1 1.36-1.35h50.23a1.35 1.35 0 0 1 1.35 1.35Zm0-44.34a1.34 1.34 0 0 1-1.35 1.35H573.4a1.36 1.36 0 0 1-1.36-1.35V295.2a1.36 1.36 0 0 1 1.36-1.35h50.23a1.34 1.34 0 0 1 1.35 1.35Zm119.12 266a1.36 1.36 0 0 1-1.36 1.34h-50.24a1.33 1.33 0 0 1-1.34-1.34V561.2a1.34 1.34 0 0 1 1.34-1.35h50.24a1.37 1.37 0 0 1 1.36 1.35Zm0-44.34a1.36 1.36 0 0 1-1.36 1.35h-50.24a1.34 1.34 0 0 1-1.34-1.35v-17.12a1.34 1.34 0 0 1 1.34-1.35h50.24a1.36 1.36 0 0 1 1.36 1.35Zm0-44.33a1.37 1.37 0 0 1-1.36 1.35h-50.24a1.34 1.34 0 0 1-1.34-1.29v-17.19a1.34 1.34 0 0 1 1.34-1.35h50.24a1.37 1.37 0 0 1 1.36 1.35Zm0-44.34a1.36 1.36 0 0 1-1.36 1.35h-50.24a1.34 1.34 0 0 1-1.34-1.35V428.2a1.34 1.34 0 0 1 1.34-1.35h50.24a1.36 1.36 0 0 1 1.36 1.35Zm0-44.33a1.37 1.37 0 0 1-1.36 1.35h-50.24a1.34 1.34 0 0 1-1.34-1.35v-17.13a1.33 1.33 0 0 1 1.34-1.34h50.24a1.36 1.36 0 0 1 1.36 1.34Zm0-44.33a1.36 1.36 0 0 1-1.36 1.34h-50.24a1.33 1.33 0 0 1-1.34-1.28v-17.19a1.34 1.34 0 0 1 1.34-1.35h50.24a1.37 1.37 0 0 1 1.36 1.35Zm0-44.34a1.36 1.36 0 0 1-1.36 1.35h-50.24a1.34 1.34 0 0 1-1.34-1.35V295.2a1.34 1.34 0 0 1 1.34-1.35h50.24a1.36 1.36 0 0 1 1.36 1.35ZM187.6 280.44a74.43 74.43 0 0 0 5.77-8.48l-40.67-6.68 44 .33a74.17 74.17 0 0 0 1.43-58.73l-59 30.6 54.41-40a74.13 74.13 0 1 0-122.43 83A73.89 73.89 0 0 0 62.66 294l52.74 27.38-56.27-18.89a74.19 74.19 0 0 0 12 69.61 73.63 73.63 0 0 0-13.29 26.45 738.47 738.47 0 0 0 34.9 83.83 73.39 73.39 0 0 0 23 8.41 25.71 25.71 0 0 0-1.46 8.61 24.45 24.45 0 0 0 3.12 12.38 24 24 0 0 0-3.16 10.56 455.92 455.92 0 0 0 30.1 45 22.75 22.75 0 0 0-2.44-6 25.41 25.41 0 0 0 0-24.76 25.41 25.41 0 0 0 0-24.76 24.45 24.45 0 0 0 3.22-12.38 25.39 25.39 0 0 0-1.5-8.73 74.13 74.13 0 0 0 44-118.57 74.11 74.11 0 0 0 0-91.66ZM1068.67 339.57l-3-.49h2.94a126.92 126.92 0 0 0-6.08-33.31l-10.46 5.43 9.84-7.26a127.64 127.64 0 0 0-48.75-63.93 74.4 74.4 0 0 0-29.11 114.25 74.13 74.13 0 0 0-8.45 13.55l52.8 27.5-56.27-18.93a74.48 74.48 0 0 0 12 69.76 74.41 74.41 0 0 0 32.9 115.77c4-9.49 7.89-19.41 11.53-29.61 3.22-9 6.29-18.17 9.18-27.43a843 843 0 0 0 21.16-82.56c6.4-31.72 10-59.44 10-77-.1-1.93-.15-3.83-.23-5.74Z"
            ></path>
            <ellipse
              cx="532"
              cy="664.43"
              fill="#3f3d56"
              rx="532"
              ry="25"
            ></ellipse>
            <path
              fill="#1fc997"
              d="M814.4 404.94c-9.94-17.22-51-12.15-91.61 11.32a195.17 195.17 0 0 0-20.38 13.51 176.65 176.65 0 0 0-352.48 4.44 189.49 189.49 0 0 0-26-18c-40.53-23.42-81.6-28.49-91.53-11.27s15 50.2 55.61 73.67c26.31 15.19 52.76 22.66 70.85 21.39a176.85 176.85 0 0 0 53.82 79c-35.62 5-61.81 21.66-61.81 41.48 0 23.74 37.61 43 84 43s84-19.26 84-43v-.19q3.74.16 7.51.17t7.51-.17v.19c0 23.74 37.61 43 84 43s84-19.26 84-43c0-19.82-26.19-36.49-61.81-41.48a176.82 176.82 0 0 0 53.78-78.85c17.69-.46 41.4-7.87 65-21.5 40.62-23.51 65.54-56.5 55.54-73.71Z"
            ></path>
            <path
              d="M232.4 413.94c9.94-17.22 51-12.15 91.61 11.32a189.25 189.25 0 0 1 25.61 17.64c.39-8.46.39.54.37-8.7a189.58 189.58 0 0 0-26-17.94c-40.59-23.47-81.66-28.54-91.59-11.32-2.19 3.79-2.68 8.35-1.69 13.4a16 16 0 0 1 1.69-4.4ZM814.62 413.94c-9.94-17.22-51-12.15-91.62 11.32-9.47 5.46-13.08 7.46-20.6 13.64-.4-8.46-.4.54-.37-8.7 7.6-6.29 11.35-8.38 21-13.94 40.66-23.47 81.68-28.54 91.62-11.32 2.19 3.79 2.68 8.35 1.69 13.4a16 16 0 0 0-1.72-4.4Z"
              opacity="0.1"
            ></path>
            <ellipse
              cx="479.03"
              cy="409.54"
              fill="#444053"
              rx="18.32"
              ry="23.99"
            ></ellipse>
            <ellipse
              cx="573.68"
              cy="409.54"
              fill="#444053"
              rx="18.32"
              ry="23.99"
            ></ellipse>
            <path
              fill="#3f3d56"
              d="M640.2 485c0 34.44-57.53 92.46-115.58 92.46s-113.41-59.33-113.41-93.74 54.19-3 112.19-3 116.8-30.17 116.8 4.28Z"
            ></path>
            <path
              fill="#f6f8fb"
              d="M429.51 490.88s104.35 23.23 192 .66c0 0 10.73 0 3.4 12.4a19.81 19.81 0 0 1-8 7.52c-16.9 8.63-79.45 34.15-179.47 1.61a19.68 19.68 0 0 1-13.04-13.35c-1.14-4.21-.63-8.25 5.11-8.84Z"
            ></path>
            <path
              d="M525.71 290.55a176.64 176.64 0 0 1 176.32 166.17q.5-6.6.5-13.33a176.65 176.65 0 0 0-353.29 0c0 3.53.12 7 .32 10.51a176.66 176.66 0 0 1 176.15-163.35Z"
              opacity="0.1"
            ></path>
            <path
              fill="#3f3d56"
              d="M545.64 62.08a22.64 22.64 0 1 1-45.28 0v-1.09a22.64 22.64 0 0 1 45.22 0c.05.36.06.73.06 1.09Z"
            ></path>
            <path
              d="M545.64 62.08a22.64 22.64 0 1 1-45.28 0v-1.09a35.74 35.74 0 0 1 45.22 0c.05.36.06.73.06 1.09Z"
              opacity="0.1"
            ></path>
            <circle cx="523" cy="90.68" r="35.75" fill="#3f3d56"></circle>
            <path
              fill="#3f3d56"
              d="M501.4 57.08a22.65 22.65 0 0 1 19.64-22.44 22.64 22.64 0 1 0 0 44.88 22.65 22.65 0 0 1-19.64-22.44ZM482.67 105.19a22.64 22.64 0 0 1-3.81-29.58 22.64 22.64 0 1 0 31.79 32.11 21.75 21.75 0 0 0 1.84-2.39 22.63 22.63 0 0 1-29.82-.14Z"
            ></path>
            <path
              fill="#ffc1c7"
              d="M504.31 136.01c-1.78.6-3.76.73-5.29 1.81-3 2.07-2.87 6.46-2 10 2 8 7 15.71 14.57 19 4.58 2 9.7 2.19 14.68 2.13 5.43-.06 11.54-.75 14.9-5 1.67-2.13 2.38-4.83 3.05-7.46 1.66-6.5 3.33-13.15 2.73-19.83-3.29.29-7 .48-9.52-1.59s-3.18-6-4.3-9.29a2.34 2.34 0 0 0-.84-1.32 2.56 2.56 0 0 0-1.5-.23 59.24 59.24 0 0 1-10.29-.51c-2.13-.28-7.37-2.5-9-.63-1.17 1.37-.43 5.5-1.32 7.41a10.36 10.36 0 0 1-5.87 5.51Z"
            ></path>
            <path
              d="M504.31 136.01c-1.78.6-3.76.73-5.29 1.81-3 2.07-2.87 6.46-2 10 2 8 7 15.71 14.57 19 4.58 2 9.7 2.19 14.68 2.13 5.43-.06 11.54-.75 14.9-5 1.67-2.13 2.38-4.83 3.05-7.46 1.66-6.5 3.33-13.15 2.73-19.83-3.29.29-7 .48-9.52-1.59s-3.18-6-4.3-9.29a2.34 2.34 0 0 0-.84-1.32 2.56 2.56 0 0 0-1.5-.23 59.24 59.24 0 0 1-10.29-.51c-2.13-.28-7.37-2.5-9-.63-1.17 1.37-.43 5.5-1.32 7.41a10.36 10.36 0 0 1-5.87 5.51Z"
              opacity="0.05"
            ></path>
            <path
              fill="#444053"
              d="M317.56 369.3c-8 .24-16.17-.1-24 1.66a6.15 6.15 0 0 0-3.88 2c-1.15 1.64-.54 3.93.41 5.7a17.71 17.71 0 0 0 10.12 8.41c4.76 1.52 9.89.94 14.87 1.1a49.74 49.74 0 0 1 19.62 4.72c1.4.66 2.88 1.4 4.41 1.17 2.21-.34 3.59-2.55 4.41-4.63a56.5 56.5 0 0 0 2.21-7.67c1.16-4.93 1.32-14.67-5.45-16-3.1-.6-6.75 1.54-9.73 2.16a72.41 72.41 0 0 1-12.99 1.38ZM727.57 371.61a9.22 9.22 0 0 0 4.67-3.58c3-4.37 3-9.59 4.59-14.38 2-6.23 6.43-11.37 9.21-17.3a35.77 35.77 0 0 0 3.34-17 3 3 0 0 0-3.51-2.8c-3.77.73-7.19 3.46-9.59 6.58-3.09 4-5.11 8.76-8.28 12.71s-7.62 7.12-11.39 10.75c-4.73 4.56-8.44 9.52-4.22 15.44 3.43 4.86 8.17 11.88 15.18 9.58Z"
            ></path>
            <path
              fill="#575a89"
              d="M482.49 240.66a321.29 321.29 0 0 1-92 81.17c-10.89 6.39-22.25 12.19-31.93 20.3-7.34 6.16-13.57 13.52-19.76 20.84a5 5 0 0 0-1.4 2.56 4.91 4.91 0 0 0 .37 2.06c2 5.9 4.32 12.3 9.66 15.52 13.84-20 41.34-25.17 62.43-37.27 9.8-5.62 18.73-12.6 27.77-19.36q19.6-14.67 40.07-28.11c9.05-5.94 18.37-11.78 28.75-14.87 22-6.58 46 0 66.32 10.8s38.21 25.56 58.12 37.05c27.06 15.6 57.25 24.8 87.14 33.87 1.07-7.18 1.72-14.22 3.24-21.32-7.46-1.05-14.51-4-21.47-6.89-7.77-3.24-15.59-6.52-22.57-11.23-4.61-3.12-8.8-6.84-13.36-10-9.94-7-21.46-11.4-31.53-18.19-13.12-8.84-23.27-21.35-35.27-31.66-5.23-4.49-10.79-8.56-16.36-12.62-5.76-4.21-11.61-8.46-18.25-11.07-7.88-3.11-16.48-3.75-24.93-4.35-18.9-1.4-37.13-3.26-55.04 2.77Z"
            ></path>
            <circle cx="522.5" cy="107.93" r="25" fill="#ffc1c7"></circle>
            <path
              fill="#ff6584"
              d="M521.76 160.06a30 30 0 0 1-12.62-4.6 18.38 18.38 0 0 1-7.69-10.74c-.81-3.53-.36-7.34-1.78-10.66a95.44 95.44 0 0 1-14 5.68c-2.71.85-5.54 1.63-7.74 3.42-4.73 3.85-5 10.85-4.87 16.94a11.26 11.26 0 0 0 .45 3.57 9 9 0 0 0 1.95 2.94c5.14 5.5 13.13 7.78 18 13.55a19.29 19.29 0 0 0-4.71 10.16 35.89 35.89 0 0 1-.64 4.52 27.89 27.89 0 0 1-1.47 3.59c-3.16 7.2-3.05 15.34-3.53 23.18s-1.84 16.19-7.14 22c2.16 2.32 5 3 8.11 3.29s6.33-.12 9.5 0c8.36.24 16.25 3.66 24.31 5.89s17.21 3.14 24.34-1.23c2.5-1.53 4.62-3.64 7.13-5.15 3-1.82 6.52-2.69 10-3.54l1.25-41.76a70.94 70.94 0 0 1 .63-8.75c1.81-11.42 9.1-21.09 16.16-30.24a27.67 27.67 0 0 0-12.69-20.6 54.36 54.36 0 0 0-10-4.64l-8.22-3.16a4.58 4.58 0 0 0-2.34-.44c-1.78.32-2.46 2.49-2.56 4.29-.16 2.84.26 5.69.16 8.53s-.81 5.84-2.82 7.85a13.56 13.56 0 0 1-5 2.84c-4.2 1.6-7.74 3.93-12.17 3.27Z"
            ></path>
            <path
              fill="#ffc1c7"
              d="M488.58 264.72c.33 5.57.66 11.2-.28 16.7s-3.24 10.94-7.42 14.64c-3.23 2.85-7.77 5-8.57 9.27a5 5 0 0 0 .22 2.8c.89 2.1 3.5 3.05 5.76 2.69a13.43 13.43 0 0 0 6-3.14 132.54 132.54 0 0 0 9.94-9c2.79-2.71 5.68-5.57 6.85-9.28a22.91 22.91 0 0 0 .81-5.42c.65-10 .82-20 1-30 .12-7.28.2-14.79-2.48-21.56.4 1-9.34 1.95-10.08 2-4.2.37-3.4 2.1-3.16 6.06q.7 12.16 1.41 24.24ZM561.4 264.72c-.33 5.57-.66 11.2.28 16.7s3.24 10.94 7.42 14.64c3.23 2.85 7.77 5 8.57 9.27a5 5 0 0 1-.22 2.8c-.89 2.1-3.5 3.05-5.76 2.69a13.43 13.43 0 0 1-6-3.14 132.54 132.54 0 0 1-9.94-9c-2.79-2.71-5.68-5.57-6.85-9.28a22.91 22.91 0 0 1-.81-5.42c-.65-10-.82-20-1-30-.12-7.28-.2-14.79 2.48-21.56-.4 1 9.34 1.95 10.08 2 4.2.37 3.4 2.1 3.16 6.06q-.66 12.16-1.41 24.24Z"
            ></path>
            <path
              d="M476.03 156.42c-3.53 10.42-2.1 22 1.51 32.37.88 2.55 1.91 5.21 1.5 7.88a24.78 24.78 0 0 1-1.24 4 18.94 18.94 0 0 0-.54 9.71 6.08 6.08 0 0 0 1.11 2.68 12.45 12.45 0 0 1 1 1.16c1.37 2.14-1.32 4.79-1 7.32.24 2.1 2.37 3.34 3.86 4.85 4.21 4.27 3.4 11.22 2.3 17.12 5.11-.45 9.52-4.63 14.64-4.29a8.76 8.76 0 0 1 7.54 5.81c-.19-4.95 1.57-9.17 2-14.11.57-6.43-3.59-12.19-5.6-18.31-2.93-8.92-1.28-18.61-2-28a93.56 93.56 0 0 0-1.52-10.39c-.91-4.7-2.24-9.84-6.22-12.51-5.13-3.41-12.85-.99-17.34-5.29Z"
              opacity="0.1"
            ></path>
            <path
              fill="#ff6584"
              d="M475.03 154.42c-3.53 10.42-2.1 22 1.51 32.37.88 2.55 1.91 5.21 1.5 7.88a24.78 24.78 0 0 1-1.24 4 18.94 18.94 0 0 0-.54 9.71 6.08 6.08 0 0 0 1.11 2.68 12.45 12.45 0 0 1 1 1.16c1.37 2.14-1.32 4.79-1 7.32.24 2.1 2.37 3.34 3.86 4.85 4.21 4.27 3.4 11.22 2.3 17.12 5.11-.45 9.52-4.63 14.64-4.29a8.76 8.76 0 0 1 7.54 5.81c-.19-4.95 1.57-9.17 2-14.11.57-6.43-3.59-12.19-5.6-18.31-2.93-8.92-1.28-18.61-2-28a93.56 93.56 0 0 0-1.52-10.39c-.91-4.7-2.24-9.84-6.22-12.51-5.13-3.41-12.85-.99-17.34-5.29Z"
            ></path>
            <path
              d="M573.98 156.42c3.53 10.42 2.1 22-1.51 32.37-.88 2.55-1.91 5.21-1.5 7.88a24.78 24.78 0 0 0 1.24 4 18.94 18.94 0 0 1 .54 9.71 6.08 6.08 0 0 1-1.11 2.68 12.45 12.45 0 0 0-1 1.16c-1.37 2.14 1.32 4.79 1 7.32-.24 2.1-2.37 3.34-3.86 4.85-4.21 4.27-3.4 11.22-2.3 17.12-5.11-.45-9.52-4.63-14.64-4.29a8.76 8.76 0 0 0-7.54 5.81c.19-4.95-1.57-9.17-2-14.11-.57-6.43 3.59-12.19 5.6-18.31 2.93-8.92 1.28-18.61 2-28a93.56 93.56 0 0 1 1.5-10.34c.91-4.7 2.24-9.84 6.22-12.51 5.15-3.46 12.87-1.04 17.36-5.34Z"
              opacity="0.1"
            ></path>
            <path
              fill="#ff6584"
              d="M574.98 154.42c3.53 10.42 2.1 22-1.51 32.37-.88 2.55-1.91 5.21-1.5 7.88a24.78 24.78 0 0 0 1.24 4 18.94 18.94 0 0 1 .54 9.71 6.08 6.08 0 0 1-1.11 2.68 12.45 12.45 0 0 0-1 1.16c-1.37 2.14 1.32 4.79 1 7.32-.24 2.1-2.37 3.34-3.86 4.85-4.21 4.27-3.4 11.22-2.3 17.12-5.11-.45-9.52-4.63-14.64-4.29a8.76 8.76 0 0 0-7.54 5.81c.19-4.95-1.57-9.17-2-14.11-.57-6.43 3.59-12.19 5.6-18.31 2.93-8.92 1.28-18.61 2-28a93.56 93.56 0 0 1 1.5-10.34c.91-4.7 2.24-9.84 6.22-12.51 5.15-3.46 12.87-1.04 17.36-5.34Z"
            ></path>
            <ellipse
              cx="522"
              cy="84.43"
              fill="#3f3d56"
              rx="30"
              ry="20"
            ></ellipse>
            <path
              d="M497 190.44a14 14 0 0 1 13-14h-1a14 14 0 0 0 0 28c.34 0 .67 0 1-.05a14 14 0 0 1-13-13.95Z"
              opacity="0.05"
            ></path>
            <ellipse
              cx="508"
              cy="190.43"
              fill="#ff6584"
              rx="11"
              ry="14"
            ></ellipse>
            <path
              d="M554 190.44a14 14 0 0 0-13-14h1a14 14 0 0 1 0 28c-.33 0-.66 0-1-.05a14 14 0 0 0 13-13.95Z"
              opacity="0.05"
            ></path>
            <ellipse
              cx="543"
              cy="190.43"
              fill="#ff6584"
              rx="11"
              ry="14"
            ></ellipse>
            <path
              d="M522 102.44c-16.06 0-29.18-8.42-30-19v1c0 11 13.44 20 30 20s30-9 30-20v-1c-.81 10.58-13.93 19-30 19Z"
              opacity="0.1"
            ></path>
            <path
              fill="#f2f2f2"
              d="m344.99 34.13-15.52 9.85 9.42-17.14a15.35 15.35 0 0 0-9.38-3.35h-.25a18.09 18.09 0 0 1-3.22-.23l-5.26 3.33 2.25-4.1a18.72 18.72 0 0 1-9.2-7l-9.41 6 5.98-10.83C304.9 4.06 297.48 0 289.31 0c-9.79 0-18.51 5.83-24.14 14.9a18 18 0 0 1-16 8.6h-.52c-10.81 0-19.57 12.26-19.57 27.37s8.76 27.37 19.57 27.37a14.71 14.71 0 0 0 6.81-1.7c7.05-3.67 16.31-3.74 23.69-.47a24.71 24.71 0 0 0 20.14 0 28.27 28.27 0 0 1 23.47.45 14.72 14.72 0 0 0 6.75 1.67c10.81 0 19.57-12.25 19.57-27.37a34.77 34.77 0 0 0-4.09-16.69Z"
            ></path>
            <path
              d="M315.74 74.18a28.9 28.9 0 0 0-16.77 1.83 24.69 24.69 0 0 1-20.13 0 28.25 28.25 0 0 0-23.69.46 14.6 14.6 0 0 1-6.81 1.71c-9.61 0-17.59-9.67-19.26-22.43a18.43 18.43 0 0 0 4.8-5.18c5.63-9.07 14.35-14.89 24.14-14.89s18.41 5.75 24 14.73a18.52 18.52 0 0 0 15.95 8.76h.25c7.68-.05 14.3 6.08 17.52 15.01Z"
              opacity="0.03"
            ></path>
            <path
              fill="#f2f2f2"
              d="m874.97 205.72-7.74 4.91 4.7-8.54a7.64 7.64 0 0 0-4.69-1.67h-.12a9.62 9.62 0 0 1-1.61-.12l-2.62 1.66 1.12-2a9.4 9.4 0 0 1-4.59-3.49l-4.69 3 3-5.39a13.75 13.75 0 0 0-10.56-5.36c-4.88 0-9.23 2.91-12 7.43a9 9 0 0 1-8 4.29h-.26c-5.39 0-9.76 6.11-9.76 13.65s4.37 13.63 9.76 13.63a7.32 7.32 0 0 0 3.4-.85 14.1 14.1 0 0 1 11.82-.23 12.31 12.31 0 0 0 10 0 14.08 14.08 0 0 1 11.71.23 7.29 7.29 0 0 0 3.36.83c5.39 0 9.76-6.11 9.76-13.65a17.42 17.42 0 0 0-1.99-8.33Z"
            ></path>
            <path
              d="M860.4 225.72a14.44 14.44 0 0 0-8.37.91 12.28 12.28 0 0 1-5 1.06 12.41 12.41 0 0 1-5-1.08 14 14 0 0 0-11.81.23 7.35 7.35 0 0 1-3.4.85c-4.79 0-8.78-4.83-9.61-11.19a9.25 9.25 0 0 0 2.4-2.58c2.8-4.53 7.15-7.43 12-7.43s9.18 2.87 12 7.35a9.24 9.24 0 0 0 8 4.37h.13c3.73 0 7.03 3.05 8.66 7.51Z"
              opacity="0.03"
            ></path>
            <path
              fill="#f2f2f2"
              d="m716.13 91.72 12.44 7.89-7.55-13.73a12.29 12.29 0 0 1 7.52-2.69h.2a14.8 14.8 0 0 0 2.58-.2l4.21 2.68-1.8-3.29a15 15 0 0 0 7.37-5.66l7.54 4.78-4.76-8.66c4.41-5.3 10.35-8.55 16.9-8.55 7.84 0 14.83 4.67 19.34 11.94a14.46 14.46 0 0 0 12.78 6.89h.43c8.66 0 15.67 9.82 15.67 21.93s-7 21.93-15.67 21.93a11.81 11.81 0 0 1-5.47-1.36 22.61 22.61 0 0 0-19-.38 19.79 19.79 0 0 1-16.14 0 22.62 22.62 0 0 0-18.81.37 11.78 11.78 0 0 1-5.4 1.33c-8.66 0-15.68-9.82-15.68-21.93a27.84 27.84 0 0 1 3.3-13.29Z"
            ></path>
            <path
              d="M739.57 123.72a23.11 23.11 0 0 1 13.43 1.46 19.79 19.79 0 0 0 16.14 0 22.65 22.65 0 0 1 19 .37 11.76 11.76 0 0 0 5.47 1.37c7.69 0 14.09-7.75 15.42-18a14.94 14.94 0 0 1-3.84-4.15c-4.51-7.27-11.5-11.93-19.35-11.93s-14.74 4.61-19.25 11.8a14.85 14.85 0 0 1-12.78 7h-.2c-6.16.08-11.46 4.96-14.04 12.08Z"
              opacity="0.03"
            ></path>
            <path
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M241.4 653.89c-4.13-7.64.55-17 5.93-23.81s11.95-13.91 11.81-22.59c-.2-12.48-13.45-19.85-24-26.46a117 117 0 0 1-21.56-17.31 31.49 31.49 0 0 1-6.63-8.87c-2.19-4.88-2.13-10.43-2-15.78q.69-26.7 2.64-53.36"
            ></path>
            <path
              fill="#57b894"
              d="M187.48 484.72a19.41 19.41 0 0 1 9.72-16l4.35 8.61-.15-10.39a19.2 19.2 0 0 1 6.41-.77 19.46 19.46 0 1 1-20.33 18.55ZM222.19 616.41a19.46 19.46 0 1 0-.94-15.67l12.15 9.89-13.37-3.1a19.17 19.17 0 0 0 2.16 8.88ZM231.8 578.63a19.46 19.46 0 0 0 6.17-38.18l.1 8-4.41-8.73h-.05a19.47 19.47 0 1 0-1.81 38.89ZM184.56 547.19a19.46 19.46 0 1 0-8.61-36.42l3.44 9.43-7.07-6.8a19.38 19.38 0 0 0-6.29 13.44 19 19 0 0 0 .49 5.36 19.45 19.45 0 0 0 18.04 14.99Z"
            ></path>
            <path
              d="M190.1 489.88c4.49.5 8.86 1.89 13.37 2.17s9.45-.8 12.3-4.3c1.54-1.89 2.31-4.28 3.61-6.33a13.82 13.82 0 0 1 4.9-4.62 19.46 19.46 0 1 1-36.38 12.92c.73 0 1.5.08 2.2.16ZM184.56 547.19a19.47 19.47 0 0 0 18.51-27.76 14.34 14.34 0 0 0-3.92 3.92c-1.38 2.09-2.22 4.51-3.85 6.43-3 3.56-8.21 4.73-12.91 4.51s-9.23-1.54-13.91-2c-.64-.06-1.3-.1-2-.12a19.45 19.45 0 0 0 18.08 15.02ZM231.8 578.63a19.46 19.46 0 0 0 18.67-27.4 15.67 15.67 0 0 0-4.12 4c-1.51 2.14-2.45 4.59-4.22 6.56-3.29 3.66-8.8 5-13.78 4.83-4.82-.1-9.46-1.29-14.25-1.65a19.48 19.48 0 0 0 17.7 13.66ZM222.19 616.41a19.46 19.46 0 0 0 35.47-15.88 19.57 19.57 0 0 0-4.27 3.81c-1.85 2.26-3.07 4.81-5.21 6.91-4 3.91-10.4 5.52-16.12 5.67a84.94 84.94 0 0 1-9.87-.51Z"
              opacity="0.1"
            ></path>
            <path
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M817.9 646.36c-3-5.64.41-12.56 4.39-17.59s8.82-10.27 8.71-16.68c-.14-9.22-9.93-14.66-17.74-19.55a86.29 86.29 0 0 1-15.94-12.82 23.55 23.55 0 0 1-4.9-6.56c-1.61-3.6-1.57-7.7-1.47-11.65q.51-19.72 2-39.42"
            ></path>
            <path
              fill="#57b894"
              d="M778.04 521.38a14.4 14.4 0 0 1 7.18-11.78l3.22 6.37-.1-7.71a14.59 14.59 0 0 1 4.74-.57 14.38 14.38 0 1 1-15 13.69ZM803.68 618.72a14.37 14.37 0 1 0-.7-11.57l9 7.31-9.87-2.29a14.21 14.21 0 0 0 1.57 6.55ZM810.78 590.72a14.38 14.38 0 0 0 15-13.69 14.19 14.19 0 0 0-1.24-6.54 14.41 14.41 0 0 0-9.23-8l.07 5.93-3.25-6.45a14.39 14.39 0 1 0-1.35 28.75ZM775.88 567.54a14.38 14.38 0 1 0-6.35-26.9l2.54 7-5.23-5a14.28 14.28 0 0 0-4.64 9.92 14 14 0 0 0 .36 4 14.37 14.37 0 0 0 13.32 10.98Z"
            ></path>
            <path
              d="M779.98 525.21c3.31.37 6.54 1.4 9.87 1.61s7-.6 9.09-3.18c1.14-1.4 1.71-3.16 2.66-4.68a10.28 10.28 0 0 1 3.62-3.41 14.37 14.37 0 0 1-13.49 20.87 14.4 14.4 0 0 1-13.33-11.33c.49.02 1 .06 1.58.12ZM775.88 567.54a14.39 14.39 0 0 0 13.68-20.5 10.78 10.78 0 0 0-2.9 2.89c-1 1.55-1.64 3.33-2.84 4.75-2.24 2.63-6.07 3.5-9.54 3.34s-6.81-1.15-10.27-1.46c-.48-.05-1-.08-1.45-.09a14.37 14.37 0 0 0 13.32 11.07ZM810.78 590.72a14.38 14.38 0 0 0 15-13.69 14.19 14.19 0 0 0-1.24-6.54 11.58 11.58 0 0 0-3 2.92c-1.12 1.57-1.81 3.39-3.12 4.84-2.43 2.7-6.5 3.66-10.18 3.57s-7-.95-10.52-1.22a14.36 14.36 0 0 0 13.06 10.12ZM803.68 618.72A14.38 14.38 0 0 0 829.89 607a14.26 14.26 0 0 0-3.16 2.81c-1.37 1.67-2.27 3.55-3.85 5.11-2.94 2.88-7.68 4.07-11.9 4.18a60.9 60.9 0 0 1-7.3-.38Z"
              opacity="0.1"
            ></path>
            <path
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
              stroke-width="4"
              d="M939.57 660.89c4.13-7.64-.55-17-5.93-23.81s-12-13.91-11.81-22.59c.2-12.48 13.45-19.85 24-26.46a117 117 0 0 0 21.57-17.31 31.49 31.49 0 0 0 6.63-8.87c2.19-4.88 2.13-10.43 2-15.78q-.63-26.74-2.63-53.35"
            ></path>
            <path
              fill="#57b894"
              d="M993.53 491.72a19.44 19.44 0 0 0-9.72-16l-4.36 8.62.14-10.43a19.23 19.23 0 0 0-6.41-.77 19.46 19.46 0 1 0 20.35 18.58ZM958.82 623.41a19.46 19.46 0 1 1 .94-15.67l-12.15 9.89 13.37-3.1a19.17 19.17 0 0 1-2.16 8.88ZM949.21 585.63a19.46 19.46 0 0 1-6.17-38.18l-.1 8 4.46-8.73a19.47 19.47 0 1 1 1.81 38.89ZM996.45 554.19a19.46 19.46 0 1 1 8.61-36.42l-3.44 9.43 7.07-6.8a19.46 19.46 0 0 1-12.24 33.79Z"
            ></path>
            <path
              d="M990.91 496.88c-4.49.5-8.86 1.89-13.37 2.17s-9.45-.8-12.3-4.3c-1.54-1.89-2.31-4.28-3.61-6.33a13.82 13.82 0 0 0-4.9-4.62 19.46 19.46 0 1 0 36.38 12.92c-.71 0-1.47.08-2.2.16ZM996.45 554.19a19.47 19.47 0 0 1-18.51-27.76 14.34 14.34 0 0 1 3.92 3.92c1.38 2.09 2.22 4.51 3.85 6.43 3 3.56 8.21 4.73 12.91 4.51s9.23-1.54 13.91-2c.64-.06 1.3-.1 2-.12a19.45 19.45 0 0 1-18.08 15.02ZM949.21 585.63a19.46 19.46 0 0 1-18.67-27.4 15.67 15.67 0 0 1 4.12 4c1.51 2.14 2.45 4.59 4.22 6.56 3.29 3.66 8.8 5 13.78 4.83 4.82-.1 9.46-1.29 14.25-1.65a19.48 19.48 0 0 1-17.7 13.66ZM958.82 623.41a19.46 19.46 0 0 1-35.42-15.88 19.57 19.57 0 0 1 4.27 3.81c1.85 2.26 3.07 4.81 5.21 6.91 4 3.91 10.4 5.52 16.12 5.67a84.94 84.94 0 0 0 9.82-.51Z"
              opacity="0.1"
            ></path>
            <path
              fill="#656380"
              d="M211.23 648.1s15.35-.48 20-3.77 23.63-7.23 24.78-2 23.08 26.29 5.74 26.43-40.29-2.7-44.91-5.51-5.61-15.15-5.61-15.15Z"
            ></path>
            <path
              d="M262.04 666.97c-17.34.14-40.29-2.7-44.91-5.51-3.52-2.14-4.92-9.83-5.39-13.38h-.51s1 12.38 5.59 15.2 27.57 5.65 44.91 5.51c5 0 6.73-1.82 6.64-4.45-.7 1.61-2.6 2.6-6.33 2.63Z"
              opacity="0.2"
            ></path>
            <path
              fill="#656380"
              d="M799.4 646.2s9-.27 11.67-2.2 13.79-4.22 14.46-1.13 13.47 15.34 3.35 15.42-23.52-1.57-26.22-3.22-3.26-8.87-3.26-8.87Z"
            ></path>
            <path
              d="M829.02 657.22c-10.12.08-23.52-1.58-26.22-3.22-2-1.25-2.87-5.74-3.14-7.81h-.26s.57 7.23 3.26 8.87 16.1 3.31 26.22 3.22c2.92 0 3.93-1.06 3.87-2.6-.44.94-1.56 1.52-3.73 1.54Z"
              opacity="0.2"
            ></path>
            <path
              fill="#656380"
              d="M910.23 652.1s15.35-.48 20-3.77 23.63-7.23 24.78-2 23.08 26.29 5.74 26.43-40.29-2.7-44.91-5.51-5.61-15.15-5.61-15.15Z"
            ></path>
            <path
              d="M961.04 670.97c-17.34.14-40.29-2.7-44.91-5.51-3.52-2.14-4.92-9.83-5.39-13.38h-.51s1 12.38 5.59 15.2 27.57 5.65 44.91 5.51c5 0 6.73-1.82 6.64-4.45-.7 1.61-2.6 2.6-6.33 2.63Z"
              opacity="0.2"
            ></path>
          </svg>
          <h2>환영합니다!</h2>
        </div>
        <div className={styles.right}>
          <h3 className={styles.h3}>로그인</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디"
            />
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="비밀번호"
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.loginBtn}>
              로그인
            </button>
          </form>

          <p className={styles.socialLabel}>소셜 계정으로 로그인</p>
          <div className={styles.socialIcons}>
            <button className={`${styles.iconBtn} ${styles.github}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 20 20"
                height="20px"
                width="20px"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M9.87.24C4.28.24 0 4.49 0 10.08c0 4.47 2.82 8.3 6.83 9.65.52.09.7-.23.7-.49 0-.25-.01-1.63-.01-2.48 0 0-2.82.6-3.42-1.2 0 0-.46-1.17-1.12-1.47 0 0-.92-.63.06-.62 0 0 1 .08 1.56 1.04.88 1.56 2.36 1.11 2.94.84.09-.64.35-1.09.64-1.36-2.26-.25-4.53-.58-4.53-4.46 0-1.11.31-1.67.95-2.38-.1-.26-.45-1.34.1-2.74C5.56 4.16 7.5 5.51 7.5 5.51c.73-.23 1.64-.35 2.53-.35.86 0 1.73.12 2.53.34 0 0 1.94-1.35 2.78-1.09.55 1.4.21 2.48.11 2.74.64.71 1.04 1.27 1.04 2.38 0 3.89-2.38 4.2-4.63 4.46.37.32.69.92.69 1.87 0 1.36-.01 3.04-.01 3.37 0 .26.19.58.7.49 4.01-1.35 6.73-5.18 6.73-9.65 0-5.59-4.54-9.84-10.13-9.84Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button className={`${styles.iconBtn} ${styles.google}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                height="20px"
                width="20px"
              >
                <path
                  fill="#4285F4"
                  d="M19.99 10.187c0-.82-.069-1.417-.216-2.037H10.2v3.698h5.62c-.113.92-.725 2.303-2.084 3.233l-.02.124 3.028 2.292.21.02c1.926-1.738 3.037-4.296 3.037-7.33z"
                ></path>
                <path
                  fill="#34A853"
                  d="M10.2 19.931c2.753 0 5.064-.886 6.753-2.414l-3.218-2.436c-.862.587-2.017.997-3.536.997a6.126 6.126 0 0 1-5.801-4.141l-.12.01-3.148 2.38-.041.112c1.677 3.256 5.122 5.492 9.11 5.492z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M4.398 11.937a6.008 6.008 0 0 1-.34-1.971c0-.687.125-1.351.329-1.971l-.006-.132-3.188-2.42-.104.05A9.79 9.79 0 0 0 .001 9.965a9.79 9.79 0 0 0 1.088 4.473l3.309-2.502z"
                ></path>
                <path
                  fill="#EB4335"
                  d="M10.2 3.853c1.914 0 3.206.809 3.943 1.484l2.878-2.746C15.253.985 12.953 0 10.199 0 6.211 0 2.766 2.237 1.09 5.492l3.297 2.503A6.152 6.152 0 0 1 10.2 3.853z"
                ></path>
              </svg>
            </button>

            <button className={`${styles.iconBtn} ${styles.facebook}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                height="20px"
                width="20px"
              >
                <mask
                  id="facebook-icon_svg__a"
                  width="12"
                  height="20"
                  x="4"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M7.84 20v-8.945H4.844V7.5H7.84V4.7C7.84 1.655 9.7 0 12.414 0c1.3 0 2.418.098 2.742.14v3.18h-1.883c-1.476 0-1.761.703-1.761 1.73V7.5h3.332l-.457 3.555h-2.875V20"
                    clip-rule="evenodd"
                  ></path>
                </mask>
                <g mask="url(#facebook-icon_svg__a)">
                  <path fill="#fff" d="M0 0h20v20H0z"></path>
                </g>
              </svg>
            </button>
          </div>

          <p className={styles.signup}>
            아직 회원이 아니신가요? <span>회원가입</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
