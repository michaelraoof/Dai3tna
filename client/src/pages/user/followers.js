import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import baseUrl from "utils/baseUrl";
import cookie from "js-cookie";
import InfoBox from "components/HelperComponents/InfoBox";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import Header from "components/Header";
import styled from "styled-components";
import { followUser, unfollowUser } from "utils/profileActions";
import Sidebar from "components/Sidebar";
import useBearStore from "store/store";

function FollowersPage() {
  const router = useNavigate();
  const params = useParams();
  const { user, userFollowStats } = useBearStore((state) => ({
    user: state.user,
    userFollowStats: state.userFollowStats,
  }));
  const [followersArrayState, setFollowersArrayState] = useState(null);
  const [errorLoading, setErrorLoading] = useState(false);
  useEffect(() => {
    const getFollowers = async () => {
      try {
        const token = cookie.get("token");
        const followers = await axios
          .get(`${baseUrl}/api/profile/followers/${params.userId}`, {
            headers: { Authorization: token },
          })
          .then((res) => res.data);
        setFollowersArrayState(followers);
      } catch {
        setErrorLoading(true);
      }
    };
    getFollowers();
  }, []);

  const [loggedUserFollowStats, setLoggedUserFollowStats] =
    useState(userFollowStats);
  const [loading, setLoading] = useState(false);

  if (errorLoading) {
    return (
      <InfoBox
        Icon={ExclamationCircleIcon}
        message={"Oops, an error occured"}
        content={`There was an error while fetching the users this user has followed`}
      />
    );
  }
  if (followersArrayState) {
    return (
      <div className="bg-gray-100 h-screen">
        <Header user={user} />
        <main
          style={{
            height: "calc(100vh - 4.5rem)",
            overflowY: "auto",
            display: "flex",
          }}
        >
          <Sidebar user={user} topDist={"0"} maxWidth={"250px"} />
          <div
            style={{ fontFamily: "Inter" }}
            className="mx-auto h-full w-full flex-1 max-w-md md:max-w-xl lg:max-w-[61.5rem] xl:max-w-[67rem] bg-white p-4 shadow-lg rounded-lg overflow-y-auto"
          >
            <div className="flex items-center ml-2">
              <Title>Followers ·</Title>
              <FollowersNumber className="text-gray-500 ml-2">
                {followersArrayState.length}
              </FollowersNumber>
            </div>
            {followersArrayState.length > 0 ? (
              <GridContainer className="grid-cols-1 lg:grid-cols-2">
                {followersArrayState.map((fol) => {
                  const isLoggedInUserFollowing =
                    loggedUserFollowStats.following.length > 0 &&
                    loggedUserFollowStats.following.filter(
                      (loggedInUserFollowing) =>
                        loggedInUserFollowing.user === fol.user._id
                    ).length > 0;

                  return (
                    <div
                      style={{ border: "1px solid #eee" }}
                      key={fol.user._id}
                      className="flex items-center justify-between p-4 mb-4 rounded-lg bg-white"
                    >
                      <div className="flex items-center  ">
                        <Image src={fol.user.profilePicUrl} alt="userimg" />
                        <Name
                          className="ml-3"
                          onClick={() => router(`/${fol.user.username}`)}
                        >
                          {fol.user.name}
                        </Name>
                      </div>
                      {fol.user._id !== user._id ? (
                        <>
                          {isLoggedInUserFollowing ? (
                            <FollowButton
                              onClick={async () => {
                                await unfollowUser(
                                  fol.user._id,
                                  setLoggedUserFollowStats,
                                  setLoading
                                );
                              }}
                            >
                              <CheckCircleIcon className="h-6" />
                              <p className="ml-1.5">Following</p>
                            </FollowButton>
                          ) : (
                            <FollowButton
                              onClick={async () => {
                                await followUser(
                                  fol.user._id,
                                  setLoggedUserFollowStats,
                                  setLoading
                                );
                              }}
                            >
                              <UserAddIcon className="h-6" />
                              <p className="ml-1.5">Follow</p>
                            </FollowButton>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </GridContainer>
            ) : params.userId === user._id ? (
              <p className="text-md text-gray-500">
                {`You don't have any followers ☹️. The trick is to follow someone and then
          wait for them to follow you back.`}
              </p>
            ) : (
              <p className="text-md text-gray-500">{`This user doesn't have any followers.`}</p>
            )}
          </div>
          <div className="w-10"></div>
        </main>
      </div>
    );
  }
}

export default FollowersPage;

const FollowButton = styled.div`
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: rgba(139, 92, 246);
  color: white;
  font-size: 1.1rem;
  font-family: "Inter";
  font-weight: 400;
`;

const GridContainer = styled.div`
  display: grid;
  column-gap: 0.9rem;
`;

const Image = styled.img`
  object-fit: cover;
  height: 6rem;
  width: 6rem;
  border-radius: 0.6rem;
`;

const Name = styled.p`
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  font-size: 1.12rem;
  font-family: "Inter";
  :hover {
    text-decoration: underline;
  }
`;

const Title = styled.p`
  user-select: none;
  font-size: 1.65rem;
  font-weight: 600;
  font-family: Inter;
`;

const FollowersNumber = styled.p`
  font-family: Inter;
  user-select: none;
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: -1.65rem;
`;
