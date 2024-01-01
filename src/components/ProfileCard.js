function ProfileCard({ author }) {
  return (
    <div className="bg-[#000000cc] max-w-sm h-auto flex flex-col  items-center gap-5 mx-auto py-2 ">
      <img
        src={`https://source.unsplash.com/random/200x200?sig=${author.id}`}
        alt="img"
      />
      <h1 className="text-white text-4xl">
        {author.firstName} {author.lastName}
      </h1>
      <p className="text-gray-500 text-lg">mobile: {author.phone}</p>
      <span className="text-white">POSTS : {author.numPosts}</span>
      <p className="text-white">LIKES : {author.numLikes}</p>
    </div>
  );
}

export default ProfileCard;
