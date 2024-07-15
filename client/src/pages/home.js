import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import cookie from "js-cookie";
import Feed from "../components/Feed";
import baseUrl from "../utils/baseUrl";
import styles from "../styles/styles.module.css";
import RightSideColumn from "../components/RightSideColumn";
import useBearStore from "store/store";

function Home() {
  const user = useBearStore((state) => state.user);

  const [posts, setPosts] = useState(null);
  const [chatsData, setChatsData] = useState(null);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = cookie.get("token"); // Assuming parseCookies function is defined elsewhere

        const res = await axios.get(`${baseUrl}/api/posts`, {
          headers: { Authorization: token },
          params: { pageNumber: 1 },
        });

        const chatRes = await axios.get(`${baseUrl}/api/chats`, {
          headers: { Authorization: token },
        });

        setPosts(res.data);
        setChatsData(chatRes.data);
      } catch (error) {
        console.error("error", error);

        setErrorLoading(true);
      }
    };

    fetchData();
  }, []);

  if (errorLoading) {
    return <div>Error loading data home page.</div>;
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Header user={user} />

        <main className="flex">
          <Sidebar user={user} />
          <Feed
            user={user}
            posts={posts}
            setPosts={setPosts}
            errorLoading={errorLoading}
            increaseSizeAnim={{
              sizeIncDown: styles.increasesizereally,
              sizeIncUp: styles.sizeup,
            }}
          />
          <RightSideColumn chatsData={chatsData} />
        </main>
      </div>
    </>
  );
}

export default Home;
