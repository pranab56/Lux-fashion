import React from 'react';

const Contact = () => {
    return (
        <div>
          <section className="p-6 dark:text-gray-100">
	<form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label for="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block border-2 border-gray-400 w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block border-2 border-gray-400 w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block border-2 border-gray-400 w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
		</div>
		<button class="mt-8 shrink-0 w-full md:w-auto ml-0 lg:ml-20 lg:mt-8 py-2 md:py-3 px-32 flex justify-center duration-700  items-center text-base border-2 border-red-500 transition bg-red-500 hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                Shop now
            </button> 
	</form>
</section>
        </div>
    );
};

export default Contact;