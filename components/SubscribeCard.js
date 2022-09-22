const SubscribeCard = () => {
	return (
		<div className='bg-stone-700 shadow-2xl text-color-white p-2 m-auto rounded-2xl w-1/2 h-60 flex'>
			<div className=' h-full w-1/4'>
				<img
					src='/images/image.jpg'
					alt=''
					className='w-full h-full object-cover rounded-l-2xl hover:scale-105 transition'
				/>
			</div>
			<div className='flex-1 bg-stone-700 flex flex-col px-10 justify-center gap-5'>
				<h2 className=''>Get diet and fitness tips in your inbox</h2>
				<p className='text-left text-xs pr-10'>
					Eat better and exercise better. sign up for the Diet&Fitness
					newsletter.
				</p>
				<div className='flex gap-3'>
					<input
						placeholder='Enter your email adress'
						className='w-2/3 rounded-md px-5 text-xs border-solid border-gray-600 border-[1px] outline-none'
					/>
					<button className='bg-yellow-300 hover:bg-yellow-500 hover:text-white px-4 py-3 rounded-lg text-black text-sm'>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default SubscribeCard;
