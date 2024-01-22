import { useParams } from 'react-router-dom';

export function Post() {
  const { postID } = useParams<{ postID: string }>();

  return (
    <>
      {/* @todo Refactor into a sticky navbar component */}
      <div className="pb-4">
        <p className="text-4xl font-extrabold tracking-tighter">RENT</p>
        <p className="-mt-2 text-sm font-light">simple renting</p>
      </div>

      <div className="mx-auto max-w-screen-md">{postID}</div>
    </>
  );
}
