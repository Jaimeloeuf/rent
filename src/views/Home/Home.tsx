import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar';
import { PostCard } from './PostCard';

import { Post } from '../../types';
import { getPostData } from '../../utils/PostData';

export function Home() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    async function fetchData() {
      setPosts(await getPostData());
    }

    fetchData();
  }, []);

  return (
    <>
      {/* @todo Refactor into a sticky navbar component */}
      <div className="pb-4">
        <p className="text-4xl font-extrabold tracking-tighter">RENT</p>
        <p className="-mt-2 text-sm font-light">simple renting</p>
      </div>

      <div className="mx-auto max-w-screen-md">
        <div className="pb-8">
          <Searchbar />
        </div>

        <div className="w-full">
          {/* @todo click to open new link */}
          {posts.map((post) => (
            <div key={post.id} className="pb-4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
