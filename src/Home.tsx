import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar';
import { PostingCard } from './PostingCard';

import { Posting } from './types';
import { getPostingData } from './utils/PostingData';

export function Home() {
  const [postings, setPostings] = useState<Array<Posting>>([]);

  useEffect(() => {
    async function fetchData() {
      setPostings(await getPostingData());
      console.log('data is loaded');
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
          {postings.map((posting) => (
            <div key={posting.id} className="pb-4">
              <PostingCard posting={posting} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
