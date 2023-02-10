import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer';
import axios from '../../../lib/axios';
import { bindingState } from '../../../lib/bindingState';

const ContainerLogin: FC = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    role: '',
  });
  const [notifiedSuccess, setNotifiedSuccess] = useState(0);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = { username: data.username, password: data.password };

    if (data.role === 'admin') {
      try {
        const res = await axios.post('/login-admin', sendData);

        if (res.data.status === 'success') {
          setNotifiedSuccess(1);

          localStorage.setItem('access', res.data.authorization.token);
          localStorage.setItem('admin', JSON.stringify(res.data.user));
          router.push('/admin/dashboard');
        }
      } catch (err) {
        setNotifiedSuccess(2);
        console.log(err);
      }
    } else if (data.role === 'doctor') {
      try {
        const res = await axios.post('/login-dokter', sendData);

        if (res.data.status === 'success') {
          setNotifiedSuccess(1);

          localStorage.setItem('access', res.data.authorization.token);
          localStorage.setItem('doctor', JSON.stringify(res.data.user));
          router.push('/receptionist/dashboard');
        }
      } catch (err) {
        setNotifiedSuccess(2);
        console.log(err);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Masuk - Brand Klinik</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Selamat datang di Klinik Kesehatan Nama Klinik! Silahkan Masukkan Data Anda!"
        />
        <meta
          property="og:url"
          content="https://klinik-next.vercel.app/auth/login"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Brand Klinik" />
        <meta
          property="og:description"
          content="Selamat datang di Klinik Kesehatan Nama Klinik! Silahkan Masukkan Data Anda!"
        />
        <meta property="og:title" content="Masuk - Brand Klinik" />
        <meta
          property="og:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_login.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Masuk - Brand Klinik" />
        <meta
          name="twitter:description"
          content="Selamat datang di Klinik Kesehatan Nama Klinik! Silahkan Masukkan Data Anda!"
        />
        <meta
          name="twitter:image"
          content="http://klinik-next.vercel.app/assets/svg/undraw_login.svg"
        />
        <link
          rel="canonical"
          href="https://klinik-next.vercel.app/auth/login"
        />
      </Head>

      <Navbar />

      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-6xl mx-auto">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-10 lg:mb-0 w-full px-4 mx-5 lg:w-1/2">
                  <img
                    src="/assets/svg/undraw_login.svg"
                    loading="lazy"
                    alt="Hero Illustration"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="w-full px-4 mx-5 lg:w-1/2">
                  <div className="flex items-center justify-center mb-5">
                    <h1 className="font-primary font-semibold text-2xl lg:text-3xl text-center">
                      Selamat Datang!
                    </h1>
                  </div>

                  <form
                    className="bg-white rounded-lg shadow-lg p-8"
                    onSubmit={handleSubmit}
                  >
                    {notifiedSuccess === 1 && (
                      <div className="mb-4 bg-green-500 p-3 rounded">
                        <p className="text-white text-sm font-bold">
                          Login Sukses, Selamat datang kembali!
                        </p>
                      </div>
                    )}

                    {notifiedSuccess === 2 && (
                      <div className="mb-4 bg-red-500 p-3 rounded">
                        <p className="text-white text-sm font-bold">
                          Username atau Password salah, silakan coba kembali!
                        </p>
                      </div>
                    )}

                    <div className="mb-3">
                      <label
                        htmlFor="username"
                        className="block text-slate-600 mb-2"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        placeholder="Masukkan Username"
                        autoFocus={true}
                        required
                        value={data.username}
                        onChange={(e) => bindingState(e, setData, 'username')}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="block text-slate-600 mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        placeholder="Masukkan password"
                        required
                        value={data.password}
                        onChange={(e) => bindingState(e, setData, 'password')}
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="role"
                        className="block text-slate-600 mb-2"
                      >
                        Login Sebagai
                      </label>
                      <select
                        name="role"
                        id="role"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary/70"
                        required
                        value={data.role}
                        onChange={(e) => bindingState(e, setData, 'role')}
                      >
                        <option selected disabled>
                          Pilih Jabatan
                        </option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Dokter</option>
                      </select>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primarydark text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out mt-3"
                      >
                        Masuk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContainerLogin;
