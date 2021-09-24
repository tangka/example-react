import React, { Suspense, useState, useTransition } from "react";
import { fetchProfileData } from "./fakeApi";

const initialResource = fetchProfileData();

function Button({ children, onClick }) {
  const [
    isPending,
    startTransition,
  ] = useTransition({
    timeoutMs: 100
  });

  function handleClick() {
    startTransition(() => {
      onClick();
    });
  }

  console.log(isPending);

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isPending}
      >
        {children}
      </button>
      {isPending ? 'loading...' + isPending : null}
    </>
  );
}

function ProfilePage() {
  const [resource, setResource] = useState(
    initialResource
  );

  function handleRefreshClick() {
    setResource(fetchProfileData());
  }

  return (
    <Suspense
      fallback={<h1>Loading profile...</h1>}
    >
      <ProfileDetails resource={resource} />
      <Button onClick={handleRefreshClick}>
        Refresh
      </Button>
      <Suspense
        fallback={<h1>Loading posts...</h1>}
      >
        <ProfileTimeline resource={resource} />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails({ resource }) {
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline({ resource }) {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}


export default ProfilePage;
