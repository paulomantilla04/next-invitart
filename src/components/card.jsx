import Image from "next/image";

export default function Card({ username, email, image }) {
  return (
    <div className='relative rounded-lg p-5 flex flex-col items-center shadow-xl m-5 bg-gray-100'>
    <div className='absolute -top-16'>
      <Image
        src={image}
        alt="User"
        width={150}
        height={150}
        className="rounded-full"
      />
    </div>
  <p className='mt-20 font-bold text-center'>{username}</p>
  <p className='text-gray-500 text-center'>{email}</p>
</div>
  );
}