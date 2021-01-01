import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  // now I have the user information in user variable which is coming from store
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  console.log("<<<<", posts);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            likes: doc.likes,
          }))
        )
      );
  }, []);

  // every message I push in , I want to have timestamp
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      userId: user.uid,
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || " ",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      likes: [],
    });

    setInput(""); // clean the input field
  };

  //Clicking “like” will trigger the following function:
  const clickLike = (postId, userId) => {
    let copyOfPostsState = [...posts];
    console.log("<<<<<", copyOfPostsState);

    for (let i = 0; i < copyOfPostsState; i++) {
      const loopPostId = copyOfPostsState[i].id;

      if (loopPostId === postId) {
        let newLike = {
          userId: userId,
        };
        copyOfPostsState[i].likes.push(newLike);
        break;
      }
    }

    setPosts(copyOfPostsState);
  };

  //Update the posts with the new posts
  // you need a useEffect
  // useEffect(() => {
  //   // code that updates firebase "posts" collection, to keep the DB updated too
  //   db.collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) =>
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //           likes: doc.likes,
  //         }))
  //       )
  //     );
  // }, [posts]); // triggered only when the "posts" state changes

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/* inputOption */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color=" #C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      {/* the props are coming from the database, see above */}

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            likes={clickLike}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
